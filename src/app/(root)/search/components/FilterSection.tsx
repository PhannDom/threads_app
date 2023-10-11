import UserCard from "@/components/shared/card/UseCard";
import { fetchUsers } from "@/lib/actions/user.actions";
import { Typography } from "@mui/material";

const FilterSection = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) => {
  // const user = await currentUser();

  // if (!user) return null;

  // const userInfo = await fetchUser(user.id);

  // if (!userInfo?.onboarded) redirect("/onboarding");

  const userId = "user_2VKghV81xrggTVp4z6ErKJq5hFa";
  const sleep = () =>
    new Promise((r) => {
      setTimeout(() => {
        r(
          fetchUsers({
            userId: userId,
            searchString: searchParams.q,
            pageNumber: searchParams?.page ? +searchParams.page : 1,
            pageSize: 25,
          })
        );
      }, 1000);
    });

  // Fetch users
  const result: any = await sleep();

  return (
    <>
      {result.users.length === 0 ? (
        <Typography>No Result</Typography>
      ) : (
        <>
          {result.users.map((person: any) => {
            return (
              <UserCard
                key={person.id}
                id={person.id}
                name={person.name}
                username={person.username}
                imgUrl={person.image}
                personType="User"
              />
            );
          })}
        </>
      )}
    </>
  );
};

export default FilterSection;
