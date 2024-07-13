import { CheckCircledIcon } from "@radix-ui/react-icons";
interface FormSuccessProps {
  message: string;
}
export const FormSuccess = ({ message }: FormSuccessProps) => {
  if (!message) return null;
  return (
    <div className="bg-emerald-500/15 p-3 rounded-md flex items-center gap-x-2 text-[13px] text-emerald-500 mb-4 md:text-[15px]">
      <CheckCircledIcon className=" h-4 w-4" />
      <span>{message}</span>
    </div>
  );
};
