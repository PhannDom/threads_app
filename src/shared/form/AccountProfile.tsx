"use client";

import * as z from "zod";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { usePathname, useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";

import { UserValidation } from "@/lib/validations/user";
import { updateUser } from "@/lib/actions/user.actions";
import {
  Box,
  Button,
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  Link,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";

import { styled } from "@mui/material/styles";
import { FileUploadOutlined } from "@mui/icons-material";
import { isBase64Image, useUploadThing } from "@/lib/utils";

const Input = styled("input")({
  display: "none",
});

interface Props {
  user: {
    id: string;
    objectId: string;
    username: string;
    name: string;
    bio: string;
    image: string;
  };
  btnTitle: string;
}

const AccountProfile = ({ user, btnTitle }: Props) => {
  const router = useRouter();
  const pathname = usePathname();
  const { startUpload } = useUploadThing("media");

  const [files, setFiles] = useState<File[]>([]);

  const form = useForm<z.infer<typeof UserValidation>>({
    resolver: zodResolver(UserValidation),
    defaultValues: {
      profile_photo: user?.image ? user.image : "",
      name: user?.name ? user.name : "",
      username: user?.username ? user.username : "",
      bio: user?.bio ? user.bio : "",
    },
  });

  const onSubmit = async (values: z.infer<typeof UserValidation>) => {
    const blob = values.profile_photo;

    const hasImageChanged = isBase64Image(blob);
    if (hasImageChanged) {
      const imgRes = await startUpload(files);

      if (imgRes?.[0].url) {
        values.profile_photo = imgRes[0].url;
      }
    }

    await updateUser({
      name: values.name,
      path: pathname,
      username: values.username,
      userId: user.id,
      bio: values.bio,
      image: values.profile_photo,
    });

    if (pathname === "/profile/edit") {
      router.back();
    } else {
      router.push("/");
    }
  };

  const handleImage = (
    e: ChangeEvent<HTMLInputElement>,
    fieldChange: (value: string) => void
  ) => {
    e.preventDefault();

    const fileReader = new FileReader();

    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setFiles(Array.from(e.target.files));

      if (!file.type.includes("image")) return;

      fileReader.onload = async (event) => {
        const imageDataUrl = event.target?.result?.toString() ?? "";
        fieldChange(imageDataUrl);
      };

      fileReader.readAsDataURL(file);
    }
  };

  return (
    <Box
      component="form"
      autoComplete="off"
      noValidate
      onSubmit={form.handleSubmit(onSubmit)}
    >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            id="name"
            label="Name"
            required
            fullWidth
            autoFocus
            name="name"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="username"
            label="User Name"
            required
            fullWidth
            name="username"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="bio"
            label="Bio"
            fullWidth
            name="bio"
            multiline
            rows={4}
          />
        </Grid>
      </Grid>
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ mt: 3, mb: 2 }}
        >
          {btnTitle}
        </Button>
      </Box>
    </Box>
  );
};

export default AccountProfile;
