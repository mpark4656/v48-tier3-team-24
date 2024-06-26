import Image from "next/image";

const Spinner = ({ message }: { message?: string }) => {
  return (
    <div className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-3">
      <Image
        src="/spinner.svg"
        alt="Just wait..."
        className="w-14"
        width={200}
        height={200}
      />
      {message && <p>{message}</p>}
    </div>
  );
};

export default Spinner;
