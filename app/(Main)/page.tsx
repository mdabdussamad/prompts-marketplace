// import React from "react";
// import RoutePage from "./_page";
// import { getUser } from "@/actions/user/getUser";

// const Page = async () => {
//   const data = await getUser();
 
//   return (
//     <div>
//       <RoutePage
//         user={data?.user}
//         isSellerExist={data?.shop ? true : false}
//       />
//     </div>
//   );
// };

// export default Page;

import React from "react";
import RoutePage from "./_page";
import { getUser } from "@/actions/user/getUser";

const Page = async () => {
  const data = await getUser();
  
  // Convert to plain objects
  const plainData = data ? {
    user: JSON.parse(JSON.stringify(data.user)),
    shop: JSON.parse(JSON.stringify(data.shop))
  } : null;
 
  return (
    <div>
      <RoutePage
        user={plainData?.user}
        isSellerExist={plainData?.shop ? true : false}
      />
    </div>
  );
};

export default Page;