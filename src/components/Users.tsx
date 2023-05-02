import { useUsers } from "@/hooks/useUsers";

import { Container } from "./Container";
import User from "./User";

export default function Users() {
  const { users } = useUsers();

  return (
    <Container>
      <section id="users" className="pb-[50px]">
        {!!users.length ? (
          <h2 className="text-center my-[20px] font-bold text-xl">Members</h2>
        ) : (
          <div className="mt-10  bg-nothing bg-no-repeat bg-cover bg-center w-[100%] min-h-[280px] lg:min-h-[380px] xl:min-h-[430px] rounded "></div>
        )}
        <ul className="grid grid-cols-1 gap-1 sm:grid-cols-2 sm:gap-2   lg:grid-cols-4 lg:gap-4 ">
          {!!users.length &&
            users.map(({ name, userImg, uid }) => (
              <User key={uid} name={name} userImg={userImg} uid={uid} />
            ))}
        </ul>
      </section>
    </Container>
  );
}
