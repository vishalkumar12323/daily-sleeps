import { Metadata } from "next";
import EntriesForm from "../ui/forms/entry-form";

export const metaData: Metadata = {
  title: "/entry",
  description: "daily-sleeps entry page create new-entry",
};
export default function EntryPage() {
  return <EntriesForm />;
}
