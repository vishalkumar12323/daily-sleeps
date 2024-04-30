import { Metadata } from "next";
import EntriesForm from "../ui/forms/entry-form";

const metaData: Metadata = {
  title: "/entry",
};
export default function EntryPage() {
  return <EntriesForm />;
}

export { metaData };
