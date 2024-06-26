"use client";

import Link from "next/link";

const UiComponents = () => {
  return (
    <div className="p-20">
      <h1 className="mb-5 text-xl font-bold">Components List</h1>
      <Link href="ui-components/button-demo">
        <p className="text-[#2245c6]">1. Go to Button Component Demo</p>
      </Link>
      <Link href="ui-components/event-components-demo">
        <p className="text-[#2245c6]">
          2. Go to Event List & Event Card Component Demo
        </p>
      </Link>
      <Link href="ui-components/header-demo">
        <p className="text-[#2245c6]">3. Go to Header Demo</p>
      </Link>
      <Link href="ui-components/modal-demo">
        <p className="text-[#2245c6]">4. Go to Modal demo</p>
      </Link>
    </div>
  );
};

export default UiComponents;
