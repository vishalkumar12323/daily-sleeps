import { fetchCurrentUser } from "@/app/lib/data";
import EntriesForm from "@/app/ui/forms/entry-form";
import { auth } from "@/auth";

export default async function Page() {
  const session = await auth();
  const user = await fetchCurrentUser(session?.user?.email as string);
  return <EntriesForm currentUser={user} />;
}
