"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { usePathname, useRouter } from "next/navigation";

import { ThreadValidation } from "@/lib/validations/thread";
import { createThread } from "@/lib/actions/thread.actions";

import { useOrganization } from "@clerk/nextjs";
import { Button } from "@mui/material";
import { TextInput } from "./TextInput";

interface Props {
  userId: string;
}

function PostThread({ userId }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const organizationId = "org_2VyCYfZltX5t8o4RM8TytU4BXIF";

  // const { organization } = useOrganization();

  const { handleSubmit, reset, control } = useForm<
    z.infer<typeof ThreadValidation>
  >({
    resolver: zodResolver(ThreadValidation),
    defaultValues: {
      thread: "",
      accountId: userId,
    },
  });

  const onSubmit = async (values: z.infer<typeof ThreadValidation>) => {
    await createThread({
      text: values.thread,
      author: userId,
      communityId: organizationId,
      path: pathname,
    });

    router.push("/");
  };

  return (
    <>
      <form
        style={{
          marginTop: "2.5rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "start",
          gap: "2.5rem",
        }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <TextInput
          name="thread"
          control={control}
          label="Content"
          isTextArea
          rows={8}
        />
        <Button type="submit" variant="contained">
          Submit
        </Button>
      </form>
    </>
  );
}

export default PostThread;
