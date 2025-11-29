# 📁 PROJECT EXPORT FOR LLMs

## 📊 Project Information

- **Project Name**: `prompt-marketplace`
- **Generated On**: 2025-11-28 21:11:11 (Asia/Katmandu / GMT+06:45)
- **Total Files Processed**: 105
- **Export Tool**: Easy Whole Project to Single Text File for LLMs v1.1.0
- **Tool Author**: Jota / José Guilherme Pandolfi

### ⚙️ Export Configuration

| Setting | Value |
|---------|-------|
| Language | `en` |
| Max File Size | `1 MB` |
| Include Hidden Files | `false` |
| Output Format | `both` |

## 🌳 Project Structure

```
├── 📁 @types/
│   ├── 📄 ImagesTypes.ts (96 B)
│   ├── 📄 OrderTypes.ts (223 B)
│   ├── 📄 PromptFilesTypes.ts (102 B)
│   ├── 📄 promptTypes.ts (563 B)
│   ├── 📄 reviewsTypes.ts (135 B)
│   ├── 📄 shopTypes.ts (328 B)
│   └── 📄 withdawMethodTypes.ts (217 B)
├── 📁 actions/
│   ├── 📁 analytics/
│   │   └── 📄 getOrdersAnalytics.ts (1.14 KB)
│   ├── 📁 orders/
│   │   ├── 📄 createOrder.ts (723 B)
│   │   ├── 📄 getShopOrders.ts (721 B)
│   │   └── 📄 getUserOrders.ts (573 B)
│   ├── 📁 payment/
│   │   └── 📄 paymentAction.ts (732 B)
│   ├── 📁 prompts/
│   │   └── 📄 createPrompt.ts
│   ├── 📁 reviews/
│   │   └── 📄 newReview.ts (1.48 KB)
│   ├── 📁 shop/
│   │   ├── 📄 getAllPromptsByShop.ts (526 B)
│   │   ├── 📄 getSellerInfo.ts (887 B)
│   │   ├── 📄 getShopById.ts (282 B)
│   │   └── 📄 getTopSellers.ts (356 B)
│   ├── 📁 user/
│   │   └── 📄 getUser.ts (503 B)
│   └── 📁 withdraws/
│       ├── 📄 addWithdraw.ts (452 B)
│       ├── 📄 addWithdrawMethod.ts (826 B)
│       ├── 📄 deleteWithdrawMethod.ts (376 B)
│       └── 📄 sellerInvoices.ts (422 B)
├── 📁 app/
│   ├── 📁 (Main)/
│   │   ├── 📄 _page.tsx (2.95 KB)
│   │   └── 📄 page.tsx (898 B)
│   ├── 📁 (Providers)/
│   │   └── 📄 NextUiProvider.tsx (461 B)
│   ├── 📁 (Shop)/
│   │   ├── 📁 my-shop/
│   │   │   ├── 📄 _page.tsx (2.86 KB)
│   │   │   └── 📄 page.tsx (993 B)
│   │   └── 📁 shop/
│   │       ├── 📁 create-prompt/
│   │       │   └── 📄 page.tsx (513 B)
│   │       ├── 📁 invoices/
│   │       │   ├── 📄 _page.tsx (2.45 KB)
│   │       │   └── 📄 page.tsx (777 B)
│   │       ├── 📁 orders/
│   │       │   └── 📄 page.tsx (830 B)
│   │       ├── 📁 prompts/
│   │       │   └── 📄 page.tsx (753 B)
│   │       └── 📁 withdraw/
│   │           ├── 📄 _page.tsx (8.77 KB)
│   │           └── 📄 page.tsx (987 B)
│   ├── 📁 about/
│   │   └── 📄 page.tsx (106 B)
│   ├── 📁 api/
│   │   └── 📁 (routes)/
│   │       ├── 📁 (orders)/
│   │       │   └── 📁 get-user-orders/
│   │       │       └── 📄 route.ts (882 B)
│   │       ├── 📁 (prompt)/
│   │       │   ├── 📁 get-prompt/
│   │       │   │   └── 📁 [promptId]/
│   │       │   │       └── 📄 route.ts (2.55 KB)
│   │       │   ├── 📁 get-prompts/
│   │       │   │   └── 📄 route.ts (1.6 KB)
│   │       │   ├── 📁 get-related-prompts/
│   │       │   │   └── 📄 route.ts (1.14 KB)
│   │       │   └── 📁 upload-prompt/
│   │       │       └── 📄 route.ts (2.25 KB)
│   │       ├── 📁 (shop)/
│   │       │   ├── 📁 create-shop/
│   │       │   │   └── 📄 route.ts (792 B)
│   │       │   └── 📁 get-top-sellers/
│   │       │       └── 📄 route.ts (520 B)
│   │       └── 📁 (user)/
│   │           └── 📁 me/
│   │               └── 📄 route.ts (755 B)
│   ├── 📁 contact/
│   │   └── 📄 page.tsx (108 B)
│   ├── 📁 create-shop/
│   │   └── 📄 page.tsx (3.86 KB)
│   ├── 📁 marketplace/
│   │   ├── 📄 _page.tsx (3.32 KB)
│   │   └── 📄 page.tsx (381 B)
│   ├── 📁 my-orders/
│   │   ├── 📄 _page.tsx (8.28 KB)
│   │   └── 📄 page.tsx (389 B)
│   ├── 📁 policy/
│   │   └── 📄 page.tsx (107 B)
│   ├── 📁 prompt/
│   │   └── 📁 [id]/
│   │       ├── 📄 _page.tsx (2.7 KB)
│   │       └── 📄 page.tsx (605 B)
│   ├── 📁 sign-in/
│   │   └── 📁 [[...sign-in]]/
│   │       └── 📄 page.tsx (191 B)
│   ├── 📁 sign-up/
│   │   └── 📁 [[...sign-up]]/
│   │       └── 📄 page.tsx (188 B)
│   ├── 📄 favicon.ico (25.32 KB)
│   ├── 📄 globals.css (1.55 KB)
│   └── 📄 layout.tsx (980 B)
├── 📁 components/
│   ├── 📁 Analytics/
│   │   └── 📄 OrderAnalytics.tsx (2.42 KB)
│   ├── 📁 Layout/
│   │   ├── 📄 DropDown.tsx (2.69 KB)
│   │   ├── 📄 Footer.tsx (1.5 KB)
│   │   ├── 📄 Header.tsx (4.07 KB)
│   │   └── 📄 Navigation.tsx (882 B)
│   ├── 📁 Prompts/
│   │   ├── 📁 PromptDetails/
│   │   │   ├── 📄 CheckoutForm.tsx (1.81 KB)
│   │   │   ├── 📄 PromptDetails.tsx (2.05 KB)
│   │   │   ├── 📄 PromptDetailsCard.tsx (5.1 KB)
│   │   │   ├── 📄 PromptInformation.tsx (2.65 KB)
│   │   │   └── 📄 ReviewCard.tsx (898 B)
│   │   ├── 📄 AllPrompts.tsx (2.67 KB)
│   │   ├── 📄 FilterPrompt.tsx (1.1 KB)
│   │   └── 📄 PromptCard.tsx (2.69 KB)
│   ├── 📁 Route/
│   │   ├── 📄 About.tsx (1.42 KB)
│   │   ├── 📄 Future.tsx (1.22 KB)
│   │   ├── 📄 Hero.tsx (2.85 KB)
│   │   └── 📄 Partners.tsx (1.67 KB)
│   └── 📁 Shop/
│       ├── 📄 BestSellers.tsx (1.38 KB)
│       ├── 📄 SellerCard.tsx (1.21 KB)
│       ├── 📄 SellersBanner.tsx (900 B)
│       ├── 📄 ShopAllOrders.tsx (3.25 KB)
│       ├── 📄 ShopBanner.tsx (944 B)
│       ├── 📄 ShopSidebar.tsx (1.87 KB)
│       └── 📄 UploadPrompt.tsx (10.85 KB)
├── 📁 lib/
│   ├── 📄 cloudinary.ts (245 B)
│   └── 📄 prismaDb.ts (299 B)
├── 📁 prisma/
│   └── 📄 schema.prisma (3.01 KB)
├── 📁 public/
│   ├── 📁 Assets/
│   │   ├── 📄 line.png (3.04 KB)
│   │   └── 📄 silver-blurred-background_1034-253.avif (1.18 KB)
│   ├── 📄 next.svg (1.34 KB)
│   └── 📄 vercel.svg (629 B)
├── 📁 utils/
│   ├── 📄 Loader.css (285 B)
│   ├── 📄 Loader.tsx (229 B)
│   ├── 📄 PromptCardLoader.tsx (876 B)
│   ├── 📄 Ratings.tsx (1.04 KB)
│   └── 📄 styles.ts (399 B)
├── 📄 global.d.ts (133 B)
├── 📄 LICENSE (34.32 KB)
├── 📄 middleware.ts (212 B)
├── 📄 next-env.d.ts (233 B)
├── 📄 next.config.js (182 B)
├── 📄 package-lock.json (263.72 KB)
├── 📄 package.json (1.28 KB)
├── 📄 postcss.config.js (82 B)
├── 📄 README.md (1.94 KB)
├── 📄 tailwind.config.ts (780 B)
└── 📄 tsconfig.json (595 B)
```

## 📑 Table of Contents

**Project Files:**

- [📄 @types/ImagesTypes.ts](#📄-types-imagestypes-ts)
- [📄 @types/OrderTypes.ts](#📄-types-ordertypes-ts)
- [📄 @types/PromptFilesTypes.ts](#📄-types-promptfilestypes-ts)
- [📄 @types/promptTypes.ts](#📄-types-prompttypes-ts)
- [📄 @types/reviewsTypes.ts](#📄-types-reviewstypes-ts)
- [📄 @types/shopTypes.ts](#📄-types-shoptypes-ts)
- [📄 @types/withdawMethodTypes.ts](#📄-types-withdawmethodtypes-ts)
- [📄 actions/analytics/getOrdersAnalytics.ts](#📄-actions-analytics-getordersanalytics-ts)
- [📄 actions/orders/createOrder.ts](#📄-actions-orders-createorder-ts)
- [📄 actions/orders/getShopOrders.ts](#📄-actions-orders-getshoporders-ts)
- [📄 actions/orders/getUserOrders.ts](#📄-actions-orders-getuserorders-ts)
- [📄 actions/payment/paymentAction.ts](#📄-actions-payment-paymentaction-ts)
- [📄 actions/prompts/createPrompt.ts](#📄-actions-prompts-createprompt-ts)
- [📄 actions/reviews/newReview.ts](#📄-actions-reviews-newreview-ts)
- [📄 actions/shop/getAllPromptsByShop.ts](#📄-actions-shop-getallpromptsbyshop-ts)
- [📄 actions/shop/getSellerInfo.ts](#📄-actions-shop-getsellerinfo-ts)
- [📄 actions/shop/getShopById.ts](#📄-actions-shop-getshopbyid-ts)
- [📄 actions/shop/getTopSellers.ts](#📄-actions-shop-gettopsellers-ts)
- [📄 actions/user/getUser.ts](#📄-actions-user-getuser-ts)
- [📄 actions/withdraws/addWithdraw.ts](#📄-actions-withdraws-addwithdraw-ts)
- [📄 actions/withdraws/addWithdrawMethod.ts](#📄-actions-withdraws-addwithdrawmethod-ts)
- [📄 actions/withdraws/deleteWithdrawMethod.ts](#📄-actions-withdraws-deletewithdrawmethod-ts)
- [📄 actions/withdraws/sellerInvoices.ts](#📄-actions-withdraws-sellerinvoices-ts)
- [📄 app/(Main)/_page.tsx](#📄-app-main-page-tsx)
- [📄 app/(Main)/page.tsx](#📄-app-main-page-tsx)
- [📄 app/(Providers)/NextUiProvider.tsx](#📄-app-providers-nextuiprovider-tsx)
- [📄 app/(Shop)/my-shop/_page.tsx](#📄-app-shop-my-shop-page-tsx)
- [📄 app/(Shop)/my-shop/page.tsx](#📄-app-shop-my-shop-page-tsx)
- [📄 app/(Shop)/shop/create-prompt/page.tsx](#📄-app-shop-shop-create-prompt-page-tsx)
- [📄 app/(Shop)/shop/invoices/_page.tsx](#📄-app-shop-shop-invoices-page-tsx)
- [📄 app/(Shop)/shop/invoices/page.tsx](#📄-app-shop-shop-invoices-page-tsx)
- [📄 app/(Shop)/shop/orders/page.tsx](#📄-app-shop-shop-orders-page-tsx)
- [📄 app/(Shop)/shop/prompts/page.tsx](#📄-app-shop-shop-prompts-page-tsx)
- [📄 app/(Shop)/shop/withdraw/_page.tsx](#📄-app-shop-shop-withdraw-page-tsx)
- [📄 app/(Shop)/shop/withdraw/page.tsx](#📄-app-shop-shop-withdraw-page-tsx)
- [📄 app/about/page.tsx](#📄-app-about-page-tsx)
- [📄 app/api/(routes)/(orders)/get-user-orders/route.ts](#📄-app-api-routes-orders-get-user-orders-route-ts)
- [📄 app/api/(routes)/(prompt)/get-prompt/[promptId]/route.ts](#📄-app-api-routes-prompt-get-prompt-promptid-route-ts)
- [📄 app/api/(routes)/(prompt)/get-prompts/route.ts](#📄-app-api-routes-prompt-get-prompts-route-ts)
- [📄 app/api/(routes)/(prompt)/get-related-prompts/route.ts](#📄-app-api-routes-prompt-get-related-prompts-route-ts)
- [📄 app/api/(routes)/(prompt)/upload-prompt/route.ts](#📄-app-api-routes-prompt-upload-prompt-route-ts)
- [📄 app/api/(routes)/(shop)/create-shop/route.ts](#📄-app-api-routes-shop-create-shop-route-ts)
- [📄 app/api/(routes)/(shop)/get-top-sellers/route.ts](#📄-app-api-routes-shop-get-top-sellers-route-ts)
- [📄 app/api/(routes)/(user)/me/route.ts](#📄-app-api-routes-user-me-route-ts)
- [📄 app/contact/page.tsx](#📄-app-contact-page-tsx)
- [📄 app/create-shop/page.tsx](#📄-app-create-shop-page-tsx)
- [📄 app/marketplace/_page.tsx](#📄-app-marketplace-page-tsx)
- [📄 app/marketplace/page.tsx](#📄-app-marketplace-page-tsx)
- [📄 app/my-orders/_page.tsx](#📄-app-my-orders-page-tsx)
- [📄 app/my-orders/page.tsx](#📄-app-my-orders-page-tsx)
- [📄 app/policy/page.tsx](#📄-app-policy-page-tsx)
- [📄 app/prompt/[id]/_page.tsx](#📄-app-prompt-id-page-tsx)
- [📄 app/prompt/[id]/page.tsx](#📄-app-prompt-id-page-tsx)
- [📄 app/sign-in/[[...sign-in]]/page.tsx](#📄-app-sign-in-sign-in-page-tsx)
- [📄 app/sign-up/[[...sign-up]]/page.tsx](#📄-app-sign-up-sign-up-page-tsx)
- [📄 app/globals.css](#📄-app-globals-css)
- [📄 app/layout.tsx](#📄-app-layout-tsx)
- [📄 components/Analytics/OrderAnalytics.tsx](#📄-components-analytics-orderanalytics-tsx)
- [📄 components/Layout/DropDown.tsx](#📄-components-layout-dropdown-tsx)
- [📄 components/Layout/Footer.tsx](#📄-components-layout-footer-tsx)
- [📄 components/Layout/Header.tsx](#📄-components-layout-header-tsx)
- [📄 components/Layout/Navigation.tsx](#📄-components-layout-navigation-tsx)
- [📄 components/Prompts/PromptDetails/CheckoutForm.tsx](#📄-components-prompts-promptdetails-checkoutform-tsx)
- [📄 components/Prompts/PromptDetails/PromptDetails.tsx](#📄-components-prompts-promptdetails-promptdetails-tsx)
- [📄 components/Prompts/PromptDetails/PromptDetailsCard.tsx](#📄-components-prompts-promptdetails-promptdetailscard-tsx)
- [📄 components/Prompts/PromptDetails/PromptInformation.tsx](#📄-components-prompts-promptdetails-promptinformation-tsx)
- [📄 components/Prompts/PromptDetails/ReviewCard.tsx](#📄-components-prompts-promptdetails-reviewcard-tsx)
- [📄 components/Prompts/AllPrompts.tsx](#📄-components-prompts-allprompts-tsx)
- [📄 components/Prompts/FilterPrompt.tsx](#📄-components-prompts-filterprompt-tsx)
- [📄 components/Prompts/PromptCard.tsx](#📄-components-prompts-promptcard-tsx)
- [📄 components/Route/About.tsx](#📄-components-route-about-tsx)
- [📄 components/Route/Future.tsx](#📄-components-route-future-tsx)
- [📄 components/Route/Hero.tsx](#📄-components-route-hero-tsx)
- [📄 components/Route/Partners.tsx](#📄-components-route-partners-tsx)
- [📄 components/Shop/BestSellers.tsx](#📄-components-shop-bestsellers-tsx)
- [📄 components/Shop/SellerCard.tsx](#📄-components-shop-sellercard-tsx)
- [📄 components/Shop/SellersBanner.tsx](#📄-components-shop-sellersbanner-tsx)
- [📄 components/Shop/ShopAllOrders.tsx](#📄-components-shop-shopallorders-tsx)
- [📄 components/Shop/ShopBanner.tsx](#📄-components-shop-shopbanner-tsx)
- [📄 components/Shop/ShopSidebar.tsx](#📄-components-shop-shopsidebar-tsx)
- [📄 components/Shop/UploadPrompt.tsx](#📄-components-shop-uploadprompt-tsx)
- [📄 lib/cloudinary.ts](#📄-lib-cloudinary-ts)
- [📄 lib/prismaDb.ts](#📄-lib-prismadb-ts)
- [📄 utils/Loader.css](#📄-utils-loader-css)
- [📄 utils/Loader.tsx](#📄-utils-loader-tsx)
- [📄 utils/PromptCardLoader.tsx](#📄-utils-promptcardloader-tsx)
- [📄 utils/Ratings.tsx](#📄-utils-ratings-tsx)
- [📄 utils/styles.ts](#📄-utils-styles-ts)
- [📄 global.d.ts](#📄-global-d-ts)
- [📄 middleware.ts](#📄-middleware-ts)
- [📄 next-env.d.ts](#📄-next-env-d-ts)
- [📄 next.config.js](#📄-next-config-js)
- [📄 package-lock.json](#📄-package-lock-json)
- [📄 package.json](#📄-package-json)
- [📄 postcss.config.js](#📄-postcss-config-js)
- [📄 README.md](#📄-readme-md)
- [📄 tailwind.config.ts](#📄-tailwind-config-ts)
- [📄 tsconfig.json](#📄-tsconfig-json)

---

## 📈 Project Statistics

| Metric | Count |
|--------|-------|
| Total Files | 105 |
| Total Directories | 60 |
| Text Files | 98 |
| Binary Files | 7 |
| Total Size | 466.93 KB |

### 📄 File Types Distribution

| Extension | Count |
|-----------|-------|
| `.tsx` | 52 |
| `.ts` | 38 |
| `.json` | 3 |
| `.css` | 2 |
| `.svg` | 2 |
| `.js` | 2 |
| `.ico` | 1 |
| `.prisma` | 1 |
| `.png` | 1 |
| `.avif` | 1 |
| `no extension` | 1 |
| `.md` | 1 |

## 💻 File Code Contents

### <a id="📄-types-imagestypes-ts"></a>📄 `@types/ImagesTypes.ts`

**File Info:**
- **Size**: 96 B
- **Extension**: `.ts`
- **Language**: `typescript`
- **Location**: `@types/ImagesTypes.ts`
- **Relative Path**: `@types`
- **Created**: 2025-11-12 05:58:32 (Asia/Katmandu / GMT+06:45)
- **Modified**: 2024-01-24 15:41:52 (Asia/Katmandu / GMT+06:45)
- **MD5**: `a6e8355dfe940128d682b8cc3057a717`
- **SHA256**: `cef4132fff758548a3a4d147926caa1db4b6880b99af7dddb43787f2f7c0495c`
- **Encoding**: ASCII

**File code content:**

```typescript
export type Images = {
  id: string;
  public_id: string;
  url: string;
  promptId: string;
};

```

---

### <a id="📄-types-ordertypes-ts"></a>📄 `@types/OrderTypes.ts`

**File Info:**
- **Size**: 223 B
- **Extension**: `.ts`
- **Language**: `typescript`
- **Location**: `@types/OrderTypes.ts`
- **Relative Path**: `@types`
- **Created**: 2025-11-12 05:58:32 (Asia/Katmandu / GMT+06:45)
- **Modified**: 2024-01-24 15:41:52 (Asia/Katmandu / GMT+06:45)
- **MD5**: `2fb08a3e9e77c6296833577097346896`
- **SHA256**: `1a0f840eac25e003b7a0b04f781dfa05a3fb0fc3c57e90ad21a79655590cb731`
- **Encoding**: ASCII

**File code content:**

```typescript
import { propmt } from "./promptTypes";

export type Orders = {
  id: string;
  userId: string;
  promptId: string;
  prompt: propmt;
  payment_method: string;
  payment_id: string;
  createdAt: Date;
  updatedAt: Date;
};

```

---

### <a id="📄-types-promptfilestypes-ts"></a>📄 `@types/PromptFilesTypes.ts`

**File Info:**
- **Size**: 102 B
- **Extension**: `.ts`
- **Language**: `typescript`
- **Location**: `@types/PromptFilesTypes.ts`
- **Relative Path**: `@types`
- **Created**: 2025-11-12 05:58:32 (Asia/Katmandu / GMT+06:45)
- **Modified**: 2024-01-24 15:41:52 (Asia/Katmandu / GMT+06:45)
- **MD5**: `246af11c302ef819e1cbc64485b8a380`
- **SHA256**: `05992b0af5a3c393cd8e50764a7eeb9e8eb2a6ee22ac2fe0c20a02ed4265b340`
- **Encoding**: ASCII

**File code content:**

```typescript
export type PromptFiles = {
  id: string;
  public_id: string;
  url: string;
  promptsId: string;
};

```

---

### <a id="📄-types-prompttypes-ts"></a>📄 `@types/promptTypes.ts`

**File Info:**
- **Size**: 563 B
- **Extension**: `.ts`
- **Language**: `typescript`
- **Location**: `@types/promptTypes.ts`
- **Relative Path**: `@types`
- **Created**: 2025-11-12 05:58:32 (Asia/Katmandu / GMT+06:45)
- **Modified**: 2024-01-24 15:41:52 (Asia/Katmandu / GMT+06:45)
- **MD5**: `c10873b3c7ee29026d9c89f27ae09397`
- **SHA256**: `3298826528f0f2f0283903e5f3164d51ffa273fc9c750b3e56c607ca810dfd8f`
- **Encoding**: ASCII

**File code content:**

```typescript
import { PromptFiles } from "@prisma/client";
import { Images } from "./ImagesTypes";
import { reviews } from "./reviewsTypes";
import { Orders } from "./OrderTypes";

export type propmt = {
  id: string;
  name: string;
  shortDescription: string;
  description: string;
  images: Images[];
  estimatedPrice: number;
  price: number;
  category: string;
  tags: string;
  rating: number;
  reviews: reviews[];
  promptUrl: PromptFiles[];
  sellerId: string;
  orders: Orders[];
  status: "Live" | "Decliend" | "Pending";
  createdAt: Date;
  updatedAt: Date;
};

```

---

### <a id="📄-types-reviewstypes-ts"></a>📄 `@types/reviewsTypes.ts`

**File Info:**
- **Size**: 135 B
- **Extension**: `.ts`
- **Language**: `typescript`
- **Location**: `@types/reviewsTypes.ts`
- **Relative Path**: `@types`
- **Created**: 2025-11-12 05:58:32 (Asia/Katmandu / GMT+06:45)
- **Modified**: 2024-01-24 15:41:52 (Asia/Katmandu / GMT+06:45)
- **MD5**: `1f30f200e985df912eba69ec415dd772`
- **SHA256**: `ceebfde87a77b85dc9f21d7aac0bfed1856b641cec518fe8913766a540efcff8`
- **Encoding**: ASCII

**File code content:**

```typescript
export type reviews = {
  id: string;
  promptId: string;
  userId: string;
  rating: number;
  comment: string;
  createdAt: Date;
};

```

---

### <a id="📄-types-shoptypes-ts"></a>📄 `@types/shopTypes.ts`

**File Info:**
- **Size**: 328 B
- **Extension**: `.ts`
- **Language**: `typescript`
- **Location**: `@types/shopTypes.ts`
- **Relative Path**: `@types`
- **Created**: 2025-11-12 05:58:32 (Asia/Katmandu / GMT+06:45)
- **Modified**: 2024-01-24 15:41:52 (Asia/Katmandu / GMT+06:45)
- **MD5**: `0c41eb078bdd5443b7d5dc7eea1319c2`
- **SHA256**: `08b4e0360df6a7f6940fd92a1799f6ab7b24852b2eec31a03d9a3aae08df88c3`
- **Encoding**: ASCII

**File code content:**

```typescript
import { withdawMethod } from "./withdawMethodTypes";

export type Shop = {
  id: string;
  name: string;
  description: string;
  shopProductsType: string;
  avatar: string;
  ratings: number;
  totalSales: number;
  allProducts: number;
  createdAt: Date;
  updatedAt: Date;
  userId: string;
  bank: withdawMethod | null;
};

```

---

### <a id="📄-types-withdawmethodtypes-ts"></a>📄 `@types/withdawMethodTypes.ts`

**File Info:**
- **Size**: 217 B
- **Extension**: `.ts`
- **Language**: `typescript`
- **Location**: `@types/withdawMethodTypes.ts`
- **Relative Path**: `@types`
- **Created**: 2025-11-12 05:58:32 (Asia/Katmandu / GMT+06:45)
- **Modified**: 2024-01-24 15:41:52 (Asia/Katmandu / GMT+06:45)
- **MD5**: `a8f505df87519d97d4eb68273e1e20b6`
- **SHA256**: `e784b9d4398890af5ae0c1e14fd4db0c0542cb3943502ba5ed6b3f5973c3c019`
- **Encoding**: ASCII

**File code content:**

```typescript
export type withdawMethod = {
  id: string;
  bank_name: string;
  bank_address: string;
  sellerId: string;
  account_holder_name: string;
  account_number: number;
  routing_number: number;
  swift_code: string;
};

```

---

### <a id="📄-actions-analytics-getordersanalytics-ts"></a>📄 `actions/analytics/getOrdersAnalytics.ts`

**File Info:**
- **Size**: 1.14 KB
- **Extension**: `.ts`
- **Language**: `typescript`
- **Location**: `actions/analytics/getOrdersAnalytics.ts`
- **Relative Path**: `actions/analytics`
- **Created**: 2025-11-12 05:58:32 (Asia/Katmandu / GMT+06:45)
- **Modified**: 2025-11-28 18:12:28 (Asia/Katmandu / GMT+06:45)
- **MD5**: `97d4458aad6b535c7a8374fcf0a53e8c`
- **SHA256**: `ef7056f06c7747c9a61c96c660bf4ee39b04d76babdea2132c50252f85d4392f`
- **Encoding**: ASCII

**File code content:**

```typescript
"use server";

import prisma from "@/lib/prismaDb";

interface MonthData {
  month: string;
  count: number;
}

export async function generateLast12MonthsOrderData(): Promise<{
  last12Months: MonthData[];
}> {
  const last12Months: MonthData[] = [];
  const currentDate = new Date();
  currentDate.setDate(currentDate.getDate() + 1);

  for (let i = 11; i >= 0; i--) {
    const endDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      currentDate.getDate() - i * 28
    );
    const startDate = new Date(
      endDate.getFullYear(),
      endDate.getMonth(),
      endDate.getDate() - 28
    );

    const monthYear = endDate.toLocaleString("default", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });

    const allOrders = await prisma.orders.findMany();

    const orders = allOrders.filter((order) => {
      const createdAt = new Date(order.createdAt);
      return createdAt >= startDate && createdAt < endDate;
    });

    const count = orders.length;

    last12Months.push({ month: monthYear, count });
  }
  // return { last12Months };
  return JSON.parse(JSON.stringify({ last12Months }));
}

```

---

### <a id="📄-actions-orders-createorder-ts"></a>📄 `actions/orders/createOrder.ts`

**File Info:**
- **Size**: 723 B
- **Extension**: `.ts`
- **Language**: `typescript`
- **Location**: `actions/orders/createOrder.ts`
- **Relative Path**: `actions/orders`
- **Created**: 2025-11-12 05:58:32 (Asia/Katmandu / GMT+06:45)
- **Modified**: 2025-11-28 17:58:58 (Asia/Katmandu / GMT+06:45)
- **MD5**: `a3cef87c5dd0e7432df1b7f9676aa104`
- **SHA256**: `11d4718c3b9431e0237cfbd098fc6c69785454853080ae88782eb8a3c9940e61`
- **Encoding**: ASCII

**File code content:**

```typescript
"use server";
import prisma from "@/lib/prismaDb";

// create a new order
export const newOrder = async ({
  userId,
  promptId,
  payment_method,
  payment_id,
}: {
  userId: string;
  promptId: string;
  payment_id: string;
  payment_method: string;
}) => {
  try {
    const newOrderData = {
      userId,
      promptId,
      payment_id,
      payment_method: "visa",
    };

    const order = await prisma.orders.create({
      data: newOrderData,
    });

    await prisma.shops.update({
      where: {
        userId,
      },
      data: {
        totalSales: { increment: 1 },
      },
    });

    // return order;
    return JSON.parse(JSON.stringify(order));
  } catch (error) {
    console.log(error);
  }
};

```

---

### <a id="📄-actions-orders-getshoporders-ts"></a>📄 `actions/orders/getShopOrders.ts`

**File Info:**
- **Size**: 721 B
- **Extension**: `.ts`
- **Language**: `typescript`
- **Location**: `actions/orders/getShopOrders.ts`
- **Relative Path**: `actions/orders`
- **Created**: 2025-11-12 05:58:32 (Asia/Katmandu / GMT+06:45)
- **Modified**: 2025-11-28 17:57:06 (Asia/Katmandu / GMT+06:45)
- **MD5**: `2949bbdbfb8af85ed620544984f3af11`
- **SHA256**: `360a8b6342844c9a458c9cf00588fb0c552c53d8f132c1d27040d3ed38fdc539`
- **Encoding**: ASCII

**File code content:**

```typescript
import prisma from "@/lib/prismaDb";
import { clerkClient } from "@clerk/nextjs";

export const getShopOrders = async ({ sellerId }: { sellerId: string }) => {
  try {
    const orders: any = await prisma.orders.findMany({
      where: {
        prompt: {
          sellerId,
        },
      },
      include: {
        prompt: true,
      },
      orderBy:{
        createdAt: 'desc'
      }
    });

    for (const order of orders) {
      const userId = order?.userId;
      if (userId) {
        const user = await clerkClient.users.getUser(userId);
        order.user = user;
      }
    }
    
    // return orders;
    return JSON.parse(JSON.stringify(orders));
  } catch (error) {
    console.log(error);
  }
};

```

---

### <a id="📄-actions-orders-getuserorders-ts"></a>📄 `actions/orders/getUserOrders.ts`

**File Info:**
- **Size**: 573 B
- **Extension**: `.ts`
- **Language**: `typescript`
- **Location**: `actions/orders/getUserOrders.ts`
- **Relative Path**: `actions/orders`
- **Created**: 2025-11-12 05:58:32 (Asia/Katmandu / GMT+06:45)
- **Modified**: 2025-11-28 17:57:35 (Asia/Katmandu / GMT+06:45)
- **MD5**: `102d17b23c88bae1b8cc68a8de41df6c`
- **SHA256**: `8c0b0d0b790a69fabce9f85ec4e50682a74df991550e609a51a090d56120af7b`
- **Encoding**: ASCII

**File code content:**

```typescript
import prisma from "@/lib/prismaDb";
import { User, currentUser } from "@clerk/nextjs/server";

export const getUserOrders = async () => {
  try {
    const user: User | null = await currentUser();

    const orders = await prisma.orders.findMany({
      where: {
        userId: user?.id,
      },
      include: {
        prompt: {
          include: {
            promptUrl: true,
            reviews: true,
          },
        },
      },
    });

    // return orders;
    return JSON.parse(JSON.stringify(orders));
  } catch (error) {
    console.log(error);
  }
};

```

---

### <a id="📄-actions-payment-paymentaction-ts"></a>📄 `actions/payment/paymentAction.ts`

**File Info:**
- **Size**: 732 B
- **Extension**: `.ts`
- **Language**: `typescript`
- **Location**: `actions/payment/paymentAction.ts`
- **Relative Path**: `actions/payment`
- **Created**: 2025-11-12 05:58:32 (Asia/Katmandu / GMT+06:45)
- **Modified**: 2025-11-28 18:13:12 (Asia/Katmandu / GMT+06:45)
- **MD5**: `e9e831e93a4e1b942640720c37f28dad`
- **SHA256**: `53903f4a7ff7a3b30e107dc94f84001fcaf6b84b8b35c92c71ab257ceaa05dd9`
- **Encoding**: ASCII

**File code content:**

```typescript
"use server";
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

// send stripe publishable key
export const stripePublishableKey = () => {
  const publishableKey = process.env.STRIPE_PUBLISHABLE_KEY;
  return publishableKey;
};

// send stripe payment intent
export const stripePaymentIntent = async ({ amount }: { amount: Number }) => {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "USD",
      metadata: {
        company: "Becodefy",
      },
      automatic_payment_methods: {
        enabled: true,
      },
    });

    // return paymentIntent;
    return JSON.parse(JSON.stringify({ paymentIntent }));
  } catch (error) {
    console.log(error);
  }
};

```

---

### <a id="📄-actions-prompts-createprompt-ts"></a>📄 `actions/prompts/createPrompt.ts`

**File Info:**
- **Size**: 0 B
- **Extension**: `.ts`
- **Language**: `typescript`
- **Location**: `actions/prompts/createPrompt.ts`
- **Relative Path**: `actions/prompts`
- **Created**: 2025-11-12 05:58:32 (Asia/Katmandu / GMT+06:45)
- **Modified**: 2024-01-24 15:41:52 (Asia/Katmandu / GMT+06:45)
- **MD5**: `d41d8cd98f00b204e9800998ecf8427e`
- **SHA256**: `e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855`
- **Encoding**: ASCII

**File code content:**

```typescript

```

---

### <a id="📄-actions-reviews-newreview-ts"></a>📄 `actions/reviews/newReview.ts`

**File Info:**
- **Size**: 1.48 KB
- **Extension**: `.ts`
- **Language**: `typescript`
- **Location**: `actions/reviews/newReview.ts`
- **Relative Path**: `actions/reviews`
- **Created**: 2025-11-12 05:58:32 (Asia/Katmandu / GMT+06:45)
- **Modified**: 2025-11-28 18:20:19 (Asia/Katmandu / GMT+06:45)
- **MD5**: `3c6652e3d83dfb61fb58592e805065a1`
- **SHA256**: `bd9274cb46653f01b0a0c3f2a0308df5789390eca2e79f7b1a3659398585532e`
- **Encoding**: ASCII

**File code content:**

```typescript
"use server";
import prisma from "@/lib/prismaDb";

interface Props {
  rating: number;
  comment: string;
  promptId: string;
  userId: string;
}

export const newReview = async ({
  rating,
  comment,
  promptId,
  userId,
}: Props) => {
  try {
    const review = await prisma.reviews.create({
      data: {
        rating,
        comment,
        promptId,
        userId,
      },
    });

    const prompt = await prisma.prompts.findUnique({
      where: {
        id: promptId,
      },
      include: {
        reviews: true,
      },
    });
    if (prompt) {
      const reviews: any = prompt.reviews;

      reviews.push({
        rating,
      });

      let avg = 0;

      reviews &&
        reviews.forEach((rev: any) => {
          avg += rev.rating;
        });

      // update the prompt with new rating
      await prisma.prompts.update({
        where: {
          id: promptId,
        },
        data: {
          rating: avg / reviews.length,
        },
      });
    }

    const shop = await prisma.shops.findUnique({
      where: {
        userId: prompt?.sellerId,
      },
    });

    if (shop) {
      const shopRatings = shop.ratings + rating;

      await prisma.shops.update({
        where: {
          userId: prompt?.sellerId,
        },
        data: {
          ratings: shop.ratings === 0 ? shopRatings : shopRatings / 2,
        },
      });
    }

    // return review;
    return JSON.parse(JSON.stringify(review));
  } catch (error) {
    console.log(error);
  }
};

```

---

### <a id="📄-actions-shop-getallpromptsbyshop-ts"></a>📄 `actions/shop/getAllPromptsByShop.ts`

**File Info:**
- **Size**: 526 B
- **Extension**: `.ts`
- **Language**: `typescript`
- **Location**: `actions/shop/getAllPromptsByShop.ts`
- **Relative Path**: `actions/shop`
- **Created**: 2025-11-12 05:58:32 (Asia/Katmandu / GMT+06:45)
- **Modified**: 2025-11-28 18:01:39 (Asia/Katmandu / GMT+06:45)
- **MD5**: `9d74d62f1f9470345bd03f79ac559603`
- **SHA256**: `c104b2e704dbe6f24cf093f0d05805eb0e508f9e30c11afee286494c843d3506`
- **Encoding**: ASCII

**File code content:**

```typescript
import prisma from "@/lib/prismaDb";
import { User, currentUser } from "@clerk/nextjs/server";

export async function getAllPromptsByShop() {
  try {
    const user: User | null = await currentUser();

    const sellerId = user?.id;

    const prompts = await prisma.prompts.findMany({
      where: {
        sellerId,
      },
      include: {
        orders: true,
      },
    });
    // return prompts;
    return JSON.parse(JSON.stringify(prompts));
  } catch (error) {
    console.log("get prompts error", error);
  }
}

```

---

### <a id="📄-actions-shop-getsellerinfo-ts"></a>📄 `actions/shop/getSellerInfo.ts`

**File Info:**
- **Size**: 887 B
- **Extension**: `.ts`
- **Language**: `typescript`
- **Location**: `actions/shop/getSellerInfo.ts`
- **Relative Path**: `actions/shop`
- **Created**: 2025-11-12 05:58:32 (Asia/Katmandu / GMT+06:45)
- **Modified**: 2025-11-28 18:00:23 (Asia/Katmandu / GMT+06:45)
- **MD5**: `93634f7a03280e4f34891e8d5666c567`
- **SHA256**: `b048583ae491de376dd3198142f35601ebd3cce97e912cebb2595dc889cba0e5`
- **Encoding**: ASCII

**File code content:**

```typescript
"use server";

import prisma from "@/lib/prismaDb";
import { User, currentUser } from "@clerk/nextjs/server";

export const getSellerInfo = async () => {
  try {
    const user: User | null = await currentUser();

    if (!user) {
      return;
    }

    const shop = await prisma.shops.findUnique({
      where: {
        userId: user.id,
      },
      include: {
        bank: true,
      },
    });

    const orders = await prisma.orders.findMany({
      where: {
        prompt: {
          sellerId: shop?.userId,
        },
      },
      include: {
        prompt: {
          include: {
            images: true,
            reviews: true,
            promptUrl: true,
            orders: true
          }
        },
      },
    });

    // return { shop, orders };
     return JSON.parse(JSON.stringify({ shop, orders }));
  } catch (error) {
    console.log(error);
  }
};

```

---

### <a id="📄-actions-shop-getshopbyid-ts"></a>📄 `actions/shop/getShopById.ts`

**File Info:**
- **Size**: 282 B
- **Extension**: `.ts`
- **Language**: `typescript`
- **Location**: `actions/shop/getShopById.ts`
- **Relative Path**: `actions/shop`
- **Created**: 2025-11-12 05:58:32 (Asia/Katmandu / GMT+06:45)
- **Modified**: 2025-11-28 18:03:17 (Asia/Katmandu / GMT+06:45)
- **MD5**: `07618454eb8f55bd0646d37136cc6a6e`
- **SHA256**: `4130ebe590625d2998563682bc9bb96287b5ef255e2a3c74bca83151efca59d5`
- **Encoding**: ASCII

**File code content:**

```typescript
"use server";
import prisma from "@/lib/prismaDb";

export const getShopById = async ({ shopId }: { shopId: string }) => {
  const shop = await prisma.shops.findUnique({
    where: {
      userId: shopId,
    },
  });
  // return shop;
  return JSON.parse(JSON.stringify(shop));
};

```

---

### <a id="📄-actions-shop-gettopsellers-ts"></a>📄 `actions/shop/getTopSellers.ts`

**File Info:**
- **Size**: 356 B
- **Extension**: `.ts`
- **Language**: `typescript`
- **Location**: `actions/shop/getTopSellers.ts`
- **Relative Path**: `actions/shop`
- **Created**: 2025-11-12 05:58:32 (Asia/Katmandu / GMT+06:45)
- **Modified**: 2025-11-28 18:03:56 (Asia/Katmandu / GMT+06:45)
- **MD5**: `38cddca067bfec84c15d3fefdbe2f515`
- **SHA256**: `c6895eae5f8ee98fc822566486e3172be3436f01ddfaf8435faea4d5d732aaca`
- **Encoding**: ASCII

**File code content:**

```typescript
"use server";
import prisma from "@/lib/prismaDb";

export const getTopSellers = async () => {
  try {
    const sellers = await prisma.shops.findMany({
      take: 4,  
      orderBy: {
        allProducts: 'desc',
      },
    });

    // return sellers;
    return JSON.parse(JSON.stringify(sellers));
  } catch (error) {
    console.log(error);
  }
};

```

---

### <a id="📄-actions-user-getuser-ts"></a>📄 `actions/user/getUser.ts`

**File Info:**
- **Size**: 503 B
- **Extension**: `.ts`
- **Language**: `typescript`
- **Location**: `actions/user/getUser.ts`
- **Relative Path**: `actions/user`
- **Created**: 2025-11-12 05:58:32 (Asia/Katmandu / GMT+06:45)
- **Modified**: 2025-11-28 18:04:45 (Asia/Katmandu / GMT+06:45)
- **MD5**: `8ee00e97e688bd8d7f5b067b1351d857`
- **SHA256**: `4f3acac22d41febf7183bb0da1b7ff6e0a7d4547cd5df2391968456bb45b498e`
- **Encoding**: ASCII

**File code content:**

```typescript
"use server";
import { User, currentUser } from "@clerk/nextjs/server";
import prisma from "@/lib/prismaDb";

export async function getUser() {
  try {
    const user: User | null = await currentUser();

    if (!user) {
      return;
    }

    const shop = await prisma.shops.findUnique({
      where: {
        userId: user.id,
      },
    });

    // return { user, shop };
    return JSON.parse(JSON.stringify({ user, shop }));
  } catch (error) {
    console.log("load user error", error);
  }
}

```

---

### <a id="📄-actions-withdraws-addwithdraw-ts"></a>📄 `actions/withdraws/addWithdraw.ts`

**File Info:**
- **Size**: 452 B
- **Extension**: `.ts`
- **Language**: `typescript`
- **Location**: `actions/withdraws/addWithdraw.ts`
- **Relative Path**: `actions/withdraws`
- **Created**: 2025-11-12 05:58:32 (Asia/Katmandu / GMT+06:45)
- **Modified**: 2025-11-28 18:21:16 (Asia/Katmandu / GMT+06:45)
- **MD5**: `6f567c6506a73391b2a927e95236f5c8`
- **SHA256**: `38c01998db49c3e09f86caea67f389f29a31fce286fb90d9481a170a0a997bbd`
- **Encoding**: ASCII

**File code content:**

```typescript
"use server";
import prisma from "@/lib/prismaDb";

type Props = {
  sellerId: string;
  amount: number;
};

export const addWithdraw = async ({ sellerId, amount }: Props) => {
  try {
    const respose = await prisma.withdraws.create({
      data: {
        sellerId,
        amount,
        status: "Pending",
      },
    });

    // return respose;
    return JSON.parse(JSON.stringify(respose));
  } catch (error) {
    console.log(error);
  }
};

```

---

### <a id="📄-actions-withdraws-addwithdrawmethod-ts"></a>📄 `actions/withdraws/addWithdrawMethod.ts`

**File Info:**
- **Size**: 826 B
- **Extension**: `.ts`
- **Language**: `typescript`
- **Location**: `actions/withdraws/addWithdrawMethod.ts`
- **Relative Path**: `actions/withdraws`
- **Created**: 2025-11-12 05:58:32 (Asia/Katmandu / GMT+06:45)
- **Modified**: 2025-11-28 18:21:44 (Asia/Katmandu / GMT+06:45)
- **MD5**: `4d07176527d31b1f7151c0f0cd262821`
- **SHA256**: `94dfa4fe0598ab28f7f83e596f55ed5b010fbc780f61e81e31d075d746a7cd6e`
- **Encoding**: ASCII

**File code content:**

```typescript
"use server";
import prisma from "@/lib/prismaDb";

type withDrawMethodData = {
  account_holder_name: string;
  bank_name: string;
  bank_address: string;
  sellerId: string;
  account_number: number;
  routing_number: number;
  swift_code: string;
};

export const addWithDrawMethod = async ({
  account_holder_name,
  bank_name,
  bank_address,
  sellerId,
  account_number,
  routing_number,
  swift_code,
}: withDrawMethodData) => {
  try {
    const withDrawMethod = await prisma.banks.create({
      data: {
        sellerId,
        account_holder_name,
        bank_name,
        bank_address,
        account_number,
        routing_number,
        swift_code,
      },
    });

    // return withDrawMethod;
     return JSON.parse(JSON.stringify(withDrawMethod));
  } catch (error) {
    console.log(error);
  }
};

```

---

### <a id="📄-actions-withdraws-deletewithdrawmethod-ts"></a>📄 `actions/withdraws/deleteWithdrawMethod.ts`

**File Info:**
- **Size**: 376 B
- **Extension**: `.ts`
- **Language**: `typescript`
- **Location**: `actions/withdraws/deleteWithdrawMethod.ts`
- **Relative Path**: `actions/withdraws`
- **Created**: 2025-11-12 05:58:32 (Asia/Katmandu / GMT+06:45)
- **Modified**: 2025-11-28 18:22:04 (Asia/Katmandu / GMT+06:45)
- **MD5**: `b58df9e89548e8f062c54e08e83f31b3`
- **SHA256**: `f97cae855b0923090a37cd347d5a0f6132f19bb71cfe4b1a7edf32502ec05b3f`
- **Encoding**: ASCII

**File code content:**

```typescript
"use server";
import prisma from "@/lib/prismaDb";


export const deleteWithDrawMethod = async (id:string) => {
  try {
    console.log(id);
    const withDrawMethod = await prisma.banks.delete({
      where: {
        id,
      },
    });
    // return withDrawMethod;
    return JSON.parse(JSON.stringify(withDrawMethod));
  } catch (error) {
    console.log(error);
  }
};

```

---

### <a id="📄-actions-withdraws-sellerinvoices-ts"></a>📄 `actions/withdraws/sellerInvoices.ts`

**File Info:**
- **Size**: 422 B
- **Extension**: `.ts`
- **Language**: `typescript`
- **Location**: `actions/withdraws/sellerInvoices.ts`
- **Relative Path**: `actions/withdraws`
- **Created**: 2025-11-12 05:58:32 (Asia/Katmandu / GMT+06:45)
- **Modified**: 2025-11-28 18:22:36 (Asia/Katmandu / GMT+06:45)
- **MD5**: `7e46ebc8db804d742a91fd49676860df`
- **SHA256**: `d50448dabed6aebda3acb4a547bce0ee767aef9853cb8b56b0b81c30b541bf64`
- **Encoding**: ASCII

**File code content:**

```typescript
"use server";

import prisma from "@/lib/prismaDb";

export const sellerInvoices = async ({ sellerId }: { sellerId: string }) => {
  try {
    const invoices = await prisma.withdraws.findMany({
      where: {
        sellerId,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    // return invoices;
    return JSON.parse(JSON.stringify(invoices));
  } catch (error) {
    console.log(error);
  }
};

```

---

### <a id="📄-app-main-page-tsx"></a>📄 `app/(Main)/_page.tsx`

**File Info:**
- **Size**: 2.95 KB
- **Extension**: `.tsx`
- **Language**: `typescript`
- **Location**: `app/(Main)/_page.tsx`
- **Relative Path**: `app/(Main)`
- **Created**: 2025-11-12 05:58:32 (Asia/Katmandu / GMT+06:45)
- **Modified**: 2025-11-12 17:50:01 (Asia/Katmandu / GMT+06:45)
- **MD5**: `486d9c9224a6f6108efb97f6ce320f0c`
- **SHA256**: `1aee2ecc6c48090816d2bb7e47d36d4c25d88aa15f443435665fc051520cd525`
- **Encoding**: ASCII

**File code content:**

```typescript
"use client";
import React, { useEffect, useState } from "react";
import Header from "@/components/Layout/Header";
import Hero from "@/components/Route/Hero";
import About from "@/components/Route/About";
import Image from "next/image";
import { styles } from "@/utils/styles";
import PromptCard from "@/components/Prompts/PromptCard";
import BestSellers from "@/components/Shop/BestSellers";
import Future from "@/components/Route/Future";
import Partners from "@/components/Route/Partners";
import SellersBanner from "@/components/Shop/SellersBanner";
import Footer from "@/components/Layout/Footer";
import { Divider } from "@nextui-org/react";
import { User } from "@clerk/nextjs/server";
import PromptCardLoader from "@/utils/PromptCardLoader";

type Props = {
  user: User | undefined;
  isSellerExist: boolean | undefined;
};

const RoutePage = ({ user, isSellerExist }: Props) => {
  const [isMounted, setIsMounted] = useState(false);
  const [prompts, setPrompts] = useState<any>();
  const [loading, setLoading] = useState(true);

  const fetchPromptsData = async () => {
    setLoading(true);
    try {
      const response = await fetch(`/api/get-prompts`);
      const data = await response.json();
      setPrompts(data.prompts);
    } catch (error) {
      console.error("Failed to fetch prompts:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPromptsData();
  }, []);

  useEffect(() => { 
    if (!isMounted) {
      setIsMounted(true);
    }
  }, [isMounted]);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <div>
        <div className="banner">
          <Header activeItem={0} user={user} isSellerExist={isSellerExist} />
          <Hero />   
        </div>
        <Image
          src={"https://pixner.net/aikeu/assets/images/footer/shape-two.png"}
          width={120}
          height={120}
          alt=""
          className="absolute right-[-30px]"
        />
        <br />
        <div className="w-[95%] md:w-[90%] xl:w-[80%] 2xl:w-[75%] m-auto">
          <About />
          <div>
            <h1 className={`${styles.heading} p-2 font-Monserrat`}>
              Latest Prompts
            </h1>
            <div className="w-full flex flex-wrap mt-5">
              {loading ? (
                [...new Array(8)].map((i) => (
                  <>
                    <PromptCardLoader />
                  </>
                ))
              ) : (
                <>
                  {prompts &&
                    prompts.map((item: any) => (
                      <PromptCard prompt={item} key={item.id} />
                    ))}
                </>
              )}
            </div>
            <br />
            <BestSellers />
            <Future />
            <Partners />
            <SellersBanner />
            <br />
            <br />
            <Divider className="bg-[#ffffff23]" />
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default RoutePage;

```

---

### <a id="📄-app-main-page-tsx"></a>📄 `app/(Main)/page.tsx`

**File Info:**
- **Size**: 898 B
- **Extension**: `.tsx`
- **Language**: `typescript`
- **Location**: `app/(Main)/page.tsx`
- **Relative Path**: `app/(Main)`
- **Created**: 2025-11-12 05:58:32 (Asia/Katmandu / GMT+06:45)
- **Modified**: 2025-11-28 16:51:41 (Asia/Katmandu / GMT+06:45)
- **MD5**: `f8c31fbee360324e7fffc99a55306a5e`
- **SHA256**: `01732416a27c1c0ea62aafad998bfeca26c3f6978f5f6baf97d93fecc230a036`
- **Encoding**: ASCII

**File code content:**

```typescript
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
```

---

### <a id="📄-app-providers-nextuiprovider-tsx"></a>📄 `app/(Providers)/NextUiProvider.tsx`

**File Info:**
- **Size**: 461 B
- **Extension**: `.tsx`
- **Language**: `typescript`
- **Location**: `app/(Providers)/NextUiProvider.tsx`
- **Relative Path**: `app/(Providers)`
- **Created**: 2025-11-12 05:58:32 (Asia/Katmandu / GMT+06:45)
- **Modified**: 2024-01-24 15:41:52 (Asia/Katmandu / GMT+06:45)
- **MD5**: `cb5c4cda0b7e1ff7717ebe6c7a0c041a`
- **SHA256**: `593abc99610018c9d84d9e5aecba522da260dfd88d4a7ff3fd7edac04d9d1b22`
- **Encoding**: ASCII

**File code content:**

```typescript
"use client";
import * as React from "react";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

interface ProviderProps {
  children: React.ReactNode;
}

export default function Provider({ children }: ProviderProps) {
  return (
    <NextUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="dark">
        {children}
      </NextThemesProvider>
    </NextUIProvider>
  );
}

```

---

### <a id="📄-app-shop-my-shop-page-tsx"></a>📄 `app/(Shop)/my-shop/_page.tsx`

**File Info:**
- **Size**: 2.86 KB
- **Extension**: `.tsx`
- **Language**: `typescript`
- **Location**: `app/(Shop)/my-shop/_page.tsx`
- **Relative Path**: `app/(Shop)/my-shop`
- **Created**: 2025-11-12 05:58:32 (Asia/Katmandu / GMT+06:45)
- **Modified**: 2024-01-24 15:41:52 (Asia/Katmandu / GMT+06:45)
- **MD5**: `ba41530931c811531ea4e5c3dcdc1db2`
- **SHA256**: `4cb051190cd656fab8f62a52c31a6943bcc1fb2213cfd746b0516225eb115044`
- **Encoding**: ASCII

**File code content:**

```typescript
"use client";

import OrderAnalytics from "@/components/Analytics/OrderAnalytics";
import AllPrompts from "@/components/Prompts/AllPrompts";
import ShopAllOrders from "@/components/Shop/ShopAllOrders";
import { styles } from "@/utils/styles";
import { AiOutlineMoneyCollect } from "react-icons/ai";
import { BiBorderLeft } from "react-icons/bi";

const ShopRoot = ({
  ordersData,
  promptsData,
}: {
  ordersData: any;
  promptsData: any;
}) => {
  const totalSales = ordersData?.reduce(
    (total: number, item: any) => (item?.prompt?.price || 0) + total,
    0
  );

  return (
    <div>
      <div className="mt-[5px] min-h-screen">
        <div className="grid grid-cols-[75%,25%]">
          <div className="p-8">
            <OrderAnalytics isDashboard={true} />
          </div>

          <div className="pt-[80px] pr-8">
            <div className="w-full bg-[#111C43] rounded-sm shadow">
              <div className="flex items-center p-5 justify-between">
              <div className="w-full flex flex-col items-center">
                  <BiBorderLeft className="text-[#45CBA0] text-[30px]" />
                  <h5 className="pt-2 font-Poppins text-[#fff] text-[20px]">
                    {ordersData?.length}
                  </h5>
                  <h5 className="py-2 font-Poppins text-[#45CBA0] text-[17px] font-[400]">
                    Total Sales
                  </h5>
                </div>
              </div>
            </div>

            <div className="w-full bg-[#111C43] rounded-sm shadow my-8">
              <div className="flex items-center p-5 justify-between">
                <div className="w-full flex flex-col items-center">
                  <AiOutlineMoneyCollect className="text-[#45CBA0] text-[30px]" />
                  <h5 className="pt-2 font-Poppins text-[#fff]  text-[20px]">
                    US$ {totalSales}
                  </h5>
                  <h5 className="py-2 font-Poppins text-[#45CBA0] text-[17px] font-[400]">
                    Total Sales
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-[65%,34%] mt-[-20px]">
          <div className="bg-[#111c43] w-[94%] mt-[30px] h-[43vh] shadow-sm m-auto">
            <h1
              className={`${styles.label} !text-[20px]
             px-5 py-2 !text-start`}
            >
              All Prompts
            </h1>
            <div className="mt-[-30px]">
              <AllPrompts promptsData={promptsData} isDashboard={true} />
            </div>
          </div>
          <div className="p-3">
            <h5 className="text-[#fff] text-[20px] font-[400] font-Poppins pb-3">
              Recent Orders
            </h5>
            <ShopAllOrders isDashboard={true} ordersData={ordersData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopRoot;

```

---

### <a id="📄-app-shop-my-shop-page-tsx"></a>📄 `app/(Shop)/my-shop/page.tsx`

**File Info:**
- **Size**: 993 B
- **Extension**: `.tsx`
- **Language**: `typescript`
- **Location**: `app/(Shop)/my-shop/page.tsx`
- **Relative Path**: `app/(Shop)/my-shop`
- **Created**: 2025-11-12 05:58:32 (Asia/Katmandu / GMT+06:45)
- **Modified**: 2025-11-28 18:32:02 (Asia/Katmandu / GMT+06:45)
- **MD5**: `1c99fc07085219dd1aa49737b4aee47d`
- **SHA256**: `e4602fe02255599a05910cec1dcdfc7ef3b0119dfe2b1639c16b4cfc9aa1ccf5`
- **Encoding**: ASCII

**File code content:**

```typescript
import ShopSidebar from "@/components/Shop/ShopSidebar";
import ShopRoot from "./_page";
import { getUser } from "@/actions/user/getUser";
import { getShopOrders } from "@/actions/orders/getShopOrders";
import { getAllPromptsByShop } from "@/actions/shop/getAllPromptsByShop";

type Props = {};

const Page = async (props: Props) => {
  const sellerId: any = await getUser();
  const ordersData = await getShopOrders({ sellerId: sellerId?.user.id });
  const promptsData = await getAllPromptsByShop();

  return (
    <div className="flex w-full">
      <div className="h-screen flex p-2 bg-[#111C42] md:w-[20%] 2xl:w-[17%]">
        <ShopSidebar active={0} />
      </div>
      <div className="md:w-[80%] 2xl:w-[83%]">
        <ShopRoot
          // ordersData={ordersData} promptsData={promptsData}
          ordersData={JSON.parse(JSON.stringify(ordersData))}
          promptsData={JSON.parse(JSON.stringify(promptsData))}
        />
      </div>
    </div>
  );
};

export default Page;

```

---

### <a id="📄-app-shop-shop-create-prompt-page-tsx"></a>📄 `app/(Shop)/shop/create-prompt/page.tsx`

**File Info:**
- **Size**: 513 B
- **Extension**: `.tsx`
- **Language**: `typescript`
- **Location**: `app/(Shop)/shop/create-prompt/page.tsx`
- **Relative Path**: `app/(Shop)/shop/create-prompt`
- **Created**: 2025-11-12 05:58:32 (Asia/Katmandu / GMT+06:45)
- **Modified**: 2024-01-24 15:41:52 (Asia/Katmandu / GMT+06:45)
- **MD5**: `bd5d8069e7b149afd5cf686210f09cea`
- **SHA256**: `326f372f1ff6f328bdb0280981c101d507ec4d496cb339c5b24d795cd90c858a`
- **Encoding**: ASCII

**File code content:**

```typescript
'use client';
import ShopSidebar from "@/components/Shop/ShopSidebar";
import UploadPrompt from "@/components/Shop/UploadPrompt";

type Props = {}

const Page = (props: Props) => {
  return (
    <div className="flex w-full">
        <div className="h-screen sticky top-0 left-0 z-20 flex p-2 bg-[#111C42] md:w-[20%] 2xl:w-[17%]">
           <ShopSidebar active={1} />
        </div>
        <div className="md:w-[80%] 2xl:w-[83%]">
           <UploadPrompt />
        </div>
    </div>
  )
}

export default Page
```

---

### <a id="📄-app-shop-shop-invoices-page-tsx"></a>📄 `app/(Shop)/shop/invoices/_page.tsx`

**File Info:**
- **Size**: 2.45 KB
- **Extension**: `.tsx`
- **Language**: `typescript`
- **Location**: `app/(Shop)/shop/invoices/_page.tsx`
- **Relative Path**: `app/(Shop)/shop/invoices`
- **Created**: 2025-11-12 05:58:32 (Asia/Katmandu / GMT+06:45)
- **Modified**: 2024-01-24 15:41:52 (Asia/Katmandu / GMT+06:45)
- **MD5**: `bb23aaf5724e4817fae47b65e90f20fa`
- **SHA256**: `b3b78ebb8b0f6544b23910573a1f9045b5e14f700bf5dafa65038c416c7baa7b`
- **Encoding**: ASCII

**File code content:**

```typescript
"use client";
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import { format } from "timeago.js";

const AllInvoices = ({ invoices }: { invoices: any }) => {
  const columns = [
    { field: "id", headerName: "ID", flex: 0.3 },
    { field: "amount", headerName: "Amount", flex: 0.5 },
    { field: "created_at", headerName: "Created At", flex: 0.5 },
    { field: "updated_at", headerName: "Updated At", flex: 0.5 },
    {
      field: "status",
      headerName: "Withdraw status",
      flex: 0.5,
    },
  ];

  const rows: any = [];

  invoices &&
    invoices.forEach((invoice: any) => {
      rows.push({
        id: invoice?.id,
        amount: "US$" + invoice?.amount,
        created_at: format(invoice?.createdAt),
        updated_at: format(invoice?.updatedAt),
        status: invoice?.status,
      });
    });

  return (
    <>
      <Box m="20px">
        <Box
          m="40px 0 0 0"
          height="90vh"
          sx={{
            "& .MuiDataGrid-root": {
              border: "none",
              outline: "none",
            },
            "& .css-pqjvzy-MuiSvgIcon-root-MuiSelect-icon": {
              color: "#fff",
            },
            "& .MuiDataGrid-sortIcon": {
              color: "#fff",
            },
            "& .MuiDataGrid-row": {
              color: "#fff",
              borderBottom: "1px solid #ffffff30!important",
            },
            "& .MuiTablePagination-root": {
              color: "#fff",
            },
            "& .MuiDataGrid-cell": {
              borderBottom: "none!important",
            },
            "& .name-column--cell": {
              color: "#fff",
            },
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: "#3e4396",
              borderBottom: "none",
              color: "#fff",
            },
            "& .MuiDataGrid-virtualScroller": {
              backgroundColor: "#1F2A40",
            },
            "& .MuiDataGrid-footerContainer": {
              color: "dark",
              borderTop: "none",
              backgroundColor: "#3e4396",
            },
            "& .MuiCheckbox-root": {
              color: `#b7ebde !important`,
            },
            "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
              color: `#fff !important`,
            },
          }}
        >
          <DataGrid checkboxSelection rows={rows} columns={columns} />
        </Box>
      </Box>
    </>
  );
};

export default AllInvoices;

```

---

### <a id="📄-app-shop-shop-invoices-page-tsx"></a>📄 `app/(Shop)/shop/invoices/page.tsx`

**File Info:**
- **Size**: 777 B
- **Extension**: `.tsx`
- **Language**: `typescript`
- **Location**: `app/(Shop)/shop/invoices/page.tsx`
- **Relative Path**: `app/(Shop)/shop/invoices`
- **Created**: 2025-11-12 05:58:32 (Asia/Katmandu / GMT+06:45)
- **Modified**: 2025-11-28 18:46:46 (Asia/Katmandu / GMT+06:45)
- **MD5**: `57532d9653baa27a48887ffb3567dae0`
- **SHA256**: `c7015f2cb5ba4b2677f8f3146f4daba96afdb1c59a0829667fdfbbe12d4f1138`
- **Encoding**: ASCII

**File code content:**

```typescript
import ShopSidebar from "@/components/Shop/ShopSidebar";
import AllInvoices from "./_page";
import { sellerInvoices } from "@/actions/withdraws/sellerInvoices";
import { getSellerInfo } from "@/actions/shop/getSellerInfo";

const Page = async () => {
  const data:any = await getSellerInfo();
  const invoices = await sellerInvoices({ sellerId: data && data?.shop?.id! });

  return (
    <div className="flex w-full">
      <div className="h-screen flex p-2 bg-[#111c42] md:w-[20%] 2xl:w-[17%]">
        <ShopSidebar active={4} />
      </div>
      <div className="md:w-[80%] 2xl:w-[83%] p-5">
        {/* <AllInvoices invoices={invoices} /> */}
           <AllInvoices invoices={JSON.parse(JSON.stringify(invoices))} />
      </div>
    </div>
  );
};

export default Page;

```

---

### <a id="📄-app-shop-shop-orders-page-tsx"></a>📄 `app/(Shop)/shop/orders/page.tsx`

**File Info:**
- **Size**: 830 B
- **Extension**: `.tsx`
- **Language**: `typescript`
- **Location**: `app/(Shop)/shop/orders/page.tsx`
- **Relative Path**: `app/(Shop)/shop/orders`
- **Created**: 2025-11-12 05:58:32 (Asia/Katmandu / GMT+06:45)
- **Modified**: 2025-11-28 18:46:32 (Asia/Katmandu / GMT+06:45)
- **MD5**: `2bdfb709f1c15f076a17aa8debee2c62`
- **SHA256**: `2f2bc3ddb7561e4b87b40a0a102a53f7e240f7dbfd421f2bd7db982f7c4b88e0`
- **Encoding**: ASCII

**File code content:**

```typescript
import ShopSidebar from "@/components/Shop/ShopSidebar";
import ShopAllOrders from "@/components/Shop/ShopAllOrders";
import { getUser } from "@/actions/user/getUser";
import { getShopOrders } from "@/actions/orders/getShopOrders";

const Page = async () => {
  const sellerId: any = await getUser();
  const ordersData = await getShopOrders({ sellerId: sellerId?.user.id });

  return (
    <div className="flex w-full">
      <div className="h-screen flex p-2 bg-[#111c42] md:w-[20%] 2xl:w-[17%]">
        <ShopSidebar active={3} />
      </div>
      <div className="md:w-[80%] 2xl:w-[83%] p-5">
        {/* <ShopAllOrders isDashboard={false} ordersData={ordersData} /> */}
         <ShopAllOrders isDashboard={false} ordersData={JSON.parse(JSON.stringify(ordersData))} />
      </div>
    </div>
  );
};

export default Page;

```

---

### <a id="📄-app-shop-shop-prompts-page-tsx"></a>📄 `app/(Shop)/shop/prompts/page.tsx`

**File Info:**
- **Size**: 753 B
- **Extension**: `.tsx`
- **Language**: `typescript`
- **Location**: `app/(Shop)/shop/prompts/page.tsx`
- **Relative Path**: `app/(Shop)/shop/prompts`
- **Created**: 2025-11-12 05:58:32 (Asia/Katmandu / GMT+06:45)
- **Modified**: 2025-11-28 18:46:18 (Asia/Katmandu / GMT+06:45)
- **MD5**: `2c9ba0c698ab25d39a178cffee304466`
- **SHA256**: `5a62b8a8660e7a91623c1baf20f20bd753656434fc32e5c880edadca0432f317`
- **Encoding**: ASCII

**File code content:**

```typescript
import ShopSidebar from '@/components/Shop/ShopSidebar'
import React from 'react'
import AllPrompts from "@/components/Prompts/AllPrompts";
import { getAllPromptsByShop } from '@/actions/shop/getAllPromptsByShop';

type Props = {}

const Page = async(props: Props) => {
  const promptsData = await getAllPromptsByShop();

  return ( 
    <div className='flex w-full'>
        <div className="h-screen flex p-2 bg-[#111c42] md:w-[20%] 2xl:w-[17%]">
             <ShopSidebar active={2} />
        </div>
        <div className="md:w-[80%] 2xl:w-[83%] p-5">
             {/* <AllPrompts promptsData={promptsData} /> */}
             <AllPrompts promptsData={JSON.parse(JSON.stringify(promptsData))} />
        </div>
    </div>
  )
}

export default Page;
```

---

### <a id="📄-app-shop-shop-withdraw-page-tsx"></a>📄 `app/(Shop)/shop/withdraw/_page.tsx`

**File Info:**
- **Size**: 8.77 KB
- **Extension**: `.tsx`
- **Language**: `typescript`
- **Location**: `app/(Shop)/shop/withdraw/_page.tsx`
- **Relative Path**: `app/(Shop)/shop/withdraw`
- **Created**: 2025-11-12 05:58:32 (Asia/Katmandu / GMT+06:45)
- **Modified**: 2024-01-24 15:41:52 (Asia/Katmandu / GMT+06:45)
- **MD5**: `7db45fb1339357c650d1d6ccb3039a64`
- **SHA256**: `a5df0a598990faf199dd06ac92b38ecf88f98a0a27cb04df2666a6eaf6128f7a`
- **Encoding**: ASCII

**File code content:**

```typescript
"use client";
import { styles } from "@/utils/styles";
import { Button, Input } from "@nextui-org/react";
import { RxCross1 } from "react-icons/rx";
import { useState } from "react";
import { addWithDrawMethod } from "@/actions/withdraws/addWithdrawMethod";
import { Shop } from "@/@types/shopTypes";
import { AiOutlineDelete } from "react-icons/ai";
import { deleteWithDrawMethod } from "@/actions/withdraws/deleteWithdrawMethod";
import toast from "react-hot-toast";
import Loader from "@/utils/Loader";
import { addWithdraw } from "@/actions/withdraws/addWithdraw";

interface ChangeEvent<T = HTMLInputElement> {
  target: EventTarget & T;
}

const WithDrawEarning = ({
  shop,
  orders,
  invoices,
}: {
  shop: Shop | undefined | null;
  orders: any;
  invoices: any;
}) => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    accountHolderName: "",
    bankName: "",
    accountNumber: "",
    routingNumber: "",
    swiftCode: "",
    bankAddress: "",
  });

  const handleInputChange = (e: ChangeEvent) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    setOpen(!open);
  };

  const handleCreate = async () => {
    await addWithDrawMethod({
      account_holder_name: formData.accountHolderName,
      bank_name: formData.bankName,
      bank_address: formData.bankAddress,
      account_number: parseInt(formData.accountNumber),
      routing_number: parseInt(formData.routingNumber),
      swift_code: formData.swiftCode,
      sellerId: shop?.id!,
    }).then((res) => {
      setOpen(!open);
      setFormData({
        accountHolderName: "",
        bankName: "",
        accountNumber: "",
        routingNumber: "",
        swiftCode: "",
        bankAddress: "",
      });
      window.location.reload();
    });
  };

  const handleDelete = async () => {
    setLoading(true);
    await deleteWithDrawMethod(shop?.bank?.id!).then((res) => {
      setLoading(false);
      setOpen(!open);
      toast.success("Withdraw method delete successfully!");
    });
  };

  const totalOrderAmount = orders
    ? orders.reduce(
        (total: number, order: any) => total + order.prompt.price,
        0
      )
    : 0;

  const totalInvoiceAmount = invoices
    ? invoices.reduce(
        (total: number, invoice: any) => total + invoice.amount,
        0
      )
    : 0;

  const totalEarning = totalOrderAmount - totalInvoiceAmount;


  const handleWithdraw = async () => {
    if (totalEarning < 100) {
      toast.error("Withdraw minimum amount is 100$");
    } else {
      await addWithdraw({ sellerId: shop?.id!, amount: totalEarning }).then(
        (res) => {
          window.location.reload();
        }
      );
    }
  };

  return (
    <>
      <div className="w-full flex items-center justify-center h-screen flex-col">
        {loading ? (
          <Loader />
        ) : (
          <div className="w-full text-center">
            <p className={`${styles.label} !text-2xl text-center`}>
              Withdraw Earning
              <span> (minimum withdraw 100$)</span>
            </p>
            <br />
            <Button
              className={`${styles.button}`}
              color="primary"
              onClick={handleSubmit}
            >
              Withdraw
            </Button>
          </div>
        )}
      </div>
      {open && (
        <div className="w-full flex items-center justify-center fixed top-0 left-0 h-screen bg-[#0000002b]">
          <div className="w-[50%] h-[500px] bg-[#13103c] rounded-xl p-5">
            <div className="w-full flex justify-end">
              <RxCross1
                onClick={() => setOpen(!open)}
                className="text-2xl cursor-pointer"
              />
            </div>
            <p className={`${styles.paragraph} text-center !text-2xl`}>
              Withdraw Method
            </p>
            <br />
            {shop?.bank ? (
              <>
                <div className="flex items-center">
                  <p className={`${styles.label}`}>
                    Account ending with ...
                    {shop?.bank?.account_number.toString().slice(-4)}
                  </p>
                  <AiOutlineDelete
                    className="text-2xl ml-2 !cursor-pointer"
                    onClick={() => handleDelete()}
                  />
                </div>
                <br />
                <Button
                  className={`${styles.button} cursor-pointer`}
                  color="primary"
                  onClick={handleWithdraw}
                >
                  Withdraw Now US${totalEarning}
                </Button>
              </>
            ) : (
              <div className="w-full text-center">
                <form>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="accountHolderName"
                        className="w-full text-left block py-2 pl-1"
                      >
                        Account Holder Name
                      </label>
                      <Input
                        id="accountHolderName"
                        name="accountHolderName"
                        value={formData.accountHolderName}
                        onChange={handleInputChange}
                        variant="bordered"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="bankName"
                        className="w-full text-left block py-2 pl-1"
                      >
                        Bank Name
                      </label>
                      <Input
                        id="bankName"
                        name="bankName"
                        value={formData.bankName}
                        onChange={handleInputChange}
                        variant="bordered"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="accountNumber"
                        className="w-full text-left block py-2 pl-1"
                      >
                        Account Number
                      </label>
                      <Input
                        id="accountNumber"
                        name="accountNumber"
                        value={formData.accountNumber}
                        onChange={handleInputChange}
                        type="number"
                        variant="bordered"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="routingNumber"
                        className="w-full text-left block py-2 pl-1"
                      >
                        Routing Number
                      </label>
                      <Input
                        id="routingNumber"
                        name="routingNumber"
                        value={formData.routingNumber}
                        onChange={handleInputChange}
                        variant="bordered"
                        type="number"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="swiftCode"
                        className="w-full text-left block py-2 pl-1"
                      >
                        Swift Code
                      </label>
                      <Input
                        id="swiftCode"
                        name="swiftCode"
                        value={formData.swiftCode}
                        onChange={handleInputChange}
                        type="number"
                        variant="bordered"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="bankAddress"
                        className="w-full text-left block py-2 pl-1"
                      >
                        Bank Address
                      </label>
                      <Input
                        id="bankAddress"
                        name="bankAddress"
                        value={formData.bankAddress}
                        onChange={handleInputChange}
                        variant="bordered"
                      />
                    </div>
                  </div>
                  <br />
                  <Button
                    className={`${styles.button}`}
                    color="primary"
                    onClick={handleCreate}
                  >
                    Add Withdraw method
                  </Button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default WithDrawEarning;

```

---

### <a id="📄-app-shop-shop-withdraw-page-tsx"></a>📄 `app/(Shop)/shop/withdraw/page.tsx`

**File Info:**
- **Size**: 987 B
- **Extension**: `.tsx`
- **Language**: `typescript`
- **Location**: `app/(Shop)/shop/withdraw/page.tsx`
- **Relative Path**: `app/(Shop)/shop/withdraw`
- **Created**: 2025-11-12 05:58:32 (Asia/Katmandu / GMT+06:45)
- **Modified**: 2025-11-28 18:48:12 (Asia/Katmandu / GMT+06:45)
- **MD5**: `5468331ba2e0ab4cd5fe509a52257414`
- **SHA256**: `c680078e4bbeb319afe7d405c5d927976981315022da7c973b79510a45aa19ef`
- **Encoding**: ASCII

**File code content:**

```typescript
import ShopSidebar from "@/components/Shop/ShopSidebar";
import WithDrawEarning from "./_page";
import { getSellerInfo } from "@/actions/shop/getSellerInfo";
import { sellerInvoices } from "@/actions/withdraws/sellerInvoices";

const Page = async () => {
  const data = await getSellerInfo();
  const invoices = await sellerInvoices({ sellerId: data?.shop?.id! });

  return (
    <div className="flex w-full">
      <div className="h-screen flex p-2 bg-[#111c42] md:w-[20%] 2xl:w-[17%]">
        <ShopSidebar active={5} />
      </div>
      <div className="md:w-[80%] 2xl:w-[83%] p-5">
        {/* <WithDrawEarning
          shop={data?.shop}
          orders={data?.orders}
          invoices={invoices}
        /> */}
         <WithDrawEarning
          shop={JSON.parse(JSON.stringify(data?.shop))}
          orders={JSON.parse(JSON.stringify(data?.orders))}
          invoices={JSON.parse(JSON.stringify(invoices))}
        />
      </div>
    </div>
  );
};

export default Page;

```

---

### <a id="📄-app-about-page-tsx"></a>📄 `app/about/page.tsx`

**File Info:**
- **Size**: 106 B
- **Extension**: `.tsx`
- **Language**: `typescript`
- **Location**: `app/about/page.tsx`
- **Relative Path**: `app/about`
- **Created**: 2025-11-12 05:58:32 (Asia/Katmandu / GMT+06:45)
- **Modified**: 2024-01-24 15:41:52 (Asia/Katmandu / GMT+06:45)
- **MD5**: `672228c6a370a53033a20c8170df4fe2`
- **SHA256**: `d836ef942a909cf1b3ebf7838e760c24efe98c0b4355d0ca2a29f7e37603aa7d`
- **Encoding**: ASCII

**File code content:**

```typescript
import React from "react";

const Page = () => {
  return <div>About Page</div>;
};

export default Page;

```

---

### <a id="📄-app-api-routes-orders-get-user-orders-route-ts"></a>📄 `app/api/(routes)/(orders)/get-user-orders/route.ts`

**File Info:**
- **Size**: 882 B
- **Extension**: `.ts`
- **Language**: `typescript`
- **Location**: `app/api/(routes)/(orders)/get-user-orders/route.ts`
- **Relative Path**: `app/api/(routes)/(orders)/get-user-orders`
- **Created**: 2025-11-12 05:58:32 (Asia/Katmandu / GMT+06:45)
- **Modified**: 2025-11-28 17:45:25 (Asia/Katmandu / GMT+06:45)
- **MD5**: `02910d24b91835e091bbbb63e545b824`
- **SHA256**: `81dee38adf318cade42fa77dd1fc6f0927dc8c92f845e9c4c8a2a0a4597034d3`
- **Encoding**: ASCII

**File code content:**

```typescript
import { User, currentUser } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prismaDb";

export async function GET(req: NextRequest) {
  try {
    const user: User | null = await currentUser();

    if (!user) {
      return new NextResponse("Please login to access this resources!", {
        status: 400,
      });
    }

    const orders = await prisma.orders.findMany({
      where: {
        userId: user?.id,
      },
      include: {
        prompt: {
          include: {
            promptUrl: true,
            reviews: true,
          },
        },
      },
    });

    // return NextResponse.json(orders);
    return NextResponse.json(JSON.parse(JSON.stringify(orders)));
  } catch (error) {
    console.log("load user error", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}

```

---

### <a id="📄-app-api-routes-prompt-get-prompt-promptid-route-ts"></a>📄 `app/api/(routes)/(prompt)/get-prompt/[promptId]/route.ts`

**File Info:**
- **Size**: 2.55 KB
- **Extension**: `.ts`
- **Language**: `typescript`
- **Location**: `app/api/(routes)/(prompt)/get-prompt/[promptId]/route.ts`
- **Relative Path**: `app/api/(routes)/(prompt)/get-prompt/[promptId]`
- **Created**: 2025-11-12 05:58:32 (Asia/Katmandu / GMT+06:45)
- **Modified**: 2025-11-28 17:08:10 (Asia/Katmandu / GMT+06:45)
- **MD5**: `74f1ee1eaf7a55044ee8ca84d1aeccca`
- **SHA256**: `9aca73c5c97035944a1fa6776b21c62b7e38baf1c911939134da80fcfd3f9b10`
- **Encoding**: ASCII

**File code content:**

```typescript
// import { NextRequest, NextResponse } from "next/server";
// import prisma from "@/lib/prismaDb";
// import { clerkClient } from "@clerk/nextjs";

// export async function GET(req: NextRequest, { params }: { params: any }) {
//   try {
//     const promptId = params.promptId;

//     if (!promptId) {
//       return new NextResponse("Missing 'promptId' query parameter", {
//         status: 400,
//       });
//     }

//     const prompt: any = await prisma.prompts.findUnique({
//       include: {
//         orders: true,
//         images: true,
//         reviews: true,
//         promptUrl: true,
//       },
//       where: {
//         id: promptId,
//       },
//     });

//     if (prompt) {
//       const shop = await prisma.shops.findUnique({
//         where: {
//           userId: prompt?.sellerId,
//         },
//       });
//       prompt.shop = shop;
//     }

//     if (prompt?.reviews) {
//       for (const review of prompt?.reviews) {
//         const user = await clerkClient.users.getUser(review.userId);
//         review.user = user;
//       }
//     }

//     return NextResponse.json(prompt);
//   } catch (error) {
//     console.log("get prompts error", error);
//     return new NextResponse("Internal Error", { status: 500 });
//   }
// }

import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prismaDb";
import { clerkClient } from "@clerk/nextjs";

export async function GET(req: NextRequest, { params }: { params: any }) {
  try {
    const promptId = params.promptId;

    if (!promptId) {
      return new NextResponse("Missing 'promptId' query parameter", {
        status: 400,
      });
    }

    const prompt: any = await prisma.prompts.findUnique({
      include: {
        orders: true,
        images: true,
        reviews: true,
        promptUrl: true,
      },
      where: {
        id: promptId,
      },
    });

    if (prompt) {
      const shop = await prisma.shops.findUnique({
        where: {
          userId: prompt?.sellerId,
        },
      });
      prompt.shop = shop;
    }

    if (prompt?.reviews) {
      for (const review of prompt?.reviews) {
        const user = await clerkClient.users.getUser(review.userId);
        // Convert Clerk user to plain object
        review.user = JSON.parse(JSON.stringify(user));
      }
    }

    // Convert the entire prompt object to plain object before returning
    return NextResponse.json(JSON.parse(JSON.stringify(prompt)));
  } catch (error) {
    console.log("get prompts error", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
```

---

### <a id="📄-app-api-routes-prompt-get-prompts-route-ts"></a>📄 `app/api/(routes)/(prompt)/get-prompts/route.ts`

**File Info:**
- **Size**: 1.6 KB
- **Extension**: `.ts`
- **Language**: `typescript`
- **Location**: `app/api/(routes)/(prompt)/get-prompts/route.ts`
- **Relative Path**: `app/api/(routes)/(prompt)/get-prompts`
- **Created**: 2025-11-12 05:58:32 (Asia/Katmandu / GMT+06:45)
- **Modified**: 2025-11-28 17:49:18 (Asia/Katmandu / GMT+06:45)
- **MD5**: `7ddd3e52031709256cc26208bdfff398`
- **SHA256**: `b39884e7c3351eb38d05d71e4b6e49ac440e691242c8ff2c9d3a775c80e6f0bc`
- **Encoding**: ASCII

**File code content:**

```typescript
import prisma from "@/lib/prismaDb";
import { NextRequest, NextResponse } from "next/server";
import { parse } from "url";

export async function GET(req: NextRequest) {
  try {
    const { query } = parse(req.url, true);
    const pageNumber = query.page ? parseInt(query.page.toString(), 10) : 1;

    const pageSize = 8;

    const prompts: any = await prisma.prompts.findMany({
      include: {
        orders: true,
        images: true,
        reviews: true,
        promptUrl: true,
      },
      where: {
        status: "Live",
      },
      take: pageSize,
      skip: (pageNumber - 1) * pageSize,
      orderBy: {
        createdAt: "desc",
      },
    });

    const totalPrompts: any = await prisma.prompts.findMany({
      where: {
        status: "Live",
      },
      include: {
        images: true,
      },
    });

    if (prompts) {
      for (const prompt of prompts) {
        const shop = await prisma.shops.findUnique({
          where: {
            userId: prompt.sellerId,
          },
        });
        prompt.shop = shop;
      }

      for (const prompt of totalPrompts) {
        const shop = await prisma.shops.findUnique({
          where: {
            userId: prompt.sellerId,
          },
        });
        prompt.shop = shop;
      }
    }

    // return NextResponse.json({ prompts, totalPrompts });
    return NextResponse.json({ 
      prompts: JSON.parse(JSON.stringify(prompts)), 
      totalPrompts: JSON.parse(JSON.stringify(totalPrompts)) 
    });
  } catch (error) {
    console.log("get prompts error", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}

```

---

### <a id="📄-app-api-routes-prompt-get-related-prompts-route-ts"></a>📄 `app/api/(routes)/(prompt)/get-related-prompts/route.ts`

**File Info:**
- **Size**: 1.14 KB
- **Extension**: `.ts`
- **Language**: `typescript`
- **Location**: `app/api/(routes)/(prompt)/get-related-prompts/route.ts`
- **Relative Path**: `app/api/(routes)/(prompt)/get-related-prompts`
- **Created**: 2025-11-12 05:58:32 (Asia/Katmandu / GMT+06:45)
- **Modified**: 2025-11-28 17:50:03 (Asia/Katmandu / GMT+06:45)
- **MD5**: `bb7c9572bc6d491d2ade8daeb1e9fdef`
- **SHA256**: `df8cb8057a142a270627a05069e212578f5ad3899065ef03d1c1d61ca4c1c509`
- **Encoding**: ASCII

**File code content:**

```typescript
import prisma from "@/lib/prismaDb";
import { NextRequest, NextResponse } from "next/server";
import { parse } from "url";

export async function GET(req: NextRequest) {
  try {
    const { query } = parse(req.url, true);
    const promptCategory = query.promptCategory as string || "";

    if (!promptCategory) {
      return new NextResponse("Missing 'promptCategory' in the request.", {
        status: 400,
      });
    }

    const prompt: any = await prisma.prompts.findMany({
      include: {
        orders: true,
        images: true,
        reviews: true,
        promptUrl: true,
      },
      where: {
        category: promptCategory,
      },
    });

    for (const singlePrompt of prompt) {
      if (singlePrompt) {
        const shop = await prisma.shops.findUnique({
          where: {
            userId: singlePrompt?.sellerId,
          },
        });
        singlePrompt.shop = shop;
      }
    }

    // return NextResponse.json(prompt);
    return NextResponse.json(JSON.parse(JSON.stringify(prompt)));
  } catch (error) {
    console.log("get prompts error", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}

```

---

### <a id="📄-app-api-routes-prompt-upload-prompt-route-ts"></a>📄 `app/api/(routes)/(prompt)/upload-prompt/route.ts`

**File Info:**
- **Size**: 2.25 KB
- **Extension**: `.ts`
- **Language**: `typescript`
- **Location**: `app/api/(routes)/(prompt)/upload-prompt/route.ts`
- **Relative Path**: `app/api/(routes)/(prompt)/upload-prompt`
- **Created**: 2025-11-12 05:58:32 (Asia/Katmandu / GMT+06:45)
- **Modified**: 2025-11-28 17:50:59 (Asia/Katmandu / GMT+06:45)
- **MD5**: `7a3798bcf1ee914887bf5812758e0aac`
- **SHA256**: `a5866b861ac10f23095dac2a4b492dc1505cda4287c41d6b4484160627ed1315`
- **Encoding**: ASCII

**File code content:**

```typescript
import cloudinary from "@/lib/cloudinary";
import prisma from "@/lib/prismaDb";
import { User, currentUser } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const user: User | null = await currentUser();

    if (!data.images) {
      data.images = [];
    }

    if (data.images && data.images.length > 0) {
      const validImages = data.images.filter(
        (image: string) => image !== undefined
      );
      const uploadedImages = await Promise.all(
        validImages.map(async (image: string) => {
          const result = await cloudinary.uploader.upload(image);
          return {
            create: {
              public_id: result.public_id,
              url: result.secure_url,
            },
          };
        })
      );

      data.images = {
        createMany: {
          data: uploadedImages.map((image) => image.create),
        },
      };
    }

    if (data.attachments && data.attachments.length > 0) {
      const uploadedAttachments = await Promise.all(
        data.attachments.map(async (attachment: string) => {
          const result = await cloudinary.uploader.upload(attachment, {
            resource_type: "auto",
          });
          return { public_id: result.public_id, url: result.secure_url };
        })
      );
      data.promptUrl = uploadedAttachments;
      delete data.attachments;
    }

    data.estimatedPrice = parseFloat(data.estimatedPrice);
    data.price = parseFloat(data.price);

    const promptUrlData = data.promptUrl;
    delete data.promptUrl;

    const sellerId = user?.id;

    const newPrompt = await prisma.prompts.create({
      data: {
        ...data,
        images: data.images,
        promptUrl: {
          createMany: {
            data: promptUrlData.map((prompt: any) => ({
              public_id: prompt.public_id,
              url: prompt.url,
            })),
          },
        },
        sellerId,
      },
    });

    // return NextResponse.json(newPrompt);
    return NextResponse.json(JSON.parse(JSON.stringify(newPrompt)));
  } catch (error) {
    console.log("create prompt error", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}

```

---

### <a id="📄-app-api-routes-shop-create-shop-route-ts"></a>📄 `app/api/(routes)/(shop)/create-shop/route.ts`

**File Info:**
- **Size**: 792 B
- **Extension**: `.ts`
- **Language**: `typescript`
- **Location**: `app/api/(routes)/(shop)/create-shop/route.ts`
- **Relative Path**: `app/api/(routes)/(shop)/create-shop`
- **Created**: 2025-11-12 05:58:32 (Asia/Katmandu / GMT+06:45)
- **Modified**: 2025-11-28 17:53:19 (Asia/Katmandu / GMT+06:45)
- **MD5**: `a2c8b336f973b49e251f67553b8e1fb6`
- **SHA256**: `6111b7142f340d3d992f27f9655ef5764cd39a9428c0dcf4d7a19871bbcf5f6a`
- **Encoding**: ASCII

**File code content:**

```typescript
import prisma from "@/lib/prismaDb";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    const userId = data.userId;

    // check if a user with given userId exists
    const user = await prisma.shops.findUnique({
      where: {
        userId,
      },
    });

    if (user) {
      return new NextResponse("You already have one shop with this account!", {
        status: 400,
      });
    }

    const shop = await prisma.shops.create({ data });

    // return NextResponse.json(shop);
    return NextResponse.json(JSON.parse(JSON.stringify(shop)));
  } catch (error) {
    console.log("create shop error", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}

```

---

### <a id="📄-app-api-routes-shop-get-top-sellers-route-ts"></a>📄 `app/api/(routes)/(shop)/get-top-sellers/route.ts`

**File Info:**
- **Size**: 520 B
- **Extension**: `.ts`
- **Language**: `typescript`
- **Location**: `app/api/(routes)/(shop)/get-top-sellers/route.ts`
- **Relative Path**: `app/api/(routes)/(shop)/get-top-sellers`
- **Created**: 2025-11-12 05:58:33 (Asia/Katmandu / GMT+06:45)
- **Modified**: 2025-11-28 17:54:05 (Asia/Katmandu / GMT+06:45)
- **MD5**: `b2ca9d9ef6d082e4927f6816dc54f789`
- **SHA256**: `449ad1c7c78db928bcf037b90047dd0f9df9e589e0b688ce5ba28c6472e26a47`
- **Encoding**: ASCII

**File code content:**

```typescript
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prismaDb";

export async function GET(req: NextRequest) {
  try {
    const sellers = await prisma.shops.findMany({
      take: 4,
      orderBy: {
        allProducts: "desc",
      },
    });

    // return NextResponse.json(sellers);
    return NextResponse.json(JSON.parse(JSON.stringify(sellers)));
  } catch (error) {
    console.log("load user error", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}

```

---

### <a id="📄-app-api-routes-user-me-route-ts"></a>📄 `app/api/(routes)/(user)/me/route.ts`

**File Info:**
- **Size**: 755 B
- **Extension**: `.ts`
- **Language**: `typescript`
- **Location**: `app/api/(routes)/(user)/me/route.ts`
- **Relative Path**: `app/api/(routes)/(user)/me`
- **Created**: 2025-11-12 05:58:33 (Asia/Katmandu / GMT+06:45)
- **Modified**: 2025-11-28 17:54:54 (Asia/Katmandu / GMT+06:45)
- **MD5**: `3d6e3dac0021cfbee4c836d46fe14067`
- **SHA256**: `c33f5005015012b9a5594a0547bb5ae7a9f830976d5ec69d109b30fb010f8e2e`
- **Encoding**: ASCII

**File code content:**

```typescript
import { User, currentUser } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prismaDb";

export async function GET(req: NextRequest) {
  try {
    const user: User | null = await currentUser();
    
    if (!user) {
      return new NextResponse("Please login to access this resources!", {
        status: 400,
      });
    }

    const shop = await prisma.shops.findUnique({
      where: {
        userId: user.id,
      },
    });

    // return NextResponse.json({ user, shop });
    return NextResponse.json(JSON.parse(JSON.stringify({ user, shop })));
  } catch (error) {
    console.log("load user error", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}

```

---

### <a id="📄-app-contact-page-tsx"></a>📄 `app/contact/page.tsx`

**File Info:**
- **Size**: 108 B
- **Extension**: `.tsx`
- **Language**: `typescript`
- **Location**: `app/contact/page.tsx`
- **Relative Path**: `app/contact`
- **Created**: 2025-11-12 05:58:33 (Asia/Katmandu / GMT+06:45)
- **Modified**: 2024-01-24 15:41:52 (Asia/Katmandu / GMT+06:45)
- **MD5**: `af3329229fd8a5250004dc650a8179f6`
- **SHA256**: `fc0b378d57721995f11142a110d3cfe7c938695e564ddf4803a364a015e73261`
- **Encoding**: ASCII

**File code content:**

```typescript
import React from "react";

const Page = () => {
  return <div>Contact Page</div>;
};

export default Page;

```

---

### <a id="📄-app-create-shop-page-tsx"></a>📄 `app/create-shop/page.tsx`

**File Info:**
- **Size**: 3.86 KB
- **Extension**: `.tsx`
- **Language**: `typescript`
- **Location**: `app/create-shop/page.tsx`
- **Relative Path**: `app/create-shop`
- **Created**: 2025-11-12 05:58:33 (Asia/Katmandu / GMT+06:45)
- **Modified**: 2024-01-24 15:41:52 (Asia/Katmandu / GMT+06:45)
- **MD5**: `d0568e69057ca19d5538faf0978ce2ac`
- **SHA256**: `874bd980f115cab5c515f41fc98d26b6d6eb3aec13124761d9573091716d1b62`
- **Encoding**: ASCII

**File code content:**

```typescript
"use client";
import { styles } from "@/utils/styles";
import { useUser } from "@clerk/nextjs";
import { Button, Input, Textarea } from "@nextui-org/react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

type Props = {};

const Page = (props: Props) => {
  const { user } = useUser();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [shopData, setShopData] = useState({
    name: "",
    description: "",
    shopProductsType: "",
    avatar: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    if (user) {
      const data = {
        name: shopData.name,
        description: shopData.description,
        shopProductsType: shopData.shopProductsType,
        avatar: user?.imageUrl || "",
        userId: user?.id,
      };
      await axios
        .post("/api/create-shop", data)
        .then((res) => {
          setLoading(false);
          toast.success("Shop created successfully!");
          setShopData({
            name: "",
            description: "",
            shopProductsType: "",
            avatar: "",
          });
          router.push("/");
        })
        .catch((error) => {
          setLoading(false);
          toast.error(error.response.data);
          setShopData({
            name: "",
            description: "",
            shopProductsType: "",
            avatar: "",
          });
        });
    }
  };

  return (
    <div className="w-full h-screen flex flex-col justify-center">
      <div>
        <h1 className={`${styles.heading} text-center font-Monserrat`}>
          Start to selling with us
        </h1>
        <form
          className="2xl:w-[40%] xl:w-[50%] md:w-[70%] w-[90%] m-auto"
          onSubmit={handleSubmit}
        >
          <div className="w-full my-5">
            <label className={`${styles.label} mb-2 block`}>Shop Name</label>
            <Input
              isRequired
              type="name"
              value={shopData.name}
              onChange={(e) =>
                setShopData({ ...shopData, name: e.target.value })
              }
              label="Becodemy"
              size="sm"
              variant="bordered"
            />
          </div>
          <div className="w-full my-5">
            <label className={`${styles.label} mb-2 block`}>
              Shop Description (Max 120 letters)
            </label>
            <Input
              isRequired
              type="text"
              label="lorem ipsum"
              size="sm"
              value={shopData.description}
              onChange={(e) =>
                setShopData({ ...shopData, description: e.target.value })
              }
              variant="bordered"
              maxLength={120}
            />
          </div>
          <div className="w-full my-5">
            <label className={`${styles.label} mb-2 block`}>
              What you wanna sale with us?
            </label>
            <Textarea
              variant="bordered"
              value={shopData.shopProductsType}
              onChange={(e) =>
                setShopData({ ...shopData, shopProductsType: e.target.value })
              }
              required
              placeholder="Chatgpt,Midjoureney Prompts..."
              className="col-span-12 md:col-span-6 md:mb-0"
            />
            <br />
            <Button
              className="mb-3 w-full bg-transparent h-[45px] border border-[#16c252] text-[#16c252] hover:bg-[#16c252] hover:text-black duration-300 transition-opacity font-Inter font-[600]"
              type="submit"
              disabled={loading}
              disableAnimation={loading}
            >
              Create Shop
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Page;

```

---

### <a id="📄-app-marketplace-page-tsx"></a>📄 `app/marketplace/_page.tsx`

**File Info:**
- **Size**: 3.32 KB
- **Extension**: `.tsx`
- **Language**: `typescript`
- **Location**: `app/marketplace/_page.tsx`
- **Relative Path**: `app/marketplace`
- **Created**: 2025-11-12 05:58:33 (Asia/Katmandu / GMT+06:45)
- **Modified**: 2024-01-24 15:41:52 (Asia/Katmandu / GMT+06:45)
- **MD5**: `53b958a7d02898e682742cb5047d670c`
- **SHA256**: `1192798a0f9023ffe0c2b2371c6c950d5e5c2ec68ac8b27ee92b1710a6a1b8e2`
- **Encoding**: ASCII

**File code content:**

```typescript
"use client";

import Footer from "@/components/Layout/Footer";
import Header from "@/components/Layout/Header";
import ShopBanner from "@/components/Shop/ShopBanner";
import { User } from "@clerk/nextjs/server";
import { Divider, Pagination } from "@nextui-org/react";
import { useEffect, useState } from "react";
import FilterPrompt from "@/components/Prompts/FilterPrompt";
import { useRouter } from "next/navigation";
import PromptCard from "@/components/Prompts/PromptCard";
import PromptCardLoader from "@/utils/PromptCardLoader";

const MarketPlaceRouter = ({
  user,
  isSellerExist,
}: {
  user: User | undefined;
  isSellerExist: boolean;
}) => {
  const [isMounted, setisMounted] = useState(false);
  const [initialPage, setInitialPage] = useState(1);
  const [prompts, setPrompts] = useState<any>();
  const [totalPrompts, setTotalPrompts] = useState<any>();
  const [loading, setLoading] = useState(true);

  const router = useRouter();

  const fetchPromptsData = async () => {
    setLoading(true);
    try {
      const response = await fetch(`/api/get-prompts?page=${initialPage}`);
      const data = await response.json();
      setPrompts(data.prompts);
      setTotalPrompts(data.totalPrompts);
    } catch (error) {
      console.error("Failed to fetch prompts:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!isMounted) {
      setisMounted(true);
    }
  }, [isMounted]);

  useEffect(() => {
    if (initialPage) {
      router.push(`/marketplace?page=${initialPage}`);
    }
  }, [initialPage, router]);

  useEffect(() => {
    fetchPromptsData();
  }, [initialPage]);

  if (!isMounted) {
    return null;
  }

  const paginationsPages = totalPrompts && Math.ceil(totalPrompts.length / 8);

  return (
    <>
      <div className="shop-banner">
        <Header activeItem={2} user={user} isSellerExist={isSellerExist} />
        <ShopBanner title="Our Shop" />
      </div>
      <div>
        <div className="w-[95%] md:w-[90%] xl:w-[85%] 2xl:w-[80%] m-auto">
          <div>
            <div className="w-full">
              <FilterPrompt
                setPrompts={setPrompts}
                totalPrompts={totalPrompts}
              />
            </div>
            <div className="w-full flex flex-wrap mt-5">
              {loading ? (
                [...new Array(8)].map((i) => (
                  <>
                    <PromptCardLoader />
                  </>
                ))
              ) : (
                <>
                  {prompts &&
                    prompts.map((item: any) => (
                      <PromptCard prompt={item} key={item.id} />
                    ))}
                </>
              )}
            </div>
            <div className="w-full flex items-center justify-center mt-5">
              {!loading && (
                <Pagination
                  loop
                  showControls
                  total={paginationsPages}
                  initialPage={initialPage}
                  classNames={{
                    wrapper: "mx-2",
                    item: "mx-2",
                  }}
                  onChange={setInitialPage}
                />
              )}
            </div>
            <Divider className="bg-[#ffffff14] mt-5" />
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default MarketPlaceRouter;

```

---

### <a id="📄-app-marketplace-page-tsx"></a>📄 `app/marketplace/page.tsx`

**File Info:**
- **Size**: 381 B
- **Extension**: `.tsx`
- **Language**: `typescript`
- **Location**: `app/marketplace/page.tsx`
- **Relative Path**: `app/marketplace`
- **Created**: 2025-11-12 05:58:33 (Asia/Katmandu / GMT+06:45)
- **Modified**: 2025-11-28 18:52:41 (Asia/Katmandu / GMT+06:45)
- **MD5**: `affcc0f5306f2a4c8791ca0878e06e7e`
- **SHA256**: `fe59ec4d32fc1105423e6e8e9a32f8eaaae89ada72f031ff3a7cfe4d68324e58`
- **Encoding**: ASCII

**File code content:**

```typescript
import MarketPlaceRouter from "./_page";
import { getUser } from "@/actions/user/getUser";

const Page = async () => {
  const data = await getUser();

  return (
    <div>
      <MarketPlaceRouter
        // user={data?.user}
        user={JSON.parse(JSON.stringify(data?.user))}
        isSellerExist={data?.shop ? true : false}
      />
    </div>
  );
};

export default Page;

```

---

### <a id="📄-app-my-orders-page-tsx"></a>📄 `app/my-orders/_page.tsx`

**File Info:**
- **Size**: 8.28 KB
- **Extension**: `.tsx`
- **Language**: `typescript`
- **Location**: `app/my-orders/_page.tsx`
- **Relative Path**: `app/my-orders`
- **Created**: 2025-11-12 05:58:33 (Asia/Katmandu / GMT+06:45)
- **Modified**: 2024-01-24 15:41:52 (Asia/Katmandu / GMT+06:45)
- **MD5**: `8118cf33980ce9e2c2efb724b43407d7`
- **SHA256**: `260be7af9b77328ef8b426b9f8b9a8d602b52cc94b1942551b4bf2eaf9987ca8`
- **Encoding**: ASCII

**File code content:**

```typescript
"use client";

import { styles } from "@/utils/styles";
import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { format } from "timeago.js";
import { PiDownloadDuotone } from "react-icons/pi";
import { VscPreview } from "react-icons/vsc";
import { RxCross1 } from "react-icons/rx";

import { useEffect, useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { Button } from "@nextui-org/react";
import { newReview } from "@/actions/reviews/newReview";
import { User } from "@clerk/nextjs/server";
import toast from "react-hot-toast";
import Header from "@/components/Layout/Header";
import { Orders } from "@/@types/OrderTypes";
import Loader from "@/utils/Loader";

const UserAllOrders = ({
  user,
  isSellerExist,
}: {
  user: User | undefined;
  isSellerExist: boolean | undefined;
}) => {
  const [open, setOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [promptId, setPromptId] = useState("");
  const [orders, setorders] = useState<Orders[]>();
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(0);
  const [loading, setLoading] = useState(true);

  const fetchOrdersData = async () => {
    setLoading(true);
    try {
      const response = await fetch(`/api/get-user-orders`);
      const data = await response.json();
      setorders(data);
    } catch (error) {
      console.error("Failed to fetch prompts:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrdersData();
  }, []);

  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    { field: "name", headerName: "Prompt Title", flex: 0.8 },
    { field: "price", headerName: "Prompt Price", flex: 0.5 },
    {
      field: "download",
      headerName: "Download Source Code",
      flex: 0.5,
      renderCell: (params: any) => {
        const sourceCodeFiles = params.row.download;
        return (
          <div className="w-[70%] flex justify-center">
            {sourceCodeFiles &&
              sourceCodeFiles.map((file: any) => (
                <a href={file.url} key={file.url} download>
                  <PiDownloadDuotone className="text-2xl text-white cursor-pointer" />
                </a>
              ))}
          </div>
        );
      },
    },
    {
      field: "OrderedAt",
      headerName: "Ordered At",
      flex: 0.5,
    },
    {
      field: "Review",
      headerName: "Give one Review",
      flex: 0.5,
      renderCell: (params: any) => {
        return (
          <div className="w-[70%] flex justify-center">
            <VscPreview
              className="text-2xl text-white cursor-pointer"
              onClick={() => {
                setOpen(!open);
                setPromptId(params.row.prompt.id);
              }}
            />
          </div>
        );
      },
    },
  ];

  useEffect(() => {
    if (!isMounted) {
      setIsMounted(true);
    }
  }, [isMounted]);

  const rows: any = [];

  orders &&
    orders.forEach((item: any) =>
      rows.push({
        id: item.id,
        name: item.prompt.name,
        price: "$US" + item.prompt.price,
        download: item.prompt.promptUrl,
        OrderedAt: format(item.createdAt),
        prompt: item.prompt,
      })
    );

  const reviewHandler = async () => {
    if (rating === 0 || review === "") {
      toast.error("Please fill the all fields!");
    } else {
      await newReview({ rating, comment: review, promptId, userId: user?.id! });
      setOpen(!open);
      setRating(0);
      setReview("");
    }
  };

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <Header activeItem={9} user={user} isSellerExist={isSellerExist} />
      {loading ? (
        <Loader />
      ) : (
        <div className="w-[90%] m-auto">
          <h1 className={`${styles.heading} text-center py-5`}>All Orders</h1>
          <Box
            m="40px 0 0 0"
            height="75vh"
            sx={{
              "& .MuiDataGrid-root": {
                border: "none",
                outline: "none",
              },
              "& .css-pqjvzy-MuiSvgIcon-root-MuiSelect-icon": {
                color: "#fff",
              },
              "& .MuiDataGrid-sortIcon": {
                color: "#fff",
              },
              "& .MuiDataGrid-row": {
                color: "#fff",
                borderBottom: "1px solid #ffffff30!important",
              },
              "& .MuiTablePagination-root": {
                color: "#fff",
              },
              "& .MuiDataGrid-cell": {
                borderBottom: "none!important",
              },
              "& .name-column--cell": {
                color: "#fff",
              },
              "& .MuiDataGrid-columnHeaders": {
                backgroundColor: "#3e4396",
                borderBottom: "none",
                color: "#fff",
              },
              "& .MuiDataGrid-virtualScroller": {
                backgroundColor: "#1F2A40",
              },
              "& .MuiDataGrid-footerContainer": {
                color: "dark",
                borderTop: "none",
                backgroundColor: "#3e4396",
              },
              "& .MuiCheckbox-root": {
                color: `#b7ebde !important`,
              },
              "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                color: `#fff !important`,
              },
            }}
          >
            <DataGrid checkboxSelection rows={rows} columns={columns} />
          </Box>
          {open && (
            <div className="w-full fixed top-0 left-0 z-[9999999] h-screen bg-[#00000020] flex items-center justify-center">
              <div className="md:w-[70%] xl:w-[40%] w-[90%] bg-white shadow rounded p-5">
                <div className="w-full flex justify-end">
                  <RxCross1
                    className="text-2xl text-black cursor-pointer"
                    onClick={() => setOpen(!open)}
                  />
                </div>
                <div className="w-full">
                  <h1
                    className={`${styles.label} text-black !text-3xl text-center`}
                  >
                    Give One Review
                  </h1>
                  <br />
                  <h5 className={`${styles.label} !text-black pl-2 mb-1`}>
                    Give a Rating <span className="text-red-500 pl-1">*</span>
                  </h5>
                  <div className="flex w-full ml-2 pb-3">
                    {[1, 2, 3, 4, 5].map((i) =>
                      rating >= i ? (
                        <AiFillStar
                          key={i}
                          className="mr-1 cursor-pointer"
                          color="rgb(246,186,0)"
                          size={25}
                          onClick={() => setRating(i)}
                        />
                      ) : (
                        <AiOutlineStar
                          key={i}
                          className="mr-1 cursor-pointer"
                          color="rgb(246,186,0)"
                          size={25}
                          onClick={() => setRating(i)}
                        />
                      )
                    )}
                  </div>
                  <textarea
                    name="comment"
                    value={review}
                    onChange={(e) => setReview(e.target.value)}
                    id=""
                    cols={40}
                    rows={5}
                    placeholder="Write your comment..."
                    className="outline-none bg-transparent 800px:ml-3 text-black border border-[#00000027] w-[95%] 800px:w-full p-2 rounded text-[18px] font-Poppins"
                  ></textarea>
                  <br />
                  <Button
                    color="primary"
                    className={`${styles.button} !bg-[#000] mt-5`}
                    onClick={reviewHandler}
                    disabled={orders
                      ?.find((i: any) => i.promptId === promptId)
                      ?.prompt.reviews.some(
                        (review: any) => review.userId === user?.id
                      )}
                  >
                    Submit
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default UserAllOrders;

```

---

### <a id="📄-app-my-orders-page-tsx"></a>📄 `app/my-orders/page.tsx`

**File Info:**
- **Size**: 389 B
- **Extension**: `.tsx`
- **Language**: `typescript`
- **Location**: `app/my-orders/page.tsx`
- **Relative Path**: `app/my-orders`
- **Created**: 2025-11-12 05:58:33 (Asia/Katmandu / GMT+06:45)
- **Modified**: 2025-11-28 18:56:18 (Asia/Katmandu / GMT+06:45)
- **MD5**: `b5d01cf138d691b5a752baef71a25f03`
- **SHA256**: `fb307145346c625f1fd6c2745f8cec57596fc8c41a032a2388c0a4143c40f5b3`
- **Encoding**: ASCII

**File code content:**

```typescript
import UserAllOrders from "./_page";
import { getUser } from "@/actions/user/getUser";

const Page = async () => {
  const userData = await getUser();
  return (
    <div>
      <UserAllOrders
        // user={userData?.user}
        user={JSON.parse(JSON.stringify(userData?.user))} 
        isSellerExist={userData?.shop ? true : false}
      />
    </div>
  );
};

export default Page;

```

---

### <a id="📄-app-policy-page-tsx"></a>📄 `app/policy/page.tsx`

**File Info:**
- **Size**: 107 B
- **Extension**: `.tsx`
- **Language**: `typescript`
- **Location**: `app/policy/page.tsx`
- **Relative Path**: `app/policy`
- **Created**: 2025-11-12 05:58:33 (Asia/Katmandu / GMT+06:45)
- **Modified**: 2024-01-24 15:41:52 (Asia/Katmandu / GMT+06:45)
- **MD5**: `89e5ef568a448d809b2250e814eedfd4`
- **SHA256**: `ffaa3233a889ed5d11202d1ae234d2d2624b73843a57ddfb0936b78ed9965f68`
- **Encoding**: ASCII

**File code content:**

```typescript
import React from "react";

const Page = () => {
  return <div>Policy Page</div>;
};

export default Page;

```

---

### <a id="📄-app-prompt-id-page-tsx"></a>📄 `app/prompt/[id]/_page.tsx`

**File Info:**
- **Size**: 2.7 KB
- **Extension**: `.tsx`
- **Language**: `typescript`
- **Location**: `app/prompt/[id]/_page.tsx`
- **Relative Path**: `app/prompt/[id]`
- **Created**: 2025-11-12 05:58:33 (Asia/Katmandu / GMT+06:45)
- **Modified**: 2024-01-24 15:41:52 (Asia/Katmandu / GMT+06:45)
- **MD5**: `140da342ab502300b48acf68aef68dae`
- **SHA256**: `a03b41cac71b0f579b37b6225f9ef8159bd47769522d962cf14201095549e659`
- **Encoding**: ASCII

**File code content:**

```typescript
"use client";
import Footer from "@/components/Layout/Footer";
import Header from "@/components/Layout/Header";
import ShopBanner from "@/components/Shop/ShopBanner";
import { User } from "@clerk/nextjs/server";
import { Divider } from "@nextui-org/react";
import { useEffect, useState } from "react";
import PromptDetails from "@/components/Prompts/PromptDetails/PromptDetails";
import { stripePaymentIntent } from "@/actions/payment/paymentAction";
import { loadStripe } from "@stripe/stripe-js";
import { propmt } from "@/@types/promptTypes";
import Loader from "@/utils/Loader";

const PromptDetailsPage = ({
  user,
  isSellerExist,
  publishAbleKey,
  promptId,
}: {
  user: User | undefined;
  isSellerExist: boolean;
  publishAbleKey: string;
  promptId: string;
}) => {
  const [isMounted, setIsMounted] = useState(false);
  const [stripePromise, setStripePromise] = useState<any>();
  const [clientSecret, setClientSecret] = useState("");
  const [prompt, setPrompt] = useState<propmt>();
  const [loading, setLoading] = useState(true);

  const fetchPromptData = async () => {
    setLoading(true);
    try {
      const response = await fetch(`/api/get-prompt/${promptId}`);
      const data = await response.json();
      setPrompt(data);
    } catch (error) {
      console.error("Failed to fetch prompts:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPromptData();
  }, []);

  useEffect(() => {
    if (!isMounted) {
      setIsMounted(true);
    }
  }, [isMounted]);

  useEffect(() => {
    if (prompt) {
      if (publishAbleKey) {
        const amount = Math.round(prompt.price * 100);
        newPaymentIntent({ amount });
        setStripePromise(loadStripe(publishAbleKey));
      }
    }
  }, [publishAbleKey, prompt]);

  const newPaymentIntent = async ({ amount }: { amount: Number }) => {
    const paymentIntent = await stripePaymentIntent({ amount });
    setClientSecret(paymentIntent?.client_secret);
  };

  if (!isMounted) {
    return null;
  }

  return (
    <>
      {loading && !prompt ? (
        <Loader />
      ) : (
        <div>
          <div className="shop-banner">
            <Header activeItem={2} user={user} isSellerExist={isSellerExist} />
            <ShopBanner title={prompt?.name!} />
          </div>
          <div>
            <div className="w-[95%] md:w-[80%] xl:w-[85%] 2xl:w-[80%] m-auto">
              <PromptDetails
                promptData={prompt}
                stripePromise={stripePromise}
                clientSecret={clientSecret}
              />
              <Divider className="bg-[#ffffff14] mt-5" />
              <Footer />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PromptDetailsPage;

```

---

### <a id="📄-app-prompt-id-page-tsx"></a>📄 `app/prompt/[id]/page.tsx`

**File Info:**
- **Size**: 605 B
- **Extension**: `.tsx`
- **Language**: `typescript`
- **Location**: `app/prompt/[id]/page.tsx`
- **Relative Path**: `app/prompt/[id]`
- **Created**: 2025-11-12 05:58:33 (Asia/Katmandu / GMT+06:45)
- **Modified**: 2025-11-28 18:57:29 (Asia/Katmandu / GMT+06:45)
- **MD5**: `902e9179b5c241dead44107aa8006716`
- **SHA256**: `8e78ebf8b2262f568c997d3929cd485c54a7a53d21e8ba6750c77972884776d5`
- **Encoding**: ASCII

**File code content:**

```typescript
import { getUser } from "@/actions/user/getUser";
import PromptDetailsPage from "./_page";
import { stripePublishableKey } from "@/actions/payment/paymentAction";

const Page = async ({ params }: { params: any }) => {
  const data = await getUser();
  const publishAbleKey = await stripePublishableKey()!;

  return (
    <div>
      <PromptDetailsPage
        // user={data?.user}
        user={JSON.parse(JSON.stringify(data?.user))}
        isSellerExist={data?.shop ? true : false}
        publishAbleKey={publishAbleKey}
        promptId={params.id}
      />
    </div>
  );
};

export default Page;

```

---

### <a id="📄-app-sign-in-sign-in-page-tsx"></a>📄 `app/sign-in/[[...sign-in]]/page.tsx`

**File Info:**
- **Size**: 191 B
- **Extension**: `.tsx`
- **Language**: `typescript`
- **Location**: `app/sign-in/[[...sign-in]]/page.tsx`
- **Relative Path**: `app/sign-in/[[...sign-in]]`
- **Created**: 2025-11-12 05:58:33 (Asia/Katmandu / GMT+06:45)
- **Modified**: 2024-01-24 15:41:52 (Asia/Katmandu / GMT+06:45)
- **MD5**: `97ef5074c875f895922557e4391511a7`
- **SHA256**: `1766682528add2b491b1bebbcd747164e6f0a7d887fc87335ac1ca2fdc0a915e`
- **Encoding**: ASCII

**File code content:**

```typescript
import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <SignIn />
    </div>
  );
}

```

---

### <a id="📄-app-sign-up-sign-up-page-tsx"></a>📄 `app/sign-up/[[...sign-up]]/page.tsx`

**File Info:**
- **Size**: 188 B
- **Extension**: `.tsx`
- **Language**: `typescript`
- **Location**: `app/sign-up/[[...sign-up]]/page.tsx`
- **Relative Path**: `app/sign-up/[[...sign-up]]`
- **Created**: 2025-11-12 05:58:33 (Asia/Katmandu / GMT+06:45)
- **Modified**: 2024-01-24 15:41:52 (Asia/Katmandu / GMT+06:45)
- **MD5**: `bb2c998e74dc13e5b8b959cfcb2eadd5`
- **SHA256**: `64d4f8d72f4fa23fa29c16b46e1d73549923b95f23d42b69a23f6f1e2692f9fa`
- **Encoding**: ASCII

**File code content:**

```typescript
import { SignUp } from "@clerk/nextjs";
 
export default function Page() {
  return(
    <div className="w-full h-screen flex items-center justify-center">
   <SignUp />
    </div>
   );
}
```

---

### <a id="📄-app-globals-css"></a>📄 `app/globals.css`

**File Info:**
- **Size**: 1.55 KB
- **Extension**: `.css`
- **Language**: `css`
- **Location**: `app/globals.css`
- **Relative Path**: `app`
- **Created**: 2025-11-12 05:58:33 (Asia/Katmandu / GMT+06:45)
- **Modified**: 2024-01-24 15:41:52 (Asia/Katmandu / GMT+06:45)
- **MD5**: `eeaba01f1aab5cdaa64dd5d7c97cc573`
- **SHA256**: `0da575b4483c5ae888c813bc13b48d4dd7615fd5bf76ef7373ac2b85dd667970`
- **Encoding**: ASCII

**File code content:**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  background: #030015!important;
  font-size: 16px;
  font-weight: 400;
  max-width: 100vw;
  min-height: 100vh; 
  overflow-x: clip;
  color: #fff;
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: transparent;
  scroll-behavior: smooth;
}

* {
  scroll-behavior: smooth;
}

.banner {
  min-height: 100vh;
  background-image: url("https://pixner.net/aikeu/assets/images/banner/banner-one-bg.png");
  background-position: center center;
  background-size: cover;
  overflow: hidden;
  z-index: 1;
}
@media screen and (max-width: 760px) {
     .banner{
      min-height: unset!important;
     }
}
.banner::before {
  position: absolute;
  top: 0px;
  left: -150px;
  content: "";
  width: 500px;
  height: 500px;
  min-height: 300px;
  border-radius: 50%;
  background: rgba(75, 255, 223, 0.24);
  filter: blur(227px);
  /* z-index: -1; */
}
.banner::after {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: -100px;
  content: "";
  width: 430px;
  height: 430px;
  min-height: 300px;
  border-radius: 50%;
  background: rgba(75, 169, 255, 0.44);
  filter: blur(272px);
  /* z-index: -1; */
}
.shop-banner {
  background-image: url("https://pixner.net/aikeu/assets/images/banner/cmn-bg.png");
  background-position: center center;
  background-size: cover;
  overflow: hidden;
  z-index: 1;
  height: 50vh;
}
.before\:transition-background::before {
  background-color: transparent !important;
}
.sellers-banner {
  background: linear-gradient(132deg, #5fec46 0%, #46e695 100%);
}
```

---

### <a id="📄-app-layout-tsx"></a>📄 `app/layout.tsx`

**File Info:**
- **Size**: 980 B
- **Extension**: `.tsx`
- **Language**: `typescript`
- **Location**: `app/layout.tsx`
- **Relative Path**: `app`
- **Created**: 2025-11-12 05:58:33 (Asia/Katmandu / GMT+06:45)
- **Modified**: 2025-11-28 15:43:22 (Asia/Katmandu / GMT+06:45)
- **MD5**: `95cd7340fda2070196a80c8dba9a0c78`
- **SHA256**: `a9abae94df3801fab5834c6d20af8e2b078783b8167331aea55862059c635d02`
- **Encoding**: ASCII

**File code content:**

```typescript
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import Provider from "./(Providers)/NextUiProvider";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const monserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Becodefy AI Prompts Marketplace",
  description: "Generated by Becodefy",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en"suppressHydrationWarning={true}>
        <body className={`${inter.variable} ${monserrat.variable}`}>
          <Provider>
            <Toaster position="top-center" reverseOrder={false} />
            {children}
          </Provider>
        </body>
      </html>
    </ClerkProvider>
  );
}

```

---

## 🚫 Binary/Excluded Files

The following files were not included in the text content:

- `app/favicon.ico`

### <a id="📄-components-analytics-orderanalytics-tsx"></a>📄 `components/Analytics/OrderAnalytics.tsx`

**File Info:**
- **Size**: 2.42 KB
- **Extension**: `.tsx`
- **Language**: `typescript`
- **Location**: `components/Analytics/OrderAnalytics.tsx`
- **Relative Path**: `components/Analytics`
- **Created**: 2025-11-12 05:58:33 (Asia/Katmandu / GMT+06:45)
- **Modified**: 2024-01-24 15:41:52 (Asia/Katmandu / GMT+06:45)
- **MD5**: `12f98cdde9fac499bdef411d78b22d39`
- **SHA256**: `77101d03e9fb9c43606f5cf38825e5f1955fbdd804627cd0c2f3acf5cdd10882`
- **Encoding**: ASCII

**File code content:**

```typescript
"use client";
import { generateLast12MonthsOrderData } from "@/actions/analytics/getOrdersAnalytics";
import { styles } from "@/utils/styles";
import { useEffect, useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

type Props = {
  isDashboard?: boolean;
};

const OrderAnalytics = ({ isDashboard }: Props) => {
  const [data, setData] = useState<any>();

  useEffect(() => {
    generateLast12MonthsOrderData()
      .then((res) => {
        setData(res.last12Months);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  data?.last12Months?.forEach((item: any) => {
    data?.last12Months?.push({ month: item.month, count: item.count });
  });

  return (
    <>
      <div
        className={`${
          !isDashboard
            ? "mt-[50px]"
            : "mt-[50px] bg-[#111C43] shadow-sm pb-5 rounded-sm"
        }`}
      >
        <div className={`${isDashboard ? "!ml-8 mb-5" : ""}`}>
          <h1
            className={`${styles.label} ${
              isDashboard && "!text-[20px]"
            } px-5 !text-start`}
          >
            Orders Analytics
          </h1>
          {!isDashboard && (
            <p className={`${styles.label} px-5`}>
              Last 12 months analytics data{" "}
            </p>
          )}
        </div>

        <div
          className={`w-full ${
            isDashboard ? "h-[30vh]" : "h-screen"
          } flex items-center justify-center`}
        >
           {data ? (
            <>
              <ResponsiveContainer
                width={isDashboard ? "100%" : "90%"}
                height={!isDashboard ? "50%" : "100%"}
              >
                <AreaChart
                  data={data}
                  margin={{
                    top: 20,
                    right: 30,
                    left: 0,
                    bottom: 0,
                  }}
                >
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Area
                    type="monotone"
                    dataKey="count"
                    stroke="#4d62d9"
                    fill="#4d62d9"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </>
          ) : (
            <div>Loading....</div>
          )}
        </div>
      </div>
    </>
  );
};

export default OrderAnalytics;

```

---

### <a id="📄-components-layout-dropdown-tsx"></a>📄 `components/Layout/DropDown.tsx`

**File Info:**
- **Size**: 2.69 KB
- **Extension**: `.tsx`
- **Language**: `typescript`
- **Location**: `components/Layout/DropDown.tsx`
- **Relative Path**: `components/Layout`
- **Created**: 2025-11-12 05:58:33 (Asia/Katmandu / GMT+06:45)
- **Modified**: 2024-01-24 15:41:52 (Asia/Katmandu / GMT+06:45)
- **MD5**: `b2f4af70040d56242932def0ba6c4ff1`
- **SHA256**: `773b50b88b71b750a880d649841237ad0a43435c13b10395f1910b17605083f2`
- **Encoding**: ASCII

**File code content:**

```typescript
import { styles } from "@/utils/styles";
import { User } from "@clerk/nextjs/server";
import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import Link from "next/link";
import { GrDocumentStore } from "react-icons/gr";
import { AiOutlineLogout } from "react-icons/ai";
import { TbSwitchVertical } from "react-icons/tb";
import { useClerk } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

type Props = {
  user: User | null;
  setOpen: (open: boolean) => void;
  handleProfile: () => void;
  isSellerExist?: boolean;
};

const DropDown = ({ user, setOpen, handleProfile, isSellerExist }: Props) => {
  const { signOut } = useClerk();
  const router = useRouter();
  const handleLogOut = async () => {
    await signOut();
    router.push("/sign-in");
  };
  return (
    <Dropdown placeholder="bottom-start" className="bg-white">
      <DropdownTrigger>
        <Avatar
          src={user?.imageUrl}
          alt=""
          className="w-[40px] h-[40px] cursor-pointer"
        />
      </DropdownTrigger>
      <DropdownMenu aria-label="Profile Actions" variant="flat">
        <DropdownItem
          onClick={() => {
            handleProfile();
            setOpen(false);
          }}
        >
          <div className="flex w-full items-center">
            <Avatar
              src={user?.imageUrl}
              alt=""
              className="w-[30px] h-[30px] cursor-pointer"
            />
            <span className={`${styles.label} text-black text-[16px] pl-2`}>
              My Profile
            </span>
          </div>
        </DropdownItem>
        <DropdownItem>
          <Link href={"/my-orders"} className="flex w-full items-center">
            <GrDocumentStore className="text-[22px] ml-2 text-black" />
            <span className={`${styles.label} text-black text-[16px] pl-2`}>
              My Orders
            </span>
          </Link>
        </DropdownItem>
        <DropdownItem className={`${!isSellerExist && "hidden"}`}>
          <Link href={"/my-shop"} className="flex w-full items-center">
            <TbSwitchVertical className="text-2xl ml-2 text-black" />
            <span className={`${styles.label} text-black text-[16px] pl-2`}>
              Switching to Seller
            </span>
          </Link>
        </DropdownItem>
        <DropdownItem onClick={handleLogOut}>
          <div className="flex items-center w-full">
            <AiOutlineLogout className="text-2xl ml-2 text-black" />
            <span className={`${styles.label} text-black text-[16px] pl-2`}>
              Log out
            </span>
          </div>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default DropDown;

```

---

### <a id="📄-components-layout-footer-tsx"></a>📄 `components/Layout/Footer.tsx`

**File Info:**
- **Size**: 1.5 KB
- **Extension**: `.tsx`
- **Language**: `typescript`
- **Location**: `components/Layout/Footer.tsx`
- **Relative Path**: `components/Layout`
- **Created**: 2025-11-12 05:58:33 (Asia/Katmandu / GMT+06:45)
- **Modified**: 2025-11-28 10:08:42 (Asia/Katmandu / GMT+06:45)
- **MD5**: `5c4c8a4e7779646ce0d8103210cf4ed6`
- **SHA256**: `2da753c96dd74a1f7f480a7ad71097612c1503fb69839285da8727ed7641ee4f`
- **Encoding**: ASCII

**File code content:**

```typescript
'use client'
import { styles } from "@/utils/styles";
import Link from "next/link";
import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="mt-8">
      <div className="w-full mb-5 flex justify-between items-center">
        <div>
          <Link href={"/"}>
            <h1 className="font-Inter text-3xl cursor-pointer">
              <span className="text-[#64ff4c]">Bec</span>odefy
            </h1>
          </Link>
        </div>
        <div>
          <ul className="flex items-center flex-wrap">
            <li>
              <Link
                href="/"
                className={`${styles.label} hover:text-[#64ff4b] duration-200 transition px-4`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/marketplace"
                className={`${styles.label} hover:text-[#64ff4b] duration-200 transition px-4`}
              >
                MarketPlace
              </Link>
            </li>
            <li>
              <Link
                href="/contact-us"
                className={`${styles.label} hover:text-[#64ff4b] duration-200 transition px-4`}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <p className={`${styles.paragraph} text-center`}>
        Copyright © 2025 Becodefy . All Rights Reserved
      </p>
      <br />
      <br />
    </div>
  );
};

export default Footer;

```

---

### <a id="📄-components-layout-header-tsx"></a>📄 `components/Layout/Header.tsx`

**File Info:**
- **Size**: 4.07 KB
- **Extension**: `.tsx`
- **Language**: `typescript`
- **Location**: `components/Layout/Header.tsx`
- **Relative Path**: `components/Layout`
- **Created**: 2025-11-12 05:58:33 (Asia/Katmandu / GMT+06:45)
- **Modified**: 2025-11-12 16:39:22 (Asia/Katmandu / GMT+06:45)
- **MD5**: `b3ec11cec03014bccdb0c8c61aa58091`
- **SHA256**: `868cda01e6507e86e0e72a563f41f88fd3b0d75e3b3ec6d4187ff7d8d4bbf155`
- **Encoding**: ASCII

**File code content:**

```typescript
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Navigation from "./Navigation";
import { AiOutlineSearch } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { FaBars } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { UserProfile } from "@clerk/nextjs";
import { User } from "@clerk/nextjs/server";
import DropDown from "./DropDown";

type Props = {
  activeItem: number;
  user: User | undefined;
  isSellerExist: boolean | undefined;
};

const Header = ({ user, activeItem,isSellerExist }: Props) => {
  const [active, setactive] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeProfile, setActiveProfile] = useState(false);

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setactive(true);
      } else {
        setactive(false);
      }
    });
  }

  const handleClose = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.id === "screen") {
      setOpen(!open);
    }
  };

  const handleProfile = () => {
    setActiveProfile(!activeProfile);
  };

  return (
    <div
      className={`w-full p-5 border-b min-h-[60px] border-b-[#ffffff32] transition-opacity ${
        active && "fixed top-0 left-0 bg-[#000] z-[9999]"
      }`}
    >
      <div className="hidden md:w-[90%] mx-auto md:flex items-center justify-between">
        <div>
          <Link href={"/"}>
            <h1 className="font-Inter text-3xl cursor-pointer">
              <span className="text-[#64ff4c]">Bec</span>odefy
            </h1>
          </Link>
        </div>
        <div className="flex">
          <Navigation activeItem={activeItem} />
        </div>
        <div className="flex items-center ml-10">
          <AiOutlineSearch className="text-[25px] mr-5 cursor-pointer" />
          {user ? (
            <div>
              <DropDown
                user={user}
                setOpen={setOpen}
                handleProfile={handleProfile}
                isSellerExist={isSellerExist}
              />
            </div>
          ) : (
            <Link href="/sign-in">
              <CgProfile className="text-[25px] cursor-pointer" />
            </Link>
          )}
        </div>
      </div>
      {activeProfile && (
        <div className="w-full fixed h-screen overflow-hidden flex justify-center items-center top-0 left-0 bg-[#00000068] z-[9999]">
          <div className="w-min relative h-[90vh] overflow-y-scroll bg-white rounded-xl shadow">
            <UserProfile />
            <RxCross1
              className="absolute text-black text-2xl top-10 right-10 cursor-pointer"
              onClick={handleProfile}
            />
          </div>
        </div>
      )}

      {/* for mobile screen */}
      <div className="w-full md:hidden flex items-center justify-between">
        <div>
          <Link href="/">
            <h1>
              <Link href={"/"}>
                <h1 className="font-Inter text-3xl cursor-pointer">
                  <span className="text-[#64ff4c]">Bec</span>odefy
                </h1>
              </Link>
            </h1>
          </Link>
        </div>
        <div>
          <FaBars
            className="text-2xl cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        </div>

        {open && (
          <div
            className="fixed md:hidden w-full h-screen top-0 left-0 z-[99999] bg-[unset]"
            onClick={handleClose}
            id="screen"
          >
            <div className="fixed bg-black h-screen top-0 right-0 w-[60%] z-[9999]">
              <div className="mt-20 p-5">
                <Navigation activeItem={activeItem} />
                {user && (
                  <DropDown
                    user={user}
                    setOpen={setOpen}
                    handleProfile={handleProfile}
                    isSellerExist={isSellerExist}
                  />
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;

```

---

### <a id="📄-components-layout-navigation-tsx"></a>📄 `components/Layout/Navigation.tsx`

**File Info:**
- **Size**: 882 B
- **Extension**: `.tsx`
- **Language**: `typescript`
- **Location**: `components/Layout/Navigation.tsx`
- **Relative Path**: `components/Layout`
- **Created**: 2025-11-12 05:58:33 (Asia/Katmandu / GMT+06:45)
- **Modified**: 2024-01-24 15:41:52 (Asia/Katmandu / GMT+06:45)
- **MD5**: `3983815119d8ccc5184fd38fdbb0cd09`
- **SHA256**: `bedba185661a1f2d28aca25064a1286c58462409be3baf2796a70f53ed865090`
- **Encoding**: ASCII

**File code content:**

```typescript
import Link from "next/link";
import React from "react";

type Props = {
  activeItem: number;
};

const navItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About Us",
    href: "/about",
  },
  {
    title: "Marketplace",
    href: "/marketplace",
  },
  {
    title: "Contact Us",
    href: "/contact",
  },
  {
    title: "Policy",
    href: "/policy",
  },
];

const Navigation = ({ activeItem }: Props) => {
  return (
    <div className="block md:flex">
      {navItems.map((item, index) => (
        <Link key={item.title} href={item.href}>
          <h5
            className={`inline-block md:px-4 xl:px-8 py-5 md:py-0 text-[18px] font-[500] font-Inter ${
              activeItem === index && "text-[#6dff4b]"
            }`}
          >
            {item.title}
          </h5>
        </Link>
      ))}
    </div>
  );
};

export default Navigation;

```

---

### <a id="📄-components-prompts-promptdetails-checkoutform-tsx"></a>📄 `components/Prompts/PromptDetails/CheckoutForm.tsx`

**File Info:**
- **Size**: 1.81 KB
- **Extension**: `.tsx`
- **Language**: `typescript`
- **Location**: `components/Prompts/PromptDetails/CheckoutForm.tsx`
- **Relative Path**: `components/Prompts/PromptDetails`
- **Created**: 2025-11-12 05:58:33 (Asia/Katmandu / GMT+06:45)
- **Modified**: 2024-01-24 15:41:52 (Asia/Katmandu / GMT+06:45)
- **MD5**: `f19932cd91df5183f775b18f90628298`
- **SHA256**: `de67756272553d3573f9a59346c6b4775c802ced65a376a9bab66d9927280dca`
- **Encoding**: ASCII

**File code content:**

```typescript
import { newOrder } from "@/actions/orders/createOrder";
import { getUser } from "@/actions/user/getUser";
import { styles } from "@/utils/styles";
import {
  LinkAuthenticationElement,
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import React, { useState } from "react";

const CheckoutForm = ({
  setOpen,
  open,
  promptData,
}: {
  setOpen: (open: boolean) => void;
  open: boolean;
  promptData: any;
}) => {
  const [message, setMessage] = useState<any>("");
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const userData = await getUser();
    if (!stripe || !elements) {
      return;
    }
    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      redirect: "if_required",
    });
    if (error) {
      setMessage(error.message);
    } else if (paymentIntent && paymentIntent.status === "succeeded") {
      await newOrder({
        userId: userData?.user?.id!,
        promptId: promptData.id,
        payment_id: paymentIntent.id,
        payment_method: paymentIntent.id!,
      }).then((res) => {
        setOpen(!open);
        window.location.reload();
      });
    }
  };

  return (
    <form id="payment-form" onSubmit={handleSubmit}>
      <LinkAuthenticationElement id="link-authentication-element" />
      <PaymentElement id="payment-element" />
      <button
        id="submit"
        className={`${styles.button} !bg-[crimson] mt-4 !p-2 !w-full`}
      >
        <span>Pay Now ${promptData?.price}</span>
      </button>
      {/* Show amy error or success message */}
      {message && (
        <div id="payment-message" className="text-[red] font-Poppins pt-2">
          {message}
        </div>
      )}
    </form>
  );
};

export default CheckoutForm;

```

---

### <a id="📄-components-prompts-promptdetails-promptdetails-tsx"></a>📄 `components/Prompts/PromptDetails/PromptDetails.tsx`

**File Info:**
- **Size**: 2.05 KB
- **Extension**: `.tsx`
- **Language**: `typescript`
- **Location**: `components/Prompts/PromptDetails/PromptDetails.tsx`
- **Relative Path**: `components/Prompts/PromptDetails`
- **Created**: 2025-11-12 05:58:33 (Asia/Katmandu / GMT+06:45)
- **Modified**: 2024-01-24 15:41:52 (Asia/Katmandu / GMT+06:45)
- **MD5**: `18a2c3dfb757db8bb100a3a1a6e033f0`
- **SHA256**: `4878f12aa61e53afd781833c6ae848b7adb4b070cb4385d7ef435419433bba9d`
- **Encoding**: ASCII

**File code content:**

```typescript
import SellersBanner from "@/components/Shop/SellersBanner";
import { styles } from "@/utils/styles";
import PromptDetailsCard from "./PromptDetailsCard";
import PromptInformation from "./PromptInformation";
import PromptCard from "../PromptCard";
import { useEffect, useState } from "react";
import { propmt } from "@/@types/promptTypes";
import PromptCardLoader from "@/utils/PromptCardLoader";

const PromptDetails = ({
  promptData,
  stripePromise,
  clientSecret,
}: {
  promptData: propmt | undefined;
  stripePromise: any;
  clientSecret: string;
}) => {
  const [prompts, setPrompts] = useState<propmt[]>();
  const [loading, setLoading] = useState(true);

  const fetchPromptData = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `/api/get-related-prompts?promptCategory=${promptData?.category}`
      );
      const data = await response.json();
      setPrompts(data);
    } catch (error) {
      console.error("Failed to fetch prompts:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPromptData();
  }, []);

  return (
    <div>
      <PromptDetailsCard
        promptData={promptData}
        clientSecret={clientSecret}
        stripePromise={stripePromise}
      />
      <br />
      <br />
      <PromptInformation promptData={promptData} />
      <br />
      <h1 className={`${styles.heading} px-2 pb-2`}>Related Prompts</h1>
      <div className="flex flex-wrap">
        {loading ? (
          [...new Array(4)].map((i) => (
            <>
              <PromptCardLoader />
            </>
          ))
        ) : (
          <>
            {prompts &&
              prompts.map((item: any) => (
                <PromptCard prompt={item} key={item.id} />
              ))}
          </>
        )}
      </div>
      {prompts?.length === 0 && (
        <p className={`${styles.label} text-center block my-5`}>
          No prompt found with this category!
        </p>
      )}
      <br />
      <br />
      <SellersBanner />
      <br />
    </div>
  );
};

export default PromptDetails;

```

---

### <a id="📄-components-prompts-promptdetails-promptdetailscard-tsx"></a>📄 `components/Prompts/PromptDetails/PromptDetailsCard.tsx`

**File Info:**
- **Size**: 5.1 KB
- **Extension**: `.tsx`
- **Language**: `typescript`
- **Location**: `components/Prompts/PromptDetails/PromptDetailsCard.tsx`
- **Relative Path**: `components/Prompts/PromptDetails`
- **Created**: 2025-11-12 05:58:33 (Asia/Katmandu / GMT+06:45)
- **Modified**: 2024-01-24 15:41:52 (Asia/Katmandu / GMT+06:45)
- **MD5**: `a8354f3627cd83428021c06b4fd2fb15`
- **SHA256**: `b4d1598c2af29e370d89359749c8571cb12d4579af0607989781b2abb31b26e2`
- **Encoding**: ASCII

**File code content:**

```typescript
"use client";
import Ratings from "@/utils/Ratings";
import { styles } from "@/utils/styles";
import { Button, Chip } from "@nextui-org/react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { IoCloseOutline } from "react-icons/io5";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

const PromptDetailsCard = ({
  promptData,
  clientSecret,
  stripePromise,
}: {
  promptData: any;
  clientSecret: string;
  stripePromise: any;
}) => {
  const [activeImage, setactiveImage] = useState(promptData?.images[0]?.url);
  const [open, setOpen] = useState(false);
  const tags = promptData?.tags;

  const tagsList = tags.split(",").map((tag: string) => tag.trim());


  const percentageDifference = ((promptData?.estimatedPrice - promptData?.price) / promptData?.estimatedPrice) * 100;

  const promptDiscount = percentageDifference?.toFixed(0);
  

  return (
    <div className="bg-[#1211023] p-3 w-full min-h-[50vh] shadow rounded-xl mt-8">
      <div className="w-full flex flex-wrap">
        <div className="md:w-[48%] w-full m-2">
          <div>
            <Image
              src={activeImage}
              width={500}
              height={500}
              className="rounded-xl w-full object-contain"
              alt=""
            />
          </div>
          <br />
          <div className="w-full flex">
            <Marquee>
              {promptData.images.map((image: any) => (
                <Image
                  src={image.url}
                  key={image.url}
                  onClick={() => setactiveImage(image.url)}
                  width={250}
                  height={250}
                  alt=""
                  className="m-2 cursor-pointer rounded-md"
                />
              ))}
            </Marquee>
          </div>
        </div>
        <div className="md:w-[48%] w-full m-2 p-2">
          <h1 className={`${styles.label} !text-2xl font-Monserrat`}>
            {promptData?.name}
          </h1>
          <br />
          <Chip className="bg-[#1f2d2b] rounded-md p-3 h-[35px]">
            <span
              className={`${styles.label} !text-2xl !text-[#64ff4b] font-Monserrat`}
            >
              {promptDiscount}%
            </span>
          </Chip>
          <span
            className={`${styles.label} !text-2xl pl-2 text-white font-Monserat`}
          >
            Off
          </span>
          <div className="w-full flex items-center my-2 justify-between">
            <div>
              <span
                className={`${styles.label} inline-block pt-4 !text-xl line-through`}
              >
                ${promptData?.estimatedPrice}
              </span>
              <span
                className={`${styles.label} inline-block pt-4 !text-xl text-white pl-3`}
              >
                ${promptData?.price}
              </span>
            </div>
            <Ratings rating={promptData?.rating} />
          </div>
          <br />
          <p className={`${styles.paragraph}`}>
            {promptData?.shortDescription}
          </p>
          <br />
          <div className="w-full">
            <span
              className={`${styles.label} !text-2xl pl-2 text-white font-Monserrat`}
            >
              Tags
            </span>
            <br />
            <div className="w-full flex items-center flex-wrap my-2">
              {tagsList.map((tag: string) => (
                <Chip
                  className="bg-[#1e1c2f] rounded-full h-[35px] mr-2 my-2 2xl:mr-4 cursor-pointer"
                  key={tag}
                >
                  <span
                    className={`${styles.label} !text-xl text-white font-Monserrat`}
                  >
                    {tag}
                  </span>
                </Chip>
              ))}
            </div>
            <br />
            <Button
              onClick={() => setOpen(!open)}
              radius="full"
              className={`${styles.button} h-[45px] font-[400] bg-[#64ff4b] !text-indigo-900 md:ml-2`}
            >
              Buy now ${promptData?.price}
            </Button>
          </div>
        </div>
      </div>
      {open && (
        <div className="w-full h-screen bg-[#00000036] fixed top-0 left-0 z-50 flex items-center justify-center">
          <div className="w-[500px] min-h-[500px] bg-white rounded-xl shadow p-3">
            <div className="w-full flex justify-end">
              <IoCloseOutline
                size={40}
                className="text-black cursor-pointer"
                onClick={() => setOpen(!open)}
              />
            </div>
            <div className="w-full">
              {stripePromise && clientSecret && (
                <Elements stripe={stripePromise} options={{ clientSecret }}>
                  <CheckoutForm
                    setOpen={setOpen}
                    open={open}
                    promptData={promptData}
                  />
                </Elements>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PromptDetailsCard;

```

---

### <a id="📄-components-prompts-promptdetails-promptinformation-tsx"></a>📄 `components/Prompts/PromptDetails/PromptInformation.tsx`

**File Info:**
- **Size**: 2.65 KB
- **Extension**: `.tsx`
- **Language**: `typescript`
- **Location**: `components/Prompts/PromptDetails/PromptInformation.tsx`
- **Relative Path**: `components/Prompts/PromptDetails`
- **Created**: 2025-11-12 05:58:33 (Asia/Katmandu / GMT+06:45)
- **Modified**: 2024-01-24 15:41:52 (Asia/Katmandu / GMT+06:45)
- **MD5**: `a76d935e31d19b88056482b0a63d38b0`
- **SHA256**: `556c1df549664ff2edc8841679c5588fea737ba5946a5d4e628799930f03f813`
- **Encoding**: ASCII

**File code content:**

```typescript
"use client";
import { styles } from "@/utils/styles";
import { Avatar, Divider, Tab, Tabs } from "@nextui-org/react";
import React from "react";
import ReviewCard from "./ReviewCard";

type Props = {
  promptData: any;
};

let tabs = [
  {
    title: "Description",
  },
  {
    title: "Reviews",
  },
  {
    title: "Author",
  },
];

const PromptInformation = ({ promptData }: Props) => {
  return (
    <div>
      <div className="flex w-full flex-col bg-slate-900 p-3 rounded-md">
        <Tabs items={tabs} color="primary" variant="light">
          {(item) => (
            <Tab key={item.title} title={item.title} className="text-[18px]">
              <Divider className="bg-[#ffffff18]" />
              <div className="py-2">
                {item.title === "Description" && (
                  <p
                    className={`${styles.paragraph} whitespace-pre-line w-full overflow-hidden`}
                  >
                    {promptData.description}
                  </p>
                )}
                {item.title === "Author" && (
                  <>
                    <div className="flex w-full my-2">
                      <Avatar size="lg" src={promptData?.shop?.avatar} />
                      <div>
                        <span
                          className={`${styles.label} pl-3 !text-xl text-white`}
                        >
                          @{promptData?.shop?.name}
                        </span>
                        <br />
                        <span className={`${styles.label} pl-3`}>
                          Prompts: {promptData?.shop?.allProducts}
                        </span>
                        <br />
                        <span className={`${styles.label} pl-3`}>
                          Reviews: {promptData?.shop?.ratings} / 5
                        </span>
                      </div>
                    </div>
                  </>
                )}

                {item.title === "Reviews" && (
                  <div className="">
                    {promptData &&
                      promptData.reviews.map((item:any, index:number) => (
                        <ReviewCard item={item} key={index} />
                      ))}

                      {
                        promptData?.reviews?.length === 0 && (
                          <h5 className={`${styles.paragraph} text-center py-5`}>
                            No Reviews have to show!
                          </h5>
                        )
                      }
                  </div>
                )}
              </div>
            </Tab>
          )}
        </Tabs>
      </div>
    </div>
  );
};

export default PromptInformation;

```

---

### <a id="📄-components-prompts-promptdetails-reviewcard-tsx"></a>📄 `components/Prompts/PromptDetails/ReviewCard.tsx`

**File Info:**
- **Size**: 898 B
- **Extension**: `.tsx`
- **Language**: `typescript`
- **Location**: `components/Prompts/PromptDetails/ReviewCard.tsx`
- **Relative Path**: `components/Prompts/PromptDetails`
- **Created**: 2025-11-12 05:58:33 (Asia/Katmandu / GMT+06:45)
- **Modified**: 2024-01-24 15:41:52 (Asia/Katmandu / GMT+06:45)
- **MD5**: `90be8e9e38900360f6a0a26c27455573`
- **SHA256**: `6578f4aa5b68aea486f723925d68a4d1f16c69ea0784652c5d8dfeea8ba4104d`
- **Encoding**: ASCII

**File code content:**

```typescript
import Ratings from "@/utils/Ratings";
import { styles } from "@/utils/styles";
import { Avatar } from "@nextui-org/react";
import { format } from "timeago.js";

const ReviewCard = ({ item }: { item: any }) => {
  return (
    <div className="flex my-2">
      <div>
        <Avatar size="lg" src={item?.user?.profileImageUrl} />
      </div>
      <div className="pl-3">
        <div className="flex items-center">
          <span className={`${styles.label} !text-xl text-white`}>
            {item?.user?.firstName + " " + item?.user.lastName!}
          </span>
          <span className={`${styles.label} pl-3`}>
            {format(item?.createdAt)}
          </span>
          <Ratings rating={item?.rating} />
        </div>
        <p className={`${styles.paragraph} whitespace-pre-line`}>
          {item?.comment}
        </p>
      </div>
    </div>
  );
};

export default ReviewCard;

```

---

### <a id="📄-components-prompts-allprompts-tsx"></a>📄 `components/Prompts/AllPrompts.tsx`

**File Info:**
- **Size**: 2.67 KB
- **Extension**: `.tsx`
- **Language**: `typescript`
- **Location**: `components/Prompts/AllPrompts.tsx`
- **Relative Path**: `components/Prompts`
- **Created**: 2025-11-12 05:58:33 (Asia/Katmandu / GMT+06:45)
- **Modified**: 2024-01-24 15:41:52 (Asia/Katmandu / GMT+06:45)
- **MD5**: `f38d61bcba8fa486302d22739d77d6ed`
- **SHA256**: `cd5218be74d37b91514fd921e627f2c3d7cb2a730ee8af6cdac3c63deaa0e0ba`
- **Encoding**: ASCII

**File code content:**

```typescript
"use client";
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";

type PromptsDataTypes = {
  id: string;
  name: string;
  price: string;
  rating: number;
  purchased?: number;
  orders?: any[];
  status: string;
};

const AllPrompts = ({
  promptsData,
  isDashboard,
}: {
  promptsData: any;
  isDashboard?: boolean;
}) => {
  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    { field: "name", headerName: "Prompts Title", flex: 0.8 },
    { field: "price", headerName: "Prompts Price", flex: 0.5 },
    { field: "rating", headerName: "Ratings", flex: 0.5 },
    { field: "purchased", headerName: "Purchased", flex: 0.5 },
    {
      field: "status",
      headerName: "Status",
      flex: 0.5,
    },
  ];

  const rows: Array<PromptsDataTypes> = [];

  promptsData?.forEach((item: PromptsDataTypes) => {
    rows.push({
      id: item.id,
      name: item.name,
      price: "$US" + item.price,
      rating: item.rating,
      purchased: item.orders?.length,
      status: item.status,
    });
  });

  return (
    <>
      <Box m="20px">
        <Box
          m="40px 0 0 0"
          height={isDashboard ? "35vh" : "90vh"}
          sx={{
            "& .MuiDataGrid-root": {
              border: "none",
              outline: "none",
            },
            "& .css-pqjvzy-MuiSvgIcon-root-MuiSelect-icon": {
              color: "#fff",
            },
            "& .MuiDataGrid-sortIcon": {
              color: "#fff",
            },
            "& .MuiDataGrid-row": {
              color: "#fff",
              borderBottom: "1px solid #ffffff30!important",
            },
            "& .MuiTablePagination-root": {
              color: "#fff",
            },
            "& .MuiDataGrid-cell": {
              borderBottom: "none!important",
            },
            "& .name-column--cell": {
              color: "#fff",
            },
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: "#3e4396",
              borderBottom: "none",
              color: "#fff",
            },
            "& .MuiDataGrid-virtualScroller": {
              backgroundColor: "#1F2A40",
            },
            "& .MuiDataGrid-footerContainer": {
              color: "dark",
              borderTop: "none",
              backgroundColor: "#3e4396",
            },
            "& .MuiCheckbox-root": {
              color: `#b7ebde !important`,
            },
            "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
              color: `#fff !important`,
            },
          }}
        >
          <DataGrid checkboxSelection rows={rows} columns={columns} />
        </Box>
      </Box>
    </>
  );
};

export default AllPrompts;

```

---

### <a id="📄-components-prompts-filterprompt-tsx"></a>📄 `components/Prompts/FilterPrompt.tsx`

**File Info:**
- **Size**: 1.1 KB
- **Extension**: `.tsx`
- **Language**: `typescript`
- **Location**: `components/Prompts/FilterPrompt.tsx`
- **Relative Path**: `components/Prompts`
- **Created**: 2025-11-12 05:58:33 (Asia/Katmandu / GMT+06:45)
- **Modified**: 2024-01-24 15:41:52 (Asia/Katmandu / GMT+06:45)
- **MD5**: `7541e4e44367b66957d64299b70aadf6`
- **SHA256**: `20f35b53485c68a16bb1d1fbe8715dcbdef9319e3a583d83ecafde5e726c46ea`
- **Encoding**: ASCII

**File code content:**

```typescript
"use client";
import { styles } from "@/utils/styles";
import { Button } from "@nextui-org/react";
import { useState } from "react";

const categories = ["All", "Chatgpt", "Midjourney", "Bard", "Dalle"];

type Props = {
  totalPrompts: any;
  setPrompts: (prompts: any) => void;
};

const FilterPrompt = ({ totalPrompts, setPrompts }: Props) => {
  const [selected, setSelected] = useState("All");

  const handleFilter = (e: any) => {
    setSelected(e);
    if (e === "All") {
      setPrompts(totalPrompts);
    } else {
      const data = totalPrompts?.filter((prompt: any) => prompt.category === e);
      setPrompts(data);
    }
  };

  return (
    <div className="w-full flex rounded shadow my-5">
      {categories.map((i, index) => (
        <Button
          className={`h-[32px] px-3 rounded-2xl mr-8 ${
            selected === i ? "bg-[#3ab05b]" : "bg-[#2251ac]"
          }`}
          key={index}
          onClick={(e) => handleFilter(i)}
        >
          <p className={`${styles.paragraph} text-white`}>{i}</p>
        </Button>
      ))}
      <br />
    </div>
  );
};

export default FilterPrompt;

```

---

### <a id="📄-components-prompts-promptcard-tsx"></a>📄 `components/Prompts/PromptCard.tsx`

**File Info:**
- **Size**: 2.69 KB
- **Extension**: `.tsx`
- **Language**: `typescript`
- **Location**: `components/Prompts/PromptCard.tsx`
- **Relative Path**: `components/Prompts`
- **Created**: 2025-11-12 05:58:33 (Asia/Katmandu / GMT+06:45)
- **Modified**: 2025-11-12 19:45:58 (Asia/Katmandu / GMT+06:45)
- **MD5**: `a822d0647e3778e7cc575c3a20a92ade`
- **SHA256**: `cef2993458b675de19677b2f0e9d66880d15ae66241c9260de32a66135670190`
- **Encoding**: ASCII

**File code content:**

```typescript
import Link from "next/link";
import Ratings from "@/utils/Ratings";
import { styles } from "@/utils/styles";
import { Avatar, Button, Card, Divider } from "@nextui-org/react";
import Image from "next/image";
import React, { useEffect, useState } from "react";

type Props = {
  prompt: any;
};

const PromptCard = ({ prompt }: Props) => {
  return (
    <Card
      radius="lg"
      className="w-full md:w-[31%] 2xl:w-[23%] max-h-[410px] p-4 bg-[#130f23] m-3"
    >
      <div className="relative">
        <Image
          src={prompt?.images[0]?.url}
          alt=""
          className="w-full !max-h-[200px] object-cover"
          width={300}
          height={300}
        />
        <div className="absolute bottom-2 left-2">
          <div className="w-max bg-black hover:bg-[#16252] duration-300 transition-opacity hover:text-black text-white p-[10px] items-center flex rounded-xl">
            {prompt?.category === "Chatgpt" ? (
              <Image
                src="https://pixner.net/aikeu/assets/images/category/chat.png"
                width={25}
                height={25}
                alt=""
              />
            ) : (
              <>
                {prompt?.category === "Dalle" ? (
                  "⛵"
                ) : (
                  <>
                    {prompt?.category === "Midjourney" ? (
                      "🎨"
                    ) : (
                      <>{prompt?.category === "Bard" ? "🐥" : null}</>
                    )}
                  </>
                )}
              </>
            )}
            <span className={`${styles.label} pl-2 text-white`}>
              {prompt?.category}
            </span>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-between py-2">
        <h3 className={`${styles.label} text-[18px] text-white`}>
          {prompt?.name}
        </h3>
        <p className={`${styles.paragraph}`}>${prompt?.price}</p>
      </div>
      <Divider className="bg-[#ffffff18] my-3" />
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center">
          <Avatar src={prompt?.shop?.avatar} />
          <span className={`${styles.label} pl-3`}>@{prompt?.shop?.name}</span>
        </div>
        <Ratings rating={prompt?.rating} />
      </div>
      <br />
      <Link href={`/prompt/${prompt.id}`} className="w-full">
        <div
          className={`${styles.button} !py-2 !px-3 text-center mb-3 w-full text-white bg-transparent border border-[#16c252] hover:bg-[#16c252] hover:text-black duration-300 transition-opacity font-Inter font-[600]`}
        >
          Get Prompts
        </div>
      </Link>
    </Card>
  );
};

export default PromptCard;

```

---

### <a id="📄-components-route-about-tsx"></a>📄 `components/Route/About.tsx`

**File Info:**
- **Size**: 1.42 KB
- **Extension**: `.tsx`
- **Language**: `typescript`
- **Location**: `components/Route/About.tsx`
- **Relative Path**: `components/Route`
- **Created**: 2025-11-12 05:58:33 (Asia/Katmandu / GMT+06:45)
- **Modified**: 2025-11-12 17:36:10 (Asia/Katmandu / GMT+06:45)
- **MD5**: `505a7fad871f849872ef0825076cfca3`
- **SHA256**: `e228c74b3111af57145699d2d9df3477a6a889a51b2e147346b8357b3ff91c92`
- **Encoding**: ASCII

**File code content:**

```typescript
"use client";
import { styles } from "@/utils/styles";
import { Button, Chip } from "@nextui-org/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {};

const About = (props: Props) => {
  const router = useRouter();

  return (
    <div className="w-full relative grid md:grid-cols-2 md:py-8">
      <div className="col-span-1 w-full md:w-[60%] md:mt-5 px-5 md:px-[unset]">
        <Chip className={`${styles.button} mb-[30px] h-[37px] bg-[#12211f]`}>
          AI Image
        </Chip>
        <h5 className={`${styles.heading} mb-5 !leading-[50px]`}>
          Crafting Tomorrow&apos;s Images With Artificial Intelligence
        </h5>
        <p className={`${styles.paragraph} pb-5`}>
          AI image generation tools have emerged as powerful resources in the
          realm of digital art and design. These cutting-edge tools leverage
          advanced.
        </p>
        <Button
          className={`${styles.button} bg-[#2551b0] font-[500] h-[45px]`}
          onClick={() => router.push("/marketplace")}
        >
          Visit Shop 
        </Button>
      </div>
      <div className="col-span-1 my-10 md:mt-[unset]">
        <Image
          src={"https://pixner.net/aikeu/assets/images/craft-thumb.png"}
          alt=""
          width={600}
          height={600}
          priority
        />
      </div>
    </div>
  );
};

export default About;

```

---

### <a id="📄-components-route-future-tsx"></a>📄 `components/Route/Future.tsx`

**File Info:**
- **Size**: 1.22 KB
- **Extension**: `.tsx`
- **Language**: `typescript`
- **Location**: `components/Route/Future.tsx`
- **Relative Path**: `components/Route`
- **Created**: 2025-11-12 05:58:33 (Asia/Katmandu / GMT+06:45)
- **Modified**: 2024-01-24 15:41:52 (Asia/Katmandu / GMT+06:45)
- **MD5**: `52e3398dd12a5ca2964fd747edaf9358`
- **SHA256**: `c31ca7ed88f0810d3a81db247f9421f6ec8f76112b3b490ffe641fdccf1963e6`
- **Encoding**: ASCII

**File code content:**

```typescript
'use client'
import { styles } from "@/utils/styles";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import React from "react";

type Props = {};

const Future = (props: Props) => {
  return (
    <div className="w-full relative p-4 md:p-[unset] grid md:grid-cols-2 py-8">
      <div className="col-span-1">
        <Image
          src={"https://pixner.net/aikeu/assets/images/tools-thumb.png"}
          width={800}
          height={500}
          alt=""
          className="md:w-[90%] md:ml-[-50px] 2xl:ml-[-90px]"
        />
      </div>
      <div className="col-span-1 w-full flex justify-center items-center">
        <div className="2xl:w-[60%]">
          <Button
            className={`${styles.button} mb-[30px] h-[37px] bg-[#12211f]`}
          >
            Future
          </Button>
          <h5 className={`${styles.heading} mb-5 !leading-[50px]`}>
            Unleashing The Glorious Future Of Ai generated Images
          </h5>
          <p className={`${styles.paragraph} pb-5`}>
            One of the most prominent techniques in AI image generation is the
            use of Generative Adversarial Networks
          </p>
        </div>
      </div>
    </div>
  );
};

export default Future;

```

---

### <a id="📄-components-route-hero-tsx"></a>📄 `components/Route/Hero.tsx`

**File Info:**
- **Size**: 2.85 KB
- **Extension**: `.tsx`
- **Language**: `typescript`
- **Location**: `components/Route/Hero.tsx`
- **Relative Path**: `components/Route`
- **Created**: 2025-11-12 05:58:33 (Asia/Katmandu / GMT+06:45)
- **Modified**: 2025-11-12 16:54:23 (Asia/Katmandu / GMT+06:45)
- **MD5**: `7c869bd5824ce01e1510a8ed7940acd3`
- **SHA256**: `110d520075eb8824e113d7ac413ccf77b4dce1cff1c6e60a1a70cc50dec51951`
- **Encoding**: ASCII

**File code content:**

```typescript
"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import line from "@/public/Assets/line.png";
import MarQuee from "react-fast-marquee";

type Props = {};

const rowOneImages = [
  {
    url: "https://pixner.net/aikeu/assets/images/banner/large-slider/one.png",
  },
  {
    url: "https://pixner.net/aikeu/assets/images/banner/large-slider/two.png",
  },
  {
    url: "https://pixner.net/aikeu/assets/images/banner/large-slider/three.png",
  },
  {
    url: "https://pixner.net/aikeu/assets/images/banner/large-slider/four.png",
  },
  {
    url: "https://pixner.net/aikeu/assets/images/banner/large-slider/five.png",
  },
];  

const rowTwoImages = [
  {
    url: "https://pixner.net/aikeu/assets/images/banner/small-slider/one.png",
  },
  {
    url: "https://pixner.net/aikeu/assets/images/banner/small-slider/two.png",
  },
  {
    url: "https://pixner.net/aikeu/assets/images/banner/small-slider/three.png",
  },
  {
    url: "https://pixner.net/aikeu/assets/images/banner/small-slider/four.png",
  },
  {
    url: "https://pixner.net/aikeu/assets/images/banner/small-slider/five.png",
  },
];

const Hero = (props: Props) => {
  const [mounted, setmounted] = useState(false);

  useEffect(() => {
    if (!mounted) {
      setmounted(true);
    }
  }, [mounted]);

  if (!mounted) {
    return null;
  }

  return (
    <div className="w-full md:min-h-screen flex items-center justify-center">
      <div>
        <h1 className="font-Monserrat text-4xl py-5 xl:text-7xl 2xl:text-8xl font-[700] text-center xl:leading-[80px] 2xl:leading-[100px] sm:mt-20">
          Make <span className="text-[#64FF4B]">Ai Image</span> <br /> With Your{" "}
          <br /> Imagination
        </h1>
        <div className="md:mt-5">
          <Image
            src={line}
            alt=""
            className="absolute hidden md:block"
            width={2000}
            height={2}
          />
        </div>
        <div className="w-[100vw] mb-5 md:mb-20 relative">
          <div className="rotate-[-4deg] mt-10 md:mt-[6.5rem]">
            <MarQuee>
              {rowOneImages.map((i, index) => (
                <Image
                  src={i.url}
                  key={index}
                  alt=""
                  className="md:m-4 w-[200px] m-2 md:w-[500px] rounded-[20px]"
                  width={500}
                  height={300}
                />
              ))}
            </MarQuee>
            <MarQuee>
              {rowTwoImages.map((i, index) => (
                <Image
                  src={i.url}
                  key={index}
                  alt=""
                  className="md:m-4 w-[200px] m-2 md:w-[500px] rounded-[20px]"
                  width={500}
                  height={300}
                />
              ))}
            </MarQuee>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

```

---

### <a id="📄-components-route-partners-tsx"></a>📄 `components/Route/Partners.tsx`

**File Info:**
- **Size**: 1.67 KB
- **Extension**: `.tsx`
- **Language**: `typescript`
- **Location**: `components/Route/Partners.tsx`
- **Relative Path**: `components/Route`
- **Created**: 2025-11-12 05:58:33 (Asia/Katmandu / GMT+06:45)
- **Modified**: 2024-01-24 15:41:52 (Asia/Katmandu / GMT+06:45)
- **MD5**: `290c80c9b984fd3ee308487aba4f2f69`
- **SHA256**: `efd71febcfddc07c2bbbc1ad2013526f27aae3fc0538f493466dc2699cb84b33`
- **Encoding**: ASCII

**File code content:**

```typescript
'use client'
import { styles } from "@/utils/styles";
import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

type Props = {};

const partners = [
  {
    url: "https://pixner.net/aikeu/assets/images/partner/one.png",
  },
  {
    url: "https://pixner.net/aikeu/assets/images/partner/two.png",
  },
  {
    url: "https://pixner.net/aikeu/assets/images/partner/three.png",
  },
  {
    url: "https://pixner.net/aikeu/assets/images/partner/four.png",
  },
  {
    url: "https://pixner.net/aikeu/assets/images/partner/five.png",
  },
  {
    url: "https://pixner.net/aikeu/assets/images/partner/one.png",
  },
  {
    url: "https://pixner.net/aikeu/assets/images/partner/two.png",
  },
  {
    url: "https://pixner.net/aikeu/assets/images/partner/three.png",
  },
  {
    url: "https://pixner.net/aikeu/assets/images/partner/four.png",
  },
  {
    url: "https://pixner.net/aikeu/assets/images/partner/five.png",
  },
];

const Partners = (props: Props) => {
  return (
    <div className="py-10">
      <h1 className={`${styles.heading} font-Monserrat text-center`}>
        Our Partner&apos;s
      </h1>
      <div className="w-full flex justify-center pt-3">
        <div className="w-[50px] h-[2px] bg-[#64ff4b]" />
      </div>
      <Marquee className="w-full my-10">
        {partners.map((i, index) => (
          <Image
            src={i.url}
            alt=""
            width={100}
            height={100}
            key={index}
            className="mx-14 grayscale-[100%] w-[120px] h-[120px] object-contain hover:grayscale-0 transition-opacity cursor-pointer"
          />
        ))}
      </Marquee>
    </div>
  );
};

export default Partners;

```

---

### <a id="📄-components-shop-bestsellers-tsx"></a>📄 `components/Shop/BestSellers.tsx`

**File Info:**
- **Size**: 1.38 KB
- **Extension**: `.tsx`
- **Language**: `typescript`
- **Location**: `components/Shop/BestSellers.tsx`
- **Relative Path**: `components/Shop`
- **Created**: 2025-11-12 05:58:33 (Asia/Katmandu / GMT+06:45)
- **Modified**: 2024-01-24 15:41:52 (Asia/Katmandu / GMT+06:45)
- **MD5**: `d248c7052d1c732916532fe99db04967`
- **SHA256**: `de9a9dbe50033d16f2f68a1d2781f640adbc7c03a71cfa9d43c6cd3b7d8169a4`
- **Encoding**: ASCII

**File code content:**

```typescript
import { styles } from "@/utils/styles";
import React, { useEffect, useState } from "react";
import SellerCard from "./SellerCard";

type ShopData = {
  id: string;
  name: string;
  description: string;
  shopProductsType: string;
  avatar: string;
  ratings: Number;
  totalSales: Number;
  allProducts: Number;
  createdAt: Date;
  updatedAt: Date;
  userId: string;
};

const BestSellers = () => {
  const [shopsData, setshopsData] = useState<ShopData[]>();
  const [loading, setloading] = useState(true);

  const fetchShopsData = async () => {
    try {
      const response = await fetch(`/api/get-top-sellers`);
      const data = await response.json();
      setshopsData(data);
      setloading(false);
    } catch (error) {
      console.log(error);
      setloading(false);
    }
  };

  useEffect(() => {
    fetchShopsData();
  }, []);

  return (
    <div className="mb-10 cursor-pointer">
      <h1 className={`${styles.heading} p-2 font-Monserrat mb-5`}>
        Top Sellers
      </h1>
      <div className="flex flex-wrap">
        {loading
          ? [...new Array(8)].map((i) => (
              <div key={i}>
                <SellerCard loading={loading} />
              </div>
            ))
          : shopsData?.map((item: any) => (
              <SellerCard item={item} key={item.id} loading={loading} />
            ))}
      </div>
    </div>
  );
};

export default BestSellers;

```

---

### <a id="📄-components-shop-sellercard-tsx"></a>📄 `components/Shop/SellerCard.tsx`

**File Info:**
- **Size**: 1.21 KB
- **Extension**: `.tsx`
- **Language**: `typescript`
- **Location**: `components/Shop/SellerCard.tsx`
- **Relative Path**: `components/Shop`
- **Created**: 2025-11-12 05:58:33 (Asia/Katmandu / GMT+06:45)
- **Modified**: 2024-01-24 15:41:52 (Asia/Katmandu / GMT+06:45)
- **MD5**: `5c8066c84567f09acb7a22f75c0501df`
- **SHA256**: `892c4fc090e6e8f9726917ee327806e3ed2e15b76a3308f8fec1574f0c949de1`
- **Encoding**: ASCII

**File code content:**

```typescript
import Ratings from "@/utils/Ratings";
import { styles } from "@/utils/styles";
import { Avatar, Card, Skeleton } from "@nextui-org/react";
import React from "react";

type Props = {
  item?: any;
  loading: boolean;
};

const SellerCard = ({ item, loading }: Props) => {
  return (
    <Card className="py-4 bg-[#100d21] m-3 w-full md:w-[31%] 2xl:w-[23%] flex flex-col items-center text-white border border-[#ffffff22]">
      {loading ? (
        <>
          <Skeleton className="w-[80px] h-[80px] rounded-full" />
          <br />
          <Skeleton className="w-[90%] rounded-xl h-[20px]" />
          <br />
          <Skeleton className="w-[90%] rounded-xl h-[20px]" />
        </>
      ) : (
        <>
          <Avatar src={item?.avatar} className="w-[80px] h-[80px]" />
          <span className={`${styles.label} py-2 text-xl`}>@{item?.name}</span>
          <div className="flex items-center">
            <span className={`${styles.label} pr-2`}>{item?.ratings}/5</span>
            <Ratings rating={item?.ratings} />
          </div>
          <span className={`${styles.label} py-2`}>
            Total Sales: {item?.allProducts}
          </span>
        </>
      )}
    </Card>
  );
};

export default SellerCard;

```

---

### <a id="📄-components-shop-sellersbanner-tsx"></a>📄 `components/Shop/SellersBanner.tsx`

**File Info:**
- **Size**: 900 B
- **Extension**: `.tsx`
- **Language**: `typescript`
- **Location**: `components/Shop/SellersBanner.tsx`
- **Relative Path**: `components/Shop`
- **Created**: 2025-11-12 05:58:33 (Asia/Katmandu / GMT+06:45)
- **Modified**: 2024-01-24 15:41:52 (Asia/Katmandu / GMT+06:45)
- **MD5**: `a5309a2b34d36f6be63d8b62c53c8448`
- **SHA256**: `a86768a5ea4df55ad49432a51f7dbde9d523b4e8c47aab61709a95e1aba4a66a`
- **Encoding**: ASCII

**File code content:**

```typescript
"use client";
import { styles } from "@/utils/styles";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {};

const SellersBanner = (props: Props) => {
  const router = useRouter();

  return (
    <div className="w-full 2xl:w-[80%] 2xl:m-auto h-[30vh] flex items-center justify-center sellers-banner rounded-xl md:m-2">
      <div className="text-center">
        <h1 className={`${styles.heading} !text-indigo-950 font-Monserrat`}>
          Start to selling with us
        </h1>
        <br />
        <br />
        <Button
          className="mb-3 p-6 rounded-md text-xl bg-black text-white font-Inter"
          onClick={() => router.push("/create-shop")}
        >
          <span>Get Started</span>
        </Button>
      </div>
    </div>
  );
};

export default SellersBanner;

```

---

### <a id="📄-components-shop-shopallorders-tsx"></a>📄 `components/Shop/ShopAllOrders.tsx`

**File Info:**
- **Size**: 3.25 KB
- **Extension**: `.tsx`
- **Language**: `typescript`
- **Location**: `components/Shop/ShopAllOrders.tsx`
- **Relative Path**: `components/Shop`
- **Created**: 2025-11-12 05:58:33 (Asia/Katmandu / GMT+06:45)
- **Modified**: 2024-01-24 15:41:52 (Asia/Katmandu / GMT+06:45)
- **MD5**: `6a92f06e770b19463ffd59a4c5cbf6e1`
- **SHA256**: `bd0f5aefdb19651e36a53c5de00e959c94ad8031bc8714441ac688650884cc2d`
- **Encoding**: ASCII

**File code content:**

```typescript
"use client";
import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { AiOutlineMail } from "react-icons/ai";
import { format } from "timeago.js";

const ShopAllOrders = ({ isDashboard,ordersData }: { isDashboard: boolean,ordersData:any}) => {
  const columns = [
    { field: "id", headerName: "ID", flex: 0.3 },
    { field: "name", headerName: "Name", flex: isDashboard ? 0.6 : 0.5 },
    ...(isDashboard
      ? []
      : [
          { field: "email", headerName: "Email", flex: 1 },
          { field: "title", headerName: "Prompt Title", flex: 1 },
        ]),
    { field: "price", headerName: "Price", flex: 0.5 },
    ...(isDashboard
      ? [{ field: "created_at", headerName: "Created At", flex: 0.5 }]
      : [
          {
            field: " ",
            headerName: "Email",
            flex: 0.2,
            renderCell: (params: any) => {
              return (
                <a href={`mailto:${params.row.email}`}>
                  <AiOutlineMail
                    className="dark:text-white text-black"
                    size={20}
                  />
                </a>
              );
            },
          },
        ]),
  ];

  const rows: any = [];

  ordersData && ordersData.forEach((order:any) => {
    rows.push({
        id: order.id,
        name: order?.user?.firstName + " " + order?.user?.lastName,
        email: order?.user?.emailAddresses[0]?.emailAddress,
        title: order?.prompt?.name,
        price: "US $" + order?.prompt.price,
        created_at: format(order?.createdAt),
    })
  })

  return (
    <Box m={`${!isDashboard && "20px"}`}>
      <Box
        m={`${!isDashboard && "40px 0 0 0"}`}
        height={isDashboard ? "38vh" : "90vh"}
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
            outline: "none",
          },
          "& .css-pqjvzy-MuiSvgIcon-root-MuiSelect-icon": {
            color: "#fff",
          },
          "& .MuiDataGrid-sortIcon": {
            color: "#fff",
          },
          "& .MuiDataGrid-row": {
            color: "#fff",
            borderBottom: "1px solid #ffffff30!important",
          },
          "& .MuiTablePagination-root": {
            color: "#fff",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none!important",
          },
          "& .name-column--cell": {
            color: "#fff",
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: "#3e4396",
            borderBottom: "none",
            color: "#fff",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: "#1F2A40",
          },
          "& .MuiDataGrid-footerContainer": {
            color: "dark",
            borderTop: "none",
            backgroundColor: "#3e4396",
          },
          "& .MuiCheckbox-root": {
            color: `#b7ebde !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `#fff !important`,
          },
        }}
      >
        <DataGrid
          checkboxSelection={isDashboard ? false : true}
          rows={rows}
          columns={columns}
          slots={isDashboard ? {} : { toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default ShopAllOrders;

```

---

### <a id="📄-components-shop-shopbanner-tsx"></a>📄 `components/Shop/ShopBanner.tsx`

**File Info:**
- **Size**: 944 B
- **Extension**: `.tsx`
- **Language**: `typescript`
- **Location**: `components/Shop/ShopBanner.tsx`
- **Relative Path**: `components/Shop`
- **Created**: 2025-11-12 05:58:33 (Asia/Katmandu / GMT+06:45)
- **Modified**: 2024-01-24 15:41:52 (Asia/Katmandu / GMT+06:45)
- **MD5**: `5f3d4cd73d06292376b3d50f61edb72a`
- **SHA256**: `f99497d0cca4c056f3ea2b368aa9014e1a03f779384e75d15b53b78e03cffdd8`
- **Encoding**: ASCII

**File code content:**

```typescript
import { styles } from "@/utils/styles";
import Image from "next/image";
import React from "react";

const ShopBanner = ({ title }: { title: string }) => {
  return (
    <div className="w-full h-full flex items-center justify-center relative">
      <div>
        <Image
          src={
            "https://pixner.net/aikeu/assets/images/banner/cmn-thumb-left.png"
          }
          width={180}
          height={180}
          alt=""
          className="absolute top-1 left-10"
        />
      </div>
      <h4
        className={`${styles.heading} font-Monserrat xl:text-6xl 2xl:text-7xl`}
      >
        {title}
      </h4>
      <div>
        <Image
          src={
            "https://pixner.net/aikeu/assets/images/banner/cmn-thumb-right.png"
          }
          width={180}
          height={180}
          alt=""
          className="absolute right-10"
        />
      </div>
    </div>
  );
};

export default ShopBanner;

```

---

### <a id="📄-components-shop-shopsidebar-tsx"></a>📄 `components/Shop/ShopSidebar.tsx`

**File Info:**
- **Size**: 1.87 KB
- **Extension**: `.tsx`
- **Language**: `typescript`
- **Location**: `components/Shop/ShopSidebar.tsx`
- **Relative Path**: `components/Shop`
- **Created**: 2025-11-12 05:58:33 (Asia/Katmandu / GMT+06:45)
- **Modified**: 2024-01-24 15:41:52 (Asia/Katmandu / GMT+06:45)
- **MD5**: `ee84c2d32b4bab2a96e31c7c99616d64`
- **SHA256**: `95c0880553dcbbdbca87f84fac80ed1df33f1c9aa4a9ea1064f682fce62dc575`
- **Encoding**: ASCII

**File code content:**

```typescript
import React from "react";
import { GoHome, GoArrowSwitch } from "react-icons/go";
import { BsWallet2 } from "react-icons/bs";
import { LiaFileInvoiceDollarSolid } from "react-icons/lia";
import { TbMoneybag } from "react-icons/tb";
import { BiMoneyWithdraw } from "react-icons/bi";
import { MdOutlineCreateNewFolder } from "react-icons/md";
import Link from "next/link";
import { styles } from "@/utils/styles";

type Props = {
  active: number;
};

const sideBarItems = [
  {
    icon: <GoHome />,
    title: "Dashboard",
    href: "/my-shop",
  },
  {
    icon: <MdOutlineCreateNewFolder />,
    title: "Upload Prompt",
    href: "/shop/create-prompt",
  },
  {
    icon: <BsWallet2 />,
    title: "Prompts",
    href: "/shop/prompts",
  },
  {
    icon: <TbMoneybag />,
    title: "Orders",
    href: "/shop/orders",
  },
  {
    icon: <LiaFileInvoiceDollarSolid />,
    title: "Invoices",
    href: "/shop/invoices",
  },
  {
    icon: <BiMoneyWithdraw />,
    title: "Withdraw Earnings",
    href: "/shop/withdraw",
  },
  {
    icon: <GoArrowSwitch />,
    title: "Switch to user",
    href: "/",
  },
];

const ShopSidebar = ({ active }: Props) => {
  return (
    <div>
      {sideBarItems.map((item, index) => (
        <div className="w-full mx-5 my-10" key={index}>
          <Link href={item.href}>
            <div className="flex items-center">
              <div
                className={`text-3xl ${
                  active !== index ? "!text-white" : "!text-[#858DFB]"
                }`}
              >
                {item.icon}
              </div>
              <span
                className={`${styles.label} ${
                  active !== index ? "!text-white" : "!text-[#858DFB]"
                } pl-4`}
              >
                {item.title}
              </span>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ShopSidebar;

```

---

### <a id="📄-components-shop-uploadprompt-tsx"></a>📄 `components/Shop/UploadPrompt.tsx`

**File Info:**
- **Size**: 10.85 KB
- **Extension**: `.tsx`
- **Language**: `typescript`
- **Location**: `components/Shop/UploadPrompt.tsx`
- **Relative Path**: `components/Shop`
- **Created**: 2025-11-12 05:58:33 (Asia/Katmandu / GMT+06:45)
- **Modified**: 2024-01-24 15:41:52 (Asia/Katmandu / GMT+06:45)
- **MD5**: `bf82d65d6fd08033f759fb567ded7e38`
- **SHA256**: `34347b5d22f1088ad28ac95e9de988464473f05b9a865d31c14189d92b029403`
- **Encoding**: ASCII

**File code content:**

```typescript
import { styles } from "@/utils/styles";
import { useAuth } from "@clerk/nextjs";
import {
  Button,
  Input,
  Select,
  SelectItem,
  Selection,
  Textarea,
} from "@nextui-org/react";
import { IoDocumentAttachOutline } from "react-icons/io5";
import Image from "next/image";
import React, { ChangeEvent, DragEvent, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { redirect } from "next/navigation";

type Props = {};

type PromptData = {
  name: string;
  shortDescription: string;
  description: string;
  images: string[];
  attachments: string[];
  estimatedPrice: string;
  price: string;
  tags: string;
};

const categorieItem = [
  {
    title: "Chatgpt",
  },
  {
    title: "Midjourney",
  },
  {
    title: "Bard",
  },
  {
    title: "Dalle",
  },
];

const UploadPrompt = (props: Props) => {
  const [promptData, setPromptData] = useState<PromptData>({
    name: "",
    shortDescription: "",
    description: "",
    images: [],
    attachments: [],
    estimatedPrice: "",
    price: "",
    tags: "",
  });
  const [dragging, setDragging] = useState<Boolean>(false);
  const { userId } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [category, setCategory] = useState<Selection>(new Set([]));

  const handleImageFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);

      files.forEach((file) => {
        const reader = new FileReader();
        reader.onload = () => {
          if (reader.readyState === 2) {
            setPromptData((prevData) => ({
              ...prevData,
              images: [...prevData.images, reader.result as string],
            }));
          }
        };
        reader.readAsDataURL(file);
      });
    }
  };

  const handleAttachmentFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);

      files.forEach((file) => {
        const reader = new FileReader();
        reader.onload = () => {
          if (reader.readyState === 2) {
            setPromptData((prevData) => ({
              ...prevData,
              attachments: [...prevData.attachments, reader.result as string],
            }));
          }
        };
        reader.readAsDataURL(file);
      });
    }
  };

  const handleDragOver = (e: DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = (e: DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    setDragging(false);
  };

  const handleImageDrop = (e: DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    setDragging(false);

    if (e.dataTransfer.files) {
      const files = Array.from(e.dataTransfer.files);

      files.forEach((file) => {
        const reader = new FileReader();
        reader.onload = () => {
          if (reader.readyState === 2) {
            setPromptData((prevData) => ({
              ...prevData,
              images: [...prevData.images, reader.result as string],
            }));
          }
        };
        reader.readAsDataURL(file);
      });
    }
  };

  const handleAttachmentDrop = (e: DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    setDragging(false);
    if (e.dataTransfer.files) {
      const files = Array.from(e.dataTransfer.files);

      files.forEach((file) => {
        const reader = new FileReader();
        reader.onload = () => {
          if (reader.readyState === 2) {
            setPromptData((prevData) => ({
              ...prevData,
              attachments: [...prevData.attachments, reader.result as string],
            }));
          }
        };
        reader.readAsDataURL(file);
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    const categoryString = Array.from(category).join(",");
    await axios
      .post("/api/upload-prompt", {
        ...promptData,
        category: categoryString,
        sellerId: userId,
      })
      .then((res) => {
        setIsLoading(false);
        toast.success("Prompt uploaded successfully");
        setPromptData({
          name: "",
          shortDescription: "",
          description: "",
          images: [],
          attachments: [],
          estimatedPrice: "",
          price: "",
          tags: "",
        });
        redirect("/shop/prompts");
      })
      .catch((error) => {
        setIsLoading(false);
        console.log(error);
        // toast.error(error.data.message);
      });
  };

  const handleSelectionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(new Set([e.target.value]));
  };

  return (
    <div>
      <h1 className={`${styles.heading} text-center py-5`}>
        Upload Your Prompt
      </h1>
      <br />
      <form className="w-[90%] m-auto" onSubmit={handleSubmit}>
        <Input
          type="text"
          label="Title"
          value={promptData.name}
          onChange={(e) =>
            setPromptData({ ...promptData, name: e.target.value })
          }
          variant="bordered"
          required
          placeholder="Enter your prompt title"
        />
        <br />
        <Input
          type="text"
          label="Short Description"
          value={promptData.shortDescription}
          onChange={(e) =>
            setPromptData({ ...promptData, shortDescription: e.target.value })
          }
          variant="bordered"
          required
          placeholder="Enter a short Description for your prompt *"
        />
        <br />
        <Textarea
          variant={"bordered"}
          value={promptData.description}
          onChange={(e) =>
            setPromptData((prevData) => ({
              ...prevData,
              description: e.target.value,
            }))
          }
          required
          size="lg"
          placeholder="Write one detailed description for your prompt *"
        />
        <br />
        <div className="md:flex md:w-full">
          <Input
            type="number"
            label="Propmt estimated price"
            variant="bordered"
            value={promptData.estimatedPrice}
            onChange={(e) =>
              setPromptData((prevData) => ({
                ...prevData,
                estimatedPrice: e.target.value,
              }))
            }
            placeholder="US$40"
            required
            className="mb-6 md:mb-0"
          />
          <Input
            type="number"
            label="Propmt price *"
            value={promptData.price}
            onChange={(e) =>
              setPromptData((prevData) => ({
                ...prevData,
                price: e.target.value,
              }))
            }
            variant="bordered"
            placeholder="US$29.99"
            className="md:ml-10"
            required
          />
        </div>
        <br />
        <div className="md:flex md:w-full">
          <Select
            label="Choose one category"
            variant="bordered"
            placeholder="Select one category"
            selectedKeys={category}
            className="max-w-full mb-5 md:mb-[0]"
            onChange={handleSelectionChange}
          >
            {categorieItem.map((item) => (
              <SelectItem
                key={item.title}
                value={item.title}
                className="text-black"
              >
                {item.title}
              </SelectItem>
            ))}
          </Select>
          <Input
            type="text"
            label="Propmt tags *"
            value={promptData.tags}
            onChange={(e) =>
              setPromptData((prevData) => ({
                ...prevData,
                tags: e.target.value,
              }))
            }
            required
            variant="bordered"
            placeholder="AI,Photo,Arts"
            className="md:ml-10"
          />
        </div>
        <br />
        <div className="w-full">
          <input
            type="file"
            required
            accept="image/*"
            multiple
            id="file"
            className="hidden"
            onChange={handleImageFileChange}
          />
          <label
            htmlFor="file"
            className={`w-full rounded-md min-h-[15vh] border-white p-3 border  flex items-center justify-center ${
              dragging ? "bg-blue-500" : "bg-transparent"
            }`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleImageDrop}
          >
            {promptData.images.length !== 0 ? (
              <div className="w-full flex flex-wrap">
                {promptData.images.map((item) => (
                  <Image
                    src={item}
                    alt=""
                    width={500}
                    height={400}
                    key={item}
                    className="w-full md:w-[48%] object-cover md:m-2 my-2"
                  />
                ))}
              </div>
            ) : (
              <span className="text-white">
                Drag and drop your prompt images here or click to browse
              </span>
            )}
          </label>
        </div>
        <br />
        <br />
        <div className="w-full">
          <input
            type="file"
            required
            accept=".txt, .pdf"
            multiple
            id="attachment"
            className="hidden"
            onChange={handleAttachmentFileChange}
          />
          <label
            htmlFor="attachment"
            className={`w-full rounded-md min-h-[15vh] border-white p-3 border  flex items-center justify-center ${
              dragging ? "bg-blue-500" : "bg-transparent"
            }`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleAttachmentDrop}
          >
            {promptData.attachments.length !== 0 ? (
              <div className="flex items-center">
                <IoDocumentAttachOutline className="text-3xl" />
                <span className={`${styles.label} pl-2 !text-2xl pt-1`}>
                  {promptData?.attachments?.length}{" "}
                  {promptData?.attachments?.length > 1 ? "files" : "file"}
                </span>
              </div>
            ) : (
              <span className="text-white">
                Drag and drop your prompt files here or click to browse
              </span>
            )}
          </label>
        </div>
        <br />
        <br />
        <div className="w-full flex items-center justify-center">
          <Button
            color="primary"
            className={`${styles.button}`}
            type="submit"
            disabled={isLoading}
            disableAnimation={isLoading}
          >
            Upload your prompt
          </Button>
        </div>
        <br />
        <br />
      </form>
    </div>
  );
};

export default UploadPrompt;

```

---

### <a id="📄-lib-cloudinary-ts"></a>📄 `lib/cloudinary.ts`

**File Info:**
- **Size**: 245 B
- **Extension**: `.ts`
- **Language**: `typescript`
- **Location**: `lib/cloudinary.ts`
- **Relative Path**: `lib`
- **Created**: 2025-11-12 05:58:33 (Asia/Katmandu / GMT+06:45)
- **Modified**: 2024-01-24 15:41:52 (Asia/Katmandu / GMT+06:45)
- **MD5**: `6f836e218901223fa71d4b2f995b6332`
- **SHA256**: `5f8db6f258a32060fbdbf0967db3e4110a3e46e94d34c619594fdcf2e69c7b3f`
- **Encoding**: ASCII

**File code content:**

```typescript
import {v2 as cloudinary} from "cloudinary";


// cloudinary config
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET,
});

export default cloudinary;
```

---

### <a id="📄-lib-prismadb-ts"></a>📄 `lib/prismaDb.ts`

**File Info:**
- **Size**: 299 B
- **Extension**: `.ts`
- **Language**: `typescript`
- **Location**: `lib/prismaDb.ts`
- **Relative Path**: `lib`
- **Created**: 2025-11-12 05:58:33 (Asia/Katmandu / GMT+06:45)
- **Modified**: 2025-11-27 22:43:08 (Asia/Katmandu / GMT+06:45)
- **MD5**: `bf1e009ef6d62e6add3ac16c05183700`
- **SHA256**: `73f503e1d60285fb4dd27852997a3600d74901f564e6fe268e58e7a552415165`
- **Encoding**: ASCII

**File code content:**

```typescript
import { PrismaClient } from '@prisma/client';

const globalForPrisma = global as unknown as {
  prismadb: PrismaClient | undefined
}

const prisma = globalForPrisma.prismadb || new PrismaClient();

if(process.env.NODE_ENV !== "production") globalForPrisma.prismadb = prisma;

export default prisma;
```

---

## 🚫 Binary/Excluded Files

The following files were not included in the text content:

- `prisma/schema.prisma`

## 🚫 Binary/Excluded Files

The following files were not included in the text content:

- `public/Assets/line.png`
- `public/Assets/silver-blurred-background_1034-253.avif`

## 🚫 Binary/Excluded Files

The following files were not included in the text content:

- `public/next.svg`
- `public/vercel.svg`

### <a id="📄-utils-loader-css"></a>📄 `utils/Loader.css`

**File Info:**
- **Size**: 285 B
- **Extension**: `.css`
- **Language**: `css`
- **Location**: `utils/Loader.css`
- **Relative Path**: `utils`
- **Created**: 2025-11-12 05:58:33 (Asia/Katmandu / GMT+06:45)
- **Modified**: 2024-01-24 15:41:52 (Asia/Katmandu / GMT+06:45)
- **MD5**: `6ea1d5a32fc06d3586068f30ec066bbc`
- **SHA256**: `09103ab65986c620ad87297fd735792d4921fba4af59c0e679698d852ffd1e72`
- **Encoding**: ASCII

**File code content:**

```css
.loader {
    border: 4px solid #1494d3; 
    border-top: 4px solid #1f2937;
    border-radius: 50%;
    width: 48px;
    height: 48px;
    animation: spin 1s linear infinite;
  }
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  
```

---

### <a id="📄-utils-loader-tsx"></a>📄 `utils/Loader.tsx`

**File Info:**
- **Size**: 229 B
- **Extension**: `.tsx`
- **Language**: `typescript`
- **Location**: `utils/Loader.tsx`
- **Relative Path**: `utils`
- **Created**: 2025-11-12 05:58:33 (Asia/Katmandu / GMT+06:45)
- **Modified**: 2024-01-24 15:41:52 (Asia/Katmandu / GMT+06:45)
- **MD5**: `6e751d2ff584657d7e9c63ce8e62f74b`
- **SHA256**: `c6aaa49dfb787ca3c859ed4aff1839d7e25f33920bcd56d811fc0c3fafa43f5f`
- **Encoding**: ASCII

**File code content:**

```typescript
import React from "react";
import "./Loader.css";

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="loader"></div>
    </div>
  );
};

export default Loader;

```

---

### <a id="📄-utils-promptcardloader-tsx"></a>📄 `utils/PromptCardLoader.tsx`

**File Info:**
- **Size**: 876 B
- **Extension**: `.tsx`
- **Language**: `typescript`
- **Location**: `utils/PromptCardLoader.tsx`
- **Relative Path**: `utils`
- **Created**: 2025-11-12 05:58:33 (Asia/Katmandu / GMT+06:45)
- **Modified**: 2024-01-24 15:41:52 (Asia/Katmandu / GMT+06:45)
- **MD5**: `08c36ece94bf5b2d84502c5f98721e71`
- **SHA256**: `1230de6ebd5ced53179baa3252c3fd1e6d3e564315dfce8b9f8db03659744423`
- **Encoding**: ASCII

**File code content:**

```typescript
import { Card, Skeleton } from "@nextui-org/react";

const PromptCard = () => {
  return (
    <Card
      radius="lg"
      className="w-full md:w-[31%] 2xl:w-[23%] p-4 bg-[#130f23] m-3"
      style={{ height: "410px" }}
    >
      <div className="relative">
        <Skeleton className="rounded-xl" style={{ height: "250px" }}>
          <div className="w-full h-[250px]"></div>
        </Skeleton>
        <br />
        <div className="flex justify-between">
          <Skeleton className="flex rounded-full w-12 h-12" />
          <div className="w-[80%]">
            <Skeleton
              className="rounded-xl"
              style={{ height: "40px" }}
            ></Skeleton>
          </div>
        </div>
        <br />
        <Skeleton className="rounded-xl" style={{ height: "30px" }}></Skeleton>
      </div>
    </Card>
  );
};

export default PromptCard;

```

---

### <a id="📄-utils-ratings-tsx"></a>📄 `utils/Ratings.tsx`

**File Info:**
- **Size**: 1.04 KB
- **Extension**: `.tsx`
- **Language**: `typescript`
- **Location**: `utils/Ratings.tsx`
- **Relative Path**: `utils`
- **Created**: 2025-11-12 05:58:33 (Asia/Katmandu / GMT+06:45)
- **Modified**: 2024-01-24 15:41:52 (Asia/Katmandu / GMT+06:45)
- **MD5**: `e6f94089491ee803be4c021abfe8c1f0`
- **SHA256**: `9037b8f76e48f4db0816e606645c950f2a4508d19088830967888a9f7f2839b8`
- **Encoding**: ASCII

**File code content:**

```typescript
import React, { FC } from 'react'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { BsStarHalf } from 'react-icons/bs';

type Props = {
    rating: number;
}

const Ratings:FC<Props> = ({ rating }) => {
    const stars = [];
  
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(
          <AiFillStar
            key={i}
            size={20}
            color="#f6b100"
            className="mr-2 cursor-pointer"
          />
        );
      } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
        stars.push(
          <BsStarHalf
            key={i}
            size={17}
            color="#f6ba00"
            className="mr-2 cursor-pointer"
          />
        );
      } else {
        stars.push(
          <AiOutlineStar
            key={i}
            size={20}
            color="#f6ba00"
            className="mr-2 cursor-pointer"
          />
        );
      }
    }
    return <div className="flex mt-1 ml-2 800px:mt-0 800px:ml-0"> {stars}</div>;
  };

  export default Ratings;
```

---

### <a id="📄-utils-styles-ts"></a>📄 `utils/styles.ts`

**File Info:**
- **Size**: 399 B
- **Extension**: `.ts`
- **Language**: `typescript`
- **Location**: `utils/styles.ts`
- **Relative Path**: `utils`
- **Created**: 2025-11-12 05:58:33 (Asia/Katmandu / GMT+06:45)
- **Modified**: 2024-01-24 15:41:52 (Asia/Katmandu / GMT+06:45)
- **MD5**: `753b0d4d87e197674f451e1ce4afe651`
- **SHA256**: `88926822fa59e42e0ca218dbe927ba0327a8a2b0987efcd4401e72af3070abf9`
- **Encoding**: ASCII

**File code content:**

```typescript
export const styles = {
    button:"text-[18px] p-5 font-[600] font-Inter rounded-[8px] text-white",
    heading:"text-4xl font-[700] font-Inter text-white",
    paragraph:"text-[18px] font-[400] text-[#b1b0b6] font-Inter",
    label: "text-[16px] text-[#b1b0b6] font-Inter font-[500]",
    input:"w-full text-white bg-transparent border rounded h-[40px] px-2 outline-none mt-[10px] font-Poppins",
}
```

---

### <a id="📄-global-d-ts"></a>📄 `global.d.ts`

**File Info:**
- **Size**: 133 B
- **Extension**: `.ts`
- **Language**: `typescript`
- **Location**: `global.d.ts`
- **Relative Path**: `root`
- **Created**: 2025-11-12 05:58:33 (Asia/Katmandu / GMT+06:45)
- **Modified**: 2024-01-24 15:41:52 (Asia/Katmandu / GMT+06:45)
- **MD5**: `d9d5afc6813eb3a597076674456cfaf7`
- **SHA256**: `1bcc0367ef40dc7df2c1162b69f4294daa9fda43446fda56e4a54fc027b952be`
- **Encoding**: ASCII

**File code content:**

```typescript
import { PrismaClient } from "@prisma/client";

declare global{
    namespace globalThis{
        var prismadb: PrismaClient;
    }
}
```

---

### <a id="📄-middleware-ts"></a>📄 `middleware.ts`

**File Info:**
- **Size**: 212 B
- **Extension**: `.ts`
- **Language**: `typescript`
- **Location**: `middleware.ts`
- **Relative Path**: `root`
- **Created**: 2025-11-12 05:58:33 (Asia/Katmandu / GMT+06:45)
- **Modified**: 2024-01-24 15:41:52 (Asia/Katmandu / GMT+06:45)
- **MD5**: `06011e8251407a92546eae79d2ce2744`
- **SHA256**: `c176c64c781ca4559f56b9469e18fe4248a516280ec686513ae0ec07e9f3d9bc`
- **Encoding**: ASCII

**File code content:**

```typescript
import { authMiddleware } from "@clerk/nextjs";
 
export default authMiddleware({
    publicRoutes: ['/']
});
 
export const config = {
      matcher: ["/((?!.+\\.[\\w]+$|_next).*)","/","/(api|trpc)(.*)"],
};
   
```

---

### <a id="📄-next-env-d-ts"></a>📄 `next-env.d.ts`

**File Info:**
- **Size**: 233 B
- **Extension**: `.ts`
- **Language**: `typescript`
- **Location**: `next-env.d.ts`
- **Relative Path**: `root`
- **Created**: 2025-11-13 17:04:26 (Asia/Katmandu / GMT+06:45)
- **Modified**: 2025-11-13 17:04:26 (Asia/Katmandu / GMT+06:45)
- **MD5**: `187b4b5b507c358a018aeeadd81abe57`
- **SHA256**: `e462a655754db9df18b4a657454a7b6a88717ffded4e89403b2b3a47c6603fc3`
- **Encoding**: ASCII

**File code content:**

```typescript
/// <reference types="next" />
/// <reference types="next/image-types/global" />

// NOTE: This file should not be edited
// see https://nextjs.org/docs/app/building-your-application/configuring/typescript for more information.

```

---

### <a id="📄-next-config-js"></a>📄 `next.config.js`

**File Info:**
- **Size**: 182 B
- **Extension**: `.js`
- **Language**: `javascript`
- **Location**: `next.config.js`
- **Relative Path**: `root`
- **Created**: 2025-11-12 05:58:33 (Asia/Katmandu / GMT+06:45)
- **Modified**: 2025-11-13 17:21:51 (Asia/Katmandu / GMT+06:45)
- **MD5**: `603135bf1317667bcf9d04a83ce4003e`
- **SHA256**: `78a72dde1d5aaf1fbc1cf8722574b0e42871f016c75b2a7fcfe89e11aae0d54b`
- **Encoding**: ASCII

**File code content:**

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["pixner.net", "res.cloudinary.com"],
  },
  swcMinify: true,
};

module.exports = nextConfig;

```

---

### <a id="📄-package-lock-json"></a>📄 `package-lock.json`

**File Info:**
- **Size**: 263.72 KB
- **Extension**: `.json`
- **Language**: `json`
- **Location**: `package-lock.json`
- **Relative Path**: `root`
- **Created**: 2025-11-28 20:59:37 (Asia/Katmandu / GMT+06:45)
- **Modified**: 2025-11-28 20:59:37 (Asia/Katmandu / GMT+06:45)
- **MD5**: `d71a5c2dbb52d8e30e1f230d0e455cf3`
- **SHA256**: `6bdd90c9cdb94f5c75b6984b7375e2ca1bdc48ab4d0f8b13964a59ab5be6b04e`
- **Encoding**: ASCII

**File code content:**

```json
{
  "name": "prompt-marketplace",
  "version": "0.1.0",
  "lockfileVersion": 3,
  "requires": true,
  "packages": {
    "": {
      "name": "prompt-marketplace",
      "version": "0.1.0",
      "hasInstallScript": true,
      "dependencies": {
        "@clerk/nextjs": "^4.31.8",
        "@emotion/react": "^11.11.4",
        "@emotion/styled": "^11.11.5",
        "@mui/material": "^5.15.20",
        "@mui/x-data-grid": "^6.19.5",
        "@nextui-org/react": "^2.6.11",
        "@prisma/client": "^5.19.1",
        "@stripe/react-stripe-js": "^2.5.1",
        "@stripe/stripe-js": "^2.3.0",
        "axios": "^1.7.7",
        "cloudinary": "^1.41.2",
        "framer-motion": "^11.5.6",
        "next": "14.2.25",
        "next-themes": "^0.3.0",
        "react": "18.3.1",
        "react-dom": "18.3.1",
        "react-fast-marquee": "^1.6.1",
        "react-hot-toast": "^2.4.1",
        "react-icons": "^5.2.1",
        "recharts": "^2.12.7",
        "stripe": "^16.5.0",
        "timeago.js": "^4.0.2"
      },
      "devDependencies": {
        "@types/node": "^20.14.12",
        "@types/react": "^18.3.10",
        "@types/react-dom": "^18.3.5",
        "autoprefixer": "^10.4.20",
        "eslint": "^8.57.0",
        "eslint-config-next": "14.2.25",
        "postcss": "^8.4.41",
        "prisma": "^5.19.1",
        "tailwindcss": "^3.4.14",
        "typescript": "^5.6.3"
      },
      "engines": {
        "node": ">=18.17.0"
      }
    },
    "node_modules/@alloc/quick-lru": {
      "version": "5.2.0",
      "license": "MIT",
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/@babel/code-frame": {
      "version": "7.27.1",
      "license": "MIT",
      "dependencies": {
        "@babel/helper-validator-identifier": "^7.27.1",
        "js-tokens": "^4.0.0",
        "picocolors": "^1.1.1"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/generator": {
      "version": "7.28.5",
      "license": "MIT",
      "dependencies": {
        "@babel/parser": "^7.28.5",
        "@babel/types": "^7.28.5",
        "@jridgewell/gen-mapping": "^0.3.12",
        "@jridgewell/trace-mapping": "^0.3.28",
        "jsesc": "^3.0.2"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-globals": {
      "version": "7.28.0",
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-module-imports": {
      "version": "7.27.1",
      "license": "MIT",
      "dependencies": {
        "@babel/traverse": "^7.27.1",
        "@babel/types": "^7.27.1"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-string-parser": {
      "version": "7.27.1",
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-validator-identifier": {
      "version": "7.28.5",
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/parser": {
      "version": "7.28.5",
      "license": "MIT",
      "dependencies": {
        "@babel/types": "^7.28.5"
      },
      "bin": {
        "parser": "bin/babel-parser.js"
      },
      "engines": {
        "node": ">=6.0.0"
      }
    },
    "node_modules/@babel/runtime": {
      "version": "7.28.4",
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/template": {
      "version": "7.27.2",
      "license": "MIT",
      "dependencies": {
        "@babel/code-frame": "^7.27.1",
        "@babel/parser": "^7.27.2",
        "@babel/types": "^7.27.1"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/traverse": {
      "version": "7.28.5",
      "license": "MIT",
      "dependencies": {
        "@babel/code-frame": "^7.27.1",
        "@babel/generator": "^7.28.5",
        "@babel/helper-globals": "^7.28.0",
        "@babel/parser": "^7.28.5",
        "@babel/template": "^7.27.2",
        "@babel/types": "^7.28.5",
        "debug": "^4.3.1"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/types": {
      "version": "7.28.5",
      "license": "MIT",
      "dependencies": {
        "@babel/helper-string-parser": "^7.27.1",
        "@babel/helper-validator-identifier": "^7.28.5"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@clerk/backend": {
      "version": "0.38.15",
      "license": "MIT",
      "dependencies": {
        "@clerk/shared": "1.4.2",
        "@clerk/types": "3.65.5",
        "@peculiar/webcrypto": "1.4.1",
        "@types/node": "16.18.6",
        "cookie": "0.5.0",
        "deepmerge": "4.2.2",
        "node-fetch-native": "1.0.1",
        "snakecase-keys": "5.4.4",
        "tslib": "2.4.1"
      },
      "engines": {
        "node": ">=14"
      }
    },
    "node_modules/@clerk/backend/node_modules/@types/node": {
      "version": "16.18.6",
      "license": "MIT"
    },
    "node_modules/@clerk/clerk-react": {
      "version": "4.32.5",
      "license": "MIT",
      "dependencies": {
        "@clerk/shared": "1.4.2",
        "@clerk/types": "3.65.5",
        "tslib": "2.4.1"
      },
      "engines": {
        "node": ">=14"
      },
      "peerDependencies": {
        "react": ">=16"
      }
    },
    "node_modules/@clerk/clerk-sdk-node": {
      "version": "4.13.23",
      "license": "MIT",
      "dependencies": {
        "@clerk/backend": "0.38.15",
        "@clerk/shared": "1.4.2",
        "@clerk/types": "3.65.5",
        "@types/cookies": "0.7.7",
        "@types/express": "4.17.14",
        "@types/node-fetch": "2.6.2",
        "camelcase-keys": "6.2.2",
        "snakecase-keys": "3.2.1",
        "tslib": "2.4.1"
      },
      "engines": {
        "node": ">=14"
      }
    },
    "node_modules/@clerk/clerk-sdk-node/node_modules/snakecase-keys": {
      "version": "3.2.1",
      "license": "MIT",
      "dependencies": {
        "map-obj": "^4.1.0",
        "to-snake-case": "^1.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/@clerk/nextjs": {
      "version": "4.31.8",
      "license": "MIT",
      "dependencies": {
        "@clerk/backend": "0.38.15",
        "@clerk/clerk-react": "4.32.5",
        "@clerk/clerk-sdk-node": "4.13.23",
        "@clerk/shared": "1.4.2",
        "@clerk/types": "3.65.5",
        "tslib": "2.4.1"
      },
      "engines": {
        "node": ">=14"
      },
      "peerDependencies": {
        "next": "^10 || ^13.5.7 || ^14.2.25 || ^15.2.3",
        "react": "^17.0.2 || ^18.0.0-0",
        "react-dom": "^17.0.2 || ^18.0.0-0"
      }
    },
    "node_modules/@clerk/shared": {
      "version": "1.4.2",
      "license": "MIT",
      "dependencies": {
        "glob-to-regexp": "0.4.1",
        "js-cookie": "3.0.1",
        "swr": "2.2.0"
      },
      "peerDependencies": {
        "react": ">=16"
      },
      "peerDependenciesMeta": {
        "react": {
          "optional": true
        }
      }
    },
    "node_modules/@clerk/types": {
      "version": "3.65.5",
      "license": "MIT",
      "dependencies": {
        "csstype": "3.1.1"
      },
      "engines": {
        "node": ">=14"
      }
    },
    "node_modules/@emotion/babel-plugin": {
      "version": "11.13.5",
      "license": "MIT",
      "dependencies": {
        "@babel/helper-module-imports": "^7.16.7",
        "@babel/runtime": "^7.18.3",
        "@emotion/hash": "^0.9.2",
        "@emotion/memoize": "^0.9.0",
        "@emotion/serialize": "^1.3.3",
        "babel-plugin-macros": "^3.1.0",
        "convert-source-map": "^1.5.0",
        "escape-string-regexp": "^4.0.0",
        "find-root": "^1.1.0",
        "source-map": "^0.5.7",
        "stylis": "4.2.0"
      }
    },
    "node_modules/@emotion/cache": {
      "version": "11.14.0",
      "license": "MIT",
      "dependencies": {
        "@emotion/memoize": "^0.9.0",
        "@emotion/sheet": "^1.4.0",
        "@emotion/utils": "^1.4.2",
        "@emotion/weak-memoize": "^0.4.0",
        "stylis": "4.2.0"
      }
    },
    "node_modules/@emotion/hash": {
      "version": "0.9.2",
      "license": "MIT"
    },
    "node_modules/@emotion/is-prop-valid": {
      "version": "1.4.0",
      "license": "MIT",
      "dependencies": {
        "@emotion/memoize": "^0.9.0"
      }
    },
    "node_modules/@emotion/memoize": {
      "version": "0.9.0",
      "license": "MIT"
    },
    "node_modules/@emotion/react": {
      "version": "11.14.0",
      "license": "MIT",
      "dependencies": {
        "@babel/runtime": "^7.18.3",
        "@emotion/babel-plugin": "^11.13.5",
        "@emotion/cache": "^11.14.0",
        "@emotion/serialize": "^1.3.3",
        "@emotion/use-insertion-effect-with-fallbacks": "^1.2.0",
        "@emotion/utils": "^1.4.2",
        "@emotion/weak-memoize": "^0.4.0",
        "hoist-non-react-statics": "^3.3.1"
      },
      "peerDependencies": {
        "react": ">=16.8.0"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        }
      }
    },
    "node_modules/@emotion/serialize": {
      "version": "1.3.3",
      "license": "MIT",
      "dependencies": {
        "@emotion/hash": "^0.9.2",
        "@emotion/memoize": "^0.9.0",
        "@emotion/unitless": "^0.10.0",
        "@emotion/utils": "^1.4.2",
        "csstype": "^3.0.2"
      }
    },
    "node_modules/@emotion/sheet": {
      "version": "1.4.0",
      "license": "MIT"
    },
    "node_modules/@emotion/styled": {
      "version": "11.14.1",
      "license": "MIT",
      "dependencies": {
        "@babel/runtime": "^7.18.3",
        "@emotion/babel-plugin": "^11.13.5",
        "@emotion/is-prop-valid": "^1.3.0",
        "@emotion/serialize": "^1.3.3",
        "@emotion/use-insertion-effect-with-fallbacks": "^1.2.0",
        "@emotion/utils": "^1.4.2"
      },
      "peerDependencies": {
        "@emotion/react": "^11.0.0-rc.0",
        "react": ">=16.8.0"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        }
      }
    },
    "node_modules/@emotion/unitless": {
      "version": "0.10.0",
      "license": "MIT"
    },
    "node_modules/@emotion/use-insertion-effect-with-fallbacks": {
      "version": "1.2.0",
      "license": "MIT",
      "peerDependencies": {
        "react": ">=16.8.0"
      }
    },
    "node_modules/@emotion/utils": {
      "version": "1.4.2",
      "license": "MIT"
    },
    "node_modules/@emotion/weak-memoize": {
      "version": "0.4.0",
      "license": "MIT"
    },
    "node_modules/@eslint-community/eslint-utils": {
      "version": "4.9.0",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "eslint-visitor-keys": "^3.4.3"
      },
      "engines": {
        "node": "^12.22.0 || ^14.17.0 || >=16.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      },
      "peerDependencies": {
        "eslint": "^6.0.0 || ^7.0.0 || >=8.0.0"
      }
    },
    "node_modules/@eslint-community/regexpp": {
      "version": "4.12.2",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": "^12.0.0 || ^14.0.0 || >=16.0.0"
      }
    },
    "node_modules/@eslint/eslintrc": {
      "version": "2.1.4",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ajv": "^6.12.4",
        "debug": "^4.3.2",
        "espree": "^9.6.0",
        "globals": "^13.19.0",
        "ignore": "^5.2.0",
        "import-fresh": "^3.2.1",
        "js-yaml": "^4.1.0",
        "minimatch": "^3.1.2",
        "strip-json-comments": "^3.1.1"
      },
      "engines": {
        "node": "^12.22.0 || ^14.17.0 || >=16.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      }
    },
    "node_modules/@eslint/js": {
      "version": "8.57.1",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": "^12.22.0 || ^14.17.0 || >=16.0.0"
      }
    },
    "node_modules/@formatjs/ecma402-abstract": {
      "version": "2.3.6",
      "license": "MIT",
      "dependencies": {
        "@formatjs/fast-memoize": "2.2.7",
        "@formatjs/intl-localematcher": "0.6.2",
        "decimal.js": "^10.4.3",
        "tslib": "^2.8.0"
      }
    },
    "node_modules/@formatjs/ecma402-abstract/node_modules/tslib": {
      "version": "2.8.1",
      "license": "0BSD"
    },
    "node_modules/@formatjs/fast-memoize": {
      "version": "2.2.7",
      "license": "MIT",
      "dependencies": {
        "tslib": "^2.8.0"
      }
    },
    "node_modules/@formatjs/fast-memoize/node_modules/tslib": {
      "version": "2.8.1",
      "license": "0BSD"
    },
    "node_modules/@formatjs/icu-messageformat-parser": {
      "version": "2.11.4",
      "license": "MIT",
      "dependencies": {
        "@formatjs/ecma402-abstract": "2.3.6",
        "@formatjs/icu-skeleton-parser": "1.8.16",
        "tslib": "^2.8.0"
      }
    },
    "node_modules/@formatjs/icu-messageformat-parser/node_modules/tslib": {
      "version": "2.8.1",
      "license": "0BSD"
    },
    "node_modules/@formatjs/icu-skeleton-parser": {
      "version": "1.8.16",
      "license": "MIT",
      "dependencies": {
        "@formatjs/ecma402-abstract": "2.3.6",
        "tslib": "^2.8.0"
      }
    },
    "node_modules/@formatjs/icu-skeleton-parser/node_modules/tslib": {
      "version": "2.8.1",
      "license": "0BSD"
    },
    "node_modules/@formatjs/intl-localematcher": {
      "version": "0.6.2",
      "license": "MIT",
      "dependencies": {
        "tslib": "^2.8.0"
      }
    },
    "node_modules/@formatjs/intl-localematcher/node_modules/tslib": {
      "version": "2.8.1",
      "license": "0BSD"
    },
    "node_modules/@humanwhocodes/config-array": {
      "version": "0.13.0",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "@humanwhocodes/object-schema": "^2.0.3",
        "debug": "^4.3.1",
        "minimatch": "^3.0.5"
      },
      "engines": {
        "node": ">=10.10.0"
      }
    },
    "node_modules/@humanwhocodes/module-importer": {
      "version": "1.0.1",
      "dev": true,
      "license": "Apache-2.0",
      "engines": {
        "node": ">=12.22"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/nzakas"
      }
    },
    "node_modules/@humanwhocodes/object-schema": {
      "version": "2.0.3",
      "dev": true,
      "license": "BSD-3-Clause"
    },
    "node_modules/@internationalized/date": {
      "version": "3.6.0",
      "license": "Apache-2.0",
      "dependencies": {
        "@swc/helpers": "^0.5.0"
      }
    },
    "node_modules/@internationalized/message": {
      "version": "3.1.8",
      "license": "Apache-2.0",
      "dependencies": {
        "@swc/helpers": "^0.5.0",
        "intl-messageformat": "^10.1.0"
      }
    },
    "node_modules/@internationalized/number": {
      "version": "3.6.5",
      "license": "Apache-2.0",
      "dependencies": {
        "@swc/helpers": "^0.5.0"
      }
    },
    "node_modules/@internationalized/string": {
      "version": "3.2.7",
      "license": "Apache-2.0",
      "dependencies": {
        "@swc/helpers": "^0.5.0"
      }
    },
    "node_modules/@isaacs/cliui": {
      "version": "8.0.2",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "string-width": "^5.1.2",
        "string-width-cjs": "npm:string-width@^4.2.0",
        "strip-ansi": "^7.0.1",
        "strip-ansi-cjs": "npm:strip-ansi@^6.0.1",
        "wrap-ansi": "^8.1.0",
        "wrap-ansi-cjs": "npm:wrap-ansi@^7.0.0"
      },
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@isaacs/cliui/node_modules/ansi-regex": {
      "version": "6.2.2",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/chalk/ansi-regex?sponsor=1"
      }
    },
    "node_modules/@isaacs/cliui/node_modules/strip-ansi": {
      "version": "7.1.2",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ansi-regex": "^6.0.1"
      },
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/chalk/strip-ansi?sponsor=1"
      }
    },
    "node_modules/@jridgewell/gen-mapping": {
      "version": "0.3.13",
      "license": "MIT",
      "dependencies": {
        "@jridgewell/sourcemap-codec": "^1.5.0",
        "@jridgewell/trace-mapping": "^0.3.24"
      }
    },
    "node_modules/@jridgewell/resolve-uri": {
      "version": "3.1.2",
      "license": "MIT",
      "engines": {
        "node": ">=6.0.0"
      }
    },
    "node_modules/@jridgewell/sourcemap-codec": {
      "version": "1.5.5",
      "license": "MIT"
    },
    "node_modules/@jridgewell/trace-mapping": {
      "version": "0.3.31",
      "license": "MIT",
      "dependencies": {
        "@jridgewell/resolve-uri": "^3.1.0",
        "@jridgewell/sourcemap-codec": "^1.4.14"
      }
    },
    "node_modules/@mui/core-downloads-tracker": {
      "version": "5.18.0",
      "license": "MIT",
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/mui-org"
      }
    },
    "node_modules/@mui/material": {
      "version": "5.18.0",
      "license": "MIT",
      "dependencies": {
        "@babel/runtime": "^7.23.9",
        "@mui/core-downloads-tracker": "^5.18.0",
        "@mui/system": "^5.18.0",
        "@mui/types": "~7.2.15",
        "@mui/utils": "^5.17.1",
        "@popperjs/core": "^2.11.8",
        "@types/react-transition-group": "^4.4.10",
        "clsx": "^2.1.0",
        "csstype": "^3.1.3",
        "prop-types": "^15.8.1",
        "react-is": "^19.0.0",
        "react-transition-group": "^4.4.5"
      },
      "engines": {
        "node": ">=12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/mui-org"
      },
      "peerDependencies": {
        "@emotion/react": "^11.5.0",
        "@emotion/styled": "^11.3.0",
        "@types/react": "^17.0.0 || ^18.0.0 || ^19.0.0",
        "react": "^17.0.0 || ^18.0.0 || ^19.0.0",
        "react-dom": "^17.0.0 || ^18.0.0 || ^19.0.0"
      },
      "peerDependenciesMeta": {
        "@emotion/react": {
          "optional": true
        },
        "@emotion/styled": {
          "optional": true
        },
        "@types/react": {
          "optional": true
        }
      }
    },
    "node_modules/@mui/material/node_modules/csstype": {
      "version": "3.2.3",
      "license": "MIT"
    },
    "node_modules/@mui/private-theming": {
      "version": "5.17.1",
      "license": "MIT",
      "dependencies": {
        "@babel/runtime": "^7.23.9",
        "@mui/utils": "^5.17.1",
        "prop-types": "^15.8.1"
      },
      "engines": {
        "node": ">=12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/mui-org"
      },
      "peerDependencies": {
        "@types/react": "^17.0.0 || ^18.0.0 || ^19.0.0",
        "react": "^17.0.0 || ^18.0.0 || ^19.0.0"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        }
      }
    },
    "node_modules/@mui/styled-engine": {
      "version": "5.18.0",
      "license": "MIT",
      "dependencies": {
        "@babel/runtime": "^7.23.9",
        "@emotion/cache": "^11.13.5",
        "@emotion/serialize": "^1.3.3",
        "csstype": "^3.1.3",
        "prop-types": "^15.8.1"
      },
      "engines": {
        "node": ">=12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/mui-org"
      },
      "peerDependencies": {
        "@emotion/react": "^11.4.1",
        "@emotion/styled": "^11.3.0",
        "react": "^17.0.0 || ^18.0.0 || ^19.0.0"
      },
      "peerDependenciesMeta": {
        "@emotion/react": {
          "optional": true
        },
        "@emotion/styled": {
          "optional": true
        }
      }
    },
    "node_modules/@mui/styled-engine/node_modules/csstype": {
      "version": "3.2.3",
      "license": "MIT"
    },
    "node_modules/@mui/system": {
      "version": "5.18.0",
      "license": "MIT",
      "dependencies": {
        "@babel/runtime": "^7.23.9",
        "@mui/private-theming": "^5.17.1",
        "@mui/styled-engine": "^5.18.0",
        "@mui/types": "~7.2.15",
        "@mui/utils": "^5.17.1",
        "clsx": "^2.1.0",
        "csstype": "^3.1.3",
        "prop-types": "^15.8.1"
      },
      "engines": {
        "node": ">=12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/mui-org"
      },
      "peerDependencies": {
        "@emotion/react": "^11.5.0",
        "@emotion/styled": "^11.3.0",
        "@types/react": "^17.0.0 || ^18.0.0 || ^19.0.0",
        "react": "^17.0.0 || ^18.0.0 || ^19.0.0"
      },
      "peerDependenciesMeta": {
        "@emotion/react": {
          "optional": true
        },
        "@emotion/styled": {
          "optional": true
        },
        "@types/react": {
          "optional": true
        }
      }
    },
    "node_modules/@mui/system/node_modules/csstype": {
      "version": "3.2.3",
      "license": "MIT"
    },
    "node_modules/@mui/types": {
      "version": "7.2.24",
      "license": "MIT",
      "peerDependencies": {
        "@types/react": "^17.0.0 || ^18.0.0 || ^19.0.0"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        }
      }
    },
    "node_modules/@mui/utils": {
      "version": "5.17.1",
      "license": "MIT",
      "dependencies": {
        "@babel/runtime": "^7.23.9",
        "@mui/types": "~7.2.15",
        "@types/prop-types": "^15.7.12",
        "clsx": "^2.1.1",
        "prop-types": "^15.8.1",
        "react-is": "^19.0.0"
      },
      "engines": {
        "node": ">=12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/mui-org"
      },
      "peerDependencies": {
        "@types/react": "^17.0.0 || ^18.0.0 || ^19.0.0",
        "react": "^17.0.0 || ^18.0.0 || ^19.0.0"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        }
      }
    },
    "node_modules/@mui/x-data-grid": {
      "version": "6.20.4",
      "license": "MIT",
      "dependencies": {
        "@babel/runtime": "^7.23.2",
        "@mui/utils": "^5.14.16",
        "clsx": "^2.0.0",
        "prop-types": "^15.8.1",
        "reselect": "^4.1.8"
      },
      "engines": {
        "node": ">=14.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/mui"
      },
      "peerDependencies": {
        "@mui/material": "^5.4.1",
        "@mui/system": "^5.4.1",
        "react": "^17.0.0 || ^18.0.0",
        "react-dom": "^17.0.0 || ^18.0.0"
      }
    },
    "node_modules/@next/env": {
      "version": "14.2.25",
      "license": "MIT"
    },
    "node_modules/@next/eslint-plugin-next": {
      "version": "14.2.25",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "glob": "10.3.10"
      }
    },
    "node_modules/@next/swc-win32-x64-msvc": {
      "version": "14.2.25",
      "cpu": [
        "x64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@nextui-org/accordion": {
      "version": "2.2.7",
      "license": "MIT",
      "dependencies": {
        "@nextui-org/aria-utils": "2.2.7",
        "@nextui-org/divider": "2.2.5",
        "@nextui-org/dom-animation": "2.1.1",
        "@nextui-org/framer-utils": "2.1.6",
        "@nextui-org/react-utils": "2.1.3",
        "@nextui-org/shared-icons": "2.1.1",
        "@nextui-org/shared-utils": "2.1.2",
        "@nextui-org/use-aria-accordion": "2.2.2",
        "@react-aria/button": "3.11.0",
        "@react-aria/focus": "3.19.0",
        "@react-aria/interactions": "3.22.5",
        "@react-aria/utils": "3.26.0",
        "@react-stately/tree": "3.8.6",
        "@react-types/accordion": "3.0.0-alpha.25",
        "@react-types/shared": "3.26.0"
      },
      "peerDependencies": {
        "@nextui-org/system": ">=2.4.0",
        "@nextui-org/theme": ">=2.4.0",
        "framer-motion": ">=11.5.6 || >=12.0.0-alpha.1",
        "react": ">=18 || >=19.0.0-rc.0",
        "react-dom": ">=18 || >=19.0.0-rc.0"
      }
    },
    "node_modules/@nextui-org/alert": {
      "version": "2.2.9",
      "license": "MIT",
      "dependencies": {
        "@nextui-org/button": "2.2.9",
        "@nextui-org/react-utils": "2.1.3",
        "@nextui-org/shared-icons": "2.1.1",
        "@nextui-org/shared-utils": "2.1.2",
        "@react-aria/utils": "3.26.0",
        "@react-stately/utils": "3.10.5"
      },
      "peerDependencies": {
        "@nextui-org/system": ">=2.4.0",
        "@nextui-org/theme": ">=2.4.0",
        "react": ">=18 || >=19.0.0-rc.0",
        "react-dom": ">=18 || >=19.0.0-rc.0"
      }
    },
    "node_modules/@nextui-org/aria-utils": {
      "version": "2.2.7",
      "license": "MIT",
      "dependencies": {
        "@nextui-org/react-rsc-utils": "2.1.1",
        "@nextui-org/shared-utils": "2.1.2",
        "@nextui-org/system": "2.4.6",
        "@react-aria/utils": "3.26.0",
        "@react-stately/collections": "3.12.0",
        "@react-stately/overlays": "3.6.12",
        "@react-types/overlays": "3.8.11",
        "@react-types/shared": "3.26.0"
      },
      "peerDependencies": {
        "react": ">=18 || >=19.0.0-rc.0",
        "react-dom": ">=18 || >=19.0.0-rc.0"
      }
    },
    "node_modules/@nextui-org/autocomplete": {
      "version": "2.3.9",
      "license": "MIT",
      "dependencies": {
        "@nextui-org/aria-utils": "2.2.7",
        "@nextui-org/button": "2.2.9",
        "@nextui-org/form": "2.1.8",
        "@nextui-org/input": "2.4.8",
        "@nextui-org/listbox": "2.3.9",
        "@nextui-org/popover": "2.3.9",
        "@nextui-org/react-utils": "2.1.3",
        "@nextui-org/scroll-shadow": "2.3.5",
        "@nextui-org/shared-icons": "2.1.1",
        "@nextui-org/shared-utils": "2.1.2",
        "@nextui-org/spinner": "2.2.6",
        "@nextui-org/use-aria-button": "2.2.4",
        "@nextui-org/use-safe-layout-effect": "2.1.1",
        "@react-aria/combobox": "3.11.0",
        "@react-aria/focus": "3.19.0",
        "@react-aria/i18n": "3.12.4",
        "@react-aria/interactions": "3.22.5",
        "@react-aria/utils": "3.26.0",
        "@react-aria/visually-hidden": "3.8.18",
        "@react-stately/combobox": "3.10.1",
        "@react-types/combobox": "3.13.1",
        "@react-types/shared": "3.26.0"
      },
      "peerDependencies": {
        "@nextui-org/system": ">=2.4.0",
        "@nextui-org/theme": ">=2.4.0",
        "framer-motion": ">=11.5.6 || >=12.0.0-alpha.1",
        "react": ">=18 || >=19.0.0-rc.0",
        "react-dom": ">=18 || >=19.0.0-rc.0"
      }
    },
    "node_modules/@nextui-org/avatar": {
      "version": "2.2.6",
      "license": "MIT",
      "dependencies": {
        "@nextui-org/react-utils": "2.1.3",
        "@nextui-org/shared-utils": "2.1.2",
        "@nextui-org/use-image": "2.1.2",
        "@react-aria/focus": "3.19.0",
        "@react-aria/interactions": "3.22.5",
        "@react-aria/utils": "3.26.0"
      },
      "peerDependencies": {
        "@nextui-org/system": ">=2.4.0",
        "@nextui-org/theme": ">=2.4.0",
        "react": ">=18 || >=19.0.0-rc.0",
        "react-dom": ">=18 || >=19.0.0-rc.0"
      }
    },
    "node_modules/@nextui-org/badge": {
      "version": "2.2.5",
      "license": "MIT",
      "dependencies": {
        "@nextui-org/react-utils": "2.1.3",
        "@nextui-org/shared-utils": "2.1.2"
      },
      "peerDependencies": {
        "@nextui-org/system": ">=2.4.0",
        "@nextui-org/theme": ">=2.4.0",
        "react": ">=18 || >=19.0.0-rc.0",
        "react-dom": ">=18 || >=19.0.0-rc.0"
      }
    },
    "node_modules/@nextui-org/breadcrumbs": {
      "version": "2.2.6",
      "license": "MIT",
      "dependencies": {
        "@nextui-org/react-utils": "2.1.3",
        "@nextui-org/shared-icons": "2.1.1",
        "@nextui-org/shared-utils": "2.1.2",
        "@react-aria/breadcrumbs": "3.5.19",
        "@react-aria/focus": "3.19.0",
        "@react-aria/utils": "3.26.0",
        "@react-types/breadcrumbs": "3.7.9",
        "@react-types/shared": "3.26.0"
      },
      "peerDependencies": {
        "@nextui-org/system": ">=2.4.0",
        "@nextui-org/theme": ">=2.4.0",
        "react": ">=18 || >=19.0.0-rc.0",
        "react-dom": ">=18 || >=19.0.0-rc.0"
      }
    },
    "node_modules/@nextui-org/button": {
      "version": "2.2.9",
      "license": "MIT",
      "dependencies": {
        "@nextui-org/react-utils": "2.1.3",
        "@nextui-org/ripple": "2.2.7",
        "@nextui-org/shared-utils": "2.1.2",
        "@nextui-org/spinner": "2.2.6",
        "@nextui-org/use-aria-button": "2.2.4",
        "@react-aria/button": "3.11.0",
        "@react-aria/focus": "3.19.0",
        "@react-aria/interactions": "3.22.5",
        "@react-aria/utils": "3.26.0",
        "@react-types/button": "3.10.1",
        "@react-types/shared": "3.26.0"
      },
      "peerDependencies": {
        "@nextui-org/system": ">=2.4.0",
        "@nextui-org/theme": ">=2.4.0",
        "framer-motion": ">=11.5.6 || >=12.0.0-alpha.1",
        "react": ">=18 || >=19.0.0-rc.0",
        "react-dom": ">=18 || >=19.0.0-rc.0"
      }
    },
    "node_modules/@nextui-org/calendar": {
      "version": "2.2.9",
      "license": "MIT",
      "dependencies": {
        "@internationalized/date": "3.6.0",
        "@nextui-org/button": "2.2.9",
        "@nextui-org/dom-animation": "2.1.1",
        "@nextui-org/framer-utils": "2.1.6",
        "@nextui-org/react-utils": "2.1.3",
        "@nextui-org/shared-icons": "2.1.1",
        "@nextui-org/shared-utils": "2.1.2",
        "@nextui-org/use-aria-button": "2.2.4",
        "@react-aria/calendar": "3.6.0",
        "@react-aria/focus": "3.19.0",
        "@react-aria/i18n": "3.12.4",
        "@react-aria/interactions": "3.22.5",
        "@react-aria/utils": "3.26.0",
        "@react-aria/visually-hidden": "3.8.18",
        "@react-stately/calendar": "3.6.0",
        "@react-stately/utils": "3.10.5",
        "@react-types/button": "3.10.1",
        "@react-types/calendar": "3.5.0",
        "@react-types/shared": "3.26.0",
        "@types/lodash.debounce": "^4.0.7",
        "scroll-into-view-if-needed": "3.0.10"
      },
      "peerDependencies": {
        "@nextui-org/system": ">=2.4.0",
        "@nextui-org/theme": ">=2.4.0",
        "framer-motion": ">=11.5.6 || >=12.0.0-alpha.1",
        "react": ">=18 || >=19.0.0-rc.0",
        "react-dom": ">=18 || >=19.0.0-rc.0"
      }
    },
    "node_modules/@nextui-org/card": {
      "version": "2.2.9",
      "license": "MIT",
      "dependencies": {
        "@nextui-org/react-utils": "2.1.3",
        "@nextui-org/ripple": "2.2.7",
        "@nextui-org/shared-utils": "2.1.2",
        "@nextui-org/use-aria-button": "2.2.4",
        "@react-aria/button": "3.11.0",
        "@react-aria/focus": "3.19.0",
        "@react-aria/interactions": "3.22.5",
        "@react-aria/utils": "3.26.0",
        "@react-types/shared": "3.26.0"
      },
      "peerDependencies": {
        "@nextui-org/system": ">=2.4.0",
        "@nextui-org/theme": ">=2.4.0",
        "framer-motion": ">=11.5.6 || >=12.0.0-alpha.1",
        "react": ">=18 || >=19.0.0-rc.0",
        "react-dom": ">=18 || >=19.0.0-rc.0"
      }
    },
    "node_modules/@nextui-org/checkbox": {
      "version": "2.3.8",
      "license": "MIT",
      "dependencies": {
        "@nextui-org/form": "2.1.8",
        "@nextui-org/react-utils": "2.1.3",
        "@nextui-org/shared-utils": "2.1.2",
        "@nextui-org/use-callback-ref": "2.1.1",
        "@nextui-org/use-safe-layout-effect": "2.1.1",
        "@react-aria/checkbox": "3.15.0",
        "@react-aria/focus": "3.19.0",
        "@react-aria/interactions": "3.22.5",
        "@react-aria/utils": "3.26.0",
        "@react-aria/visually-hidden": "3.8.18",
        "@react-stately/checkbox": "3.6.10",
        "@react-stately/toggle": "3.8.0",
        "@react-types/checkbox": "3.9.0",
        "@react-types/shared": "3.26.0"
      },
      "peerDependencies": {
        "@nextui-org/system": ">=2.4.0",
        "@nextui-org/theme": ">=2.4.3",
        "react": ">=18 || >=19.0.0-rc.0",
        "react-dom": ">=18 || >=19.0.0-rc.0"
      }
    },
    "node_modules/@nextui-org/chip": {
      "version": "2.2.6",
      "license": "MIT",
      "dependencies": {
        "@nextui-org/react-utils": "2.1.3",
        "@nextui-org/shared-icons": "2.1.1",
        "@nextui-org/shared-utils": "2.1.2",
        "@react-aria/focus": "3.19.0",
        "@react-aria/interactions": "3.22.5",
        "@react-aria/utils": "3.26.0",
        "@react-types/checkbox": "3.9.0"
      },
      "peerDependencies": {
        "@nextui-org/system": ">=2.4.0",
        "@nextui-org/theme": ">=2.4.0",
        "react": ">=18 || >=19.0.0-rc.0",
        "react-dom": ">=18 || >=19.0.0-rc.0"
      }
    },
    "node_modules/@nextui-org/code": {
      "version": "2.2.6",
      "license": "MIT",
      "dependencies": {
        "@nextui-org/react-utils": "2.1.3",
        "@nextui-org/shared-utils": "2.1.2",
        "@nextui-org/system-rsc": "2.3.5"
      },
      "peerDependencies": {
        "@nextui-org/theme": ">=2.4.0",
        "react": ">=18 || >=19.0.0-rc.0",
        "react-dom": ">=18 || >=19.0.0-rc.0"
      }
    },
    "node_modules/@nextui-org/date-input": {
      "version": "2.3.8",
      "license": "MIT",
      "dependencies": {
        "@internationalized/date": "3.6.0",
        "@nextui-org/form": "2.1.8",
        "@nextui-org/react-utils": "2.1.3",
        "@nextui-org/shared-utils": "2.1.2",
        "@react-aria/datepicker": "3.12.0",
        "@react-aria/i18n": "3.12.4",
        "@react-aria/utils": "3.26.0",
        "@react-stately/datepicker": "3.11.0",
        "@react-types/datepicker": "3.9.0",
        "@react-types/shared": "3.26.0"
      },
      "peerDependencies": {
        "@nextui-org/system": ">=2.4.0",
        "@nextui-org/theme": ">=2.4.0",
        "react": ">=18 || >=19.0.0-rc.0",
        "react-dom": ">=18 || >=19.0.0-rc.0"
      }
    },
    "node_modules/@nextui-org/date-picker": {
      "version": "2.3.9",
      "license": "MIT",
      "dependencies": {
        "@internationalized/date": "3.6.0",
        "@nextui-org/aria-utils": "2.2.7",
        "@nextui-org/button": "2.2.9",
        "@nextui-org/calendar": "2.2.9",
        "@nextui-org/date-input": "2.3.8",
        "@nextui-org/form": "2.1.8",
        "@nextui-org/popover": "2.3.9",
        "@nextui-org/react-utils": "2.1.3",
        "@nextui-org/shared-icons": "2.1.1",
        "@nextui-org/shared-utils": "2.1.2",
        "@react-aria/datepicker": "3.12.0",
        "@react-aria/i18n": "3.12.4",
        "@react-aria/utils": "3.26.0",
        "@react-stately/datepicker": "3.11.0",
        "@react-stately/overlays": "3.6.12",
        "@react-stately/utils": "3.10.5",
        "@react-types/datepicker": "3.9.0",
        "@react-types/shared": "3.26.0"
      },
      "peerDependencies": {
        "@nextui-org/system": ">=2.4.0",
        "@nextui-org/theme": ">=2.4.0",
        "framer-motion": ">=11.5.6 || >=12.0.0-alpha.1",
        "react": ">=18 || >=19.0.0-rc.0",
        "react-dom": ">=18 || >=19.0.0-rc.0"
      }
    },
    "node_modules/@nextui-org/divider": {
      "version": "2.2.5",
      "license": "MIT",
      "dependencies": {
        "@nextui-org/react-rsc-utils": "2.1.1",
        "@nextui-org/shared-utils": "2.1.2",
        "@nextui-org/system-rsc": "2.3.5",
        "@react-types/shared": "3.26.0"
      },
      "peerDependencies": {
        "@nextui-org/theme": ">=2.4.0",
        "react": ">=18 || >=19.0.0-rc.0",
        "react-dom": ">=18 || >=19.0.0-rc.0"
      }
    },
    "node_modules/@nextui-org/dom-animation": {
      "version": "2.1.1",
      "license": "MIT",
      "peerDependencies": {
        "framer-motion": ">=11.5.6 || >=12.0.0-alpha.1"
      }
    },
    "node_modules/@nextui-org/drawer": {
      "version": "2.2.7",
      "license": "MIT",
      "dependencies": {
        "@nextui-org/framer-utils": "2.1.6",
        "@nextui-org/modal": "2.2.7",
        "@nextui-org/react-utils": "2.1.3",
        "@nextui-org/shared-utils": "2.1.2"
      },
      "peerDependencies": {
        "@nextui-org/system": ">=2.4.0",
        "@nextui-org/theme": ">=2.4.0",
        "react": ">=18 || >=19.0.0-rc.0",
        "react-dom": ">=18 || >=19.0.0-rc.0"
      }
    },
    "node_modules/@nextui-org/dropdown": {
      "version": "2.3.9",
      "license": "MIT",
      "dependencies": {
        "@nextui-org/aria-utils": "2.2.7",
        "@nextui-org/menu": "2.2.9",
        "@nextui-org/popover": "2.3.9",
        "@nextui-org/react-utils": "2.1.3",
        "@nextui-org/shared-utils": "2.1.2",
        "@react-aria/focus": "3.19.0",
        "@react-aria/menu": "3.16.0",
        "@react-aria/utils": "3.26.0",
        "@react-stately/menu": "3.9.0",
        "@react-types/menu": "3.9.13"
      },
      "peerDependencies": {
        "@nextui-org/system": ">=2.4.0",
        "@nextui-org/theme": ">=2.4.0",
        "framer-motion": ">=11.5.6 || >=12.0.0-alpha.1",
        "react": ">=18 || >=19.0.0-rc.0",
        "react-dom": ">=18 || >=19.0.0-rc.0"
      }
    },
    "node_modules/@nextui-org/form": {
      "version": "2.1.8",
      "license": "MIT",
      "dependencies": {
        "@nextui-org/react-utils": "2.1.3",
        "@nextui-org/shared-utils": "2.1.2",
        "@nextui-org/system": "2.4.6",
        "@nextui-org/theme": "2.4.5",
        "@react-aria/utils": "3.26.0",
        "@react-stately/form": "3.1.0",
        "@react-types/form": "3.7.8",
        "@react-types/shared": "3.26.0"
      },
      "peerDependencies": {
        "@nextui-org/system": ">=2.4.0",
        "@nextui-org/theme": ">=2.4.0",
        "react": ">=18",
        "react-dom": ">=18"
      }
    },
    "node_modules/@nextui-org/framer-utils": {
      "version": "2.1.6",
      "license": "MIT",
      "dependencies": {
        "@nextui-org/shared-utils": "2.1.2",
        "@nextui-org/system": "2.4.6",
        "@nextui-org/use-measure": "2.1.1"
      },
      "peerDependencies": {
        "framer-motion": ">=11.5.6 || >=12.0.0-alpha.1",
        "react": ">=18 || >=19.0.0-rc.0",
        "react-dom": ">=18 || >=19.0.0-rc.0"
      }
    },
    "node_modules/@nextui-org/image": {
      "version": "2.2.5",
      "license": "MIT",
      "dependencies": {
        "@nextui-org/react-utils": "2.1.3",
        "@nextui-org/shared-utils": "2.1.2",
        "@nextui-org/use-image": "2.1.2"
      },
      "peerDependencies": {
        "@nextui-org/system": ">=2.4.0",
        "@nextui-org/theme": ">=2.4.0",
        "react": ">=18 || >=19.0.0-rc.0",
        "react-dom": ">=18 || >=19.0.0-rc.0"
      }
    },
    "node_modules/@nextui-org/input": {
      "version": "2.4.8",
      "license": "MIT",
      "dependencies": {
        "@nextui-org/form": "2.1.8",
        "@nextui-org/react-utils": "2.1.3",
        "@nextui-org/shared-icons": "2.1.1",
        "@nextui-org/shared-utils": "2.1.2",
        "@nextui-org/use-safe-layout-effect": "2.1.1",
        "@react-aria/focus": "3.19.0",
        "@react-aria/interactions": "3.22.5",
        "@react-aria/textfield": "3.15.0",
        "@react-aria/utils": "3.26.0",
        "@react-stately/utils": "3.10.5",
        "@react-types/shared": "3.26.0",
        "@react-types/textfield": "3.10.0",
        "react-textarea-autosize": "^8.5.3"
      },
      "peerDependencies": {
        "@nextui-org/system": ">=2.4.0",
        "@nextui-org/theme": ">=2.4.0",
        "react": ">=18 || >=19.0.0-rc.0",
        "react-dom": ">=18 || >=19.0.0-rc.0"
      }
    },
    "node_modules/@nextui-org/input-otp": {
      "version": "2.1.8",
      "license": "MIT",
      "dependencies": {
        "@nextui-org/form": "2.1.8",
        "@nextui-org/react-utils": "2.1.3",
        "@nextui-org/shared-utils": "2.1.2",
        "@react-aria/focus": "3.19.0",
        "@react-aria/form": "3.0.11",
        "@react-aria/utils": "3.26.0",
        "@react-stately/form": "3.1.0",
        "@react-stately/utils": "3.10.5",
        "@react-types/textfield": "3.10.0",
        "input-otp": "1.4.1"
      },
      "peerDependencies": {
        "@nextui-org/system": ">=2.4.0",
        "@nextui-org/theme": ">=2.4.0",
        "react": ">=18",
        "react-dom": ">=18"
      }
    },
    "node_modules/@nextui-org/kbd": {
      "version": "2.2.6",
      "license": "MIT",
      "dependencies": {
        "@nextui-org/react-utils": "2.1.3",
        "@nextui-org/shared-utils": "2.1.2",
        "@nextui-org/system-rsc": "2.3.5",
        "@react-aria/utils": "3.26.0"
      },
      "peerDependencies": {
        "@nextui-org/theme": ">=2.4.0",
        "react": ">=18 || >=19.0.0-rc.0",
        "react-dom": ">=18 || >=19.0.0-rc.0"
      }
    },
    "node_modules/@nextui-org/link": {
      "version": "2.2.7",
      "license": "MIT",
      "dependencies": {
        "@nextui-org/react-utils": "2.1.3",
        "@nextui-org/shared-icons": "2.1.1",
        "@nextui-org/shared-utils": "2.1.2",
        "@nextui-org/use-aria-link": "2.2.5",
        "@react-aria/focus": "3.19.0",
        "@react-aria/link": "3.7.7",
        "@react-aria/utils": "3.26.0",
        "@react-types/link": "3.5.9"
      },
      "peerDependencies": {
        "@nextui-org/system": ">=2.4.0",
        "@nextui-org/theme": ">=2.4.0",
        "react": ">=18 || >=19.0.0-rc.0",
        "react-dom": ">=18 || >=19.0.0-rc.0"
      }
    },
    "node_modules/@nextui-org/listbox": {
      "version": "2.3.9",
      "license": "MIT",
      "dependencies": {
        "@nextui-org/aria-utils": "2.2.7",
        "@nextui-org/divider": "2.2.5",
        "@nextui-org/react-utils": "2.1.3",
        "@nextui-org/shared-utils": "2.1.2",
        "@nextui-org/use-is-mobile": "2.2.2",
        "@react-aria/focus": "3.19.0",
        "@react-aria/interactions": "3.22.5",
        "@react-aria/listbox": "3.13.6",
        "@react-aria/utils": "3.26.0",
        "@react-stately/list": "3.11.1",
        "@react-types/menu": "3.9.13",
        "@react-types/shared": "3.26.0",
        "@tanstack/react-virtual": "3.11.2"
      },
      "peerDependencies": {
        "@nextui-org/system": ">=2.4.0",
        "@nextui-org/theme": ">=2.4.0",
        "react": ">=18 || >=19.0.0-rc.0",
        "react-dom": ">=18 || >=19.0.0-rc.0"
      }
    },
    "node_modules/@nextui-org/menu": {
      "version": "2.2.9",
      "license": "MIT",
      "dependencies": {
        "@nextui-org/aria-utils": "2.2.7",
        "@nextui-org/divider": "2.2.5",
        "@nextui-org/react-utils": "2.1.3",
        "@nextui-org/shared-utils": "2.1.2",
        "@nextui-org/use-is-mobile": "2.2.2",
        "@react-aria/focus": "3.19.0",
        "@react-aria/interactions": "3.22.5",
        "@react-aria/menu": "3.16.0",
        "@react-aria/utils": "3.26.0",
        "@react-stately/menu": "3.9.0",
        "@react-stately/tree": "3.8.6",
        "@react-types/menu": "3.9.13",
        "@react-types/shared": "3.26.0"
      },
      "peerDependencies": {
        "@nextui-org/system": ">=2.4.0",
        "@nextui-org/theme": ">=2.4.0",
        "react": ">=18 || >=19.0.0-rc.0",
        "react-dom": ">=18 || >=19.0.0-rc.0"
      }
    },
    "node_modules/@nextui-org/modal": {
      "version": "2.2.7",
      "license": "MIT",
      "dependencies": {
        "@nextui-org/dom-animation": "2.1.1",
        "@nextui-org/framer-utils": "2.1.6",
        "@nextui-org/react-utils": "2.1.3",
        "@nextui-org/shared-icons": "2.1.1",
        "@nextui-org/shared-utils": "2.1.2",
        "@nextui-org/use-aria-button": "2.2.4",
        "@nextui-org/use-aria-modal-overlay": "2.2.3",
        "@nextui-org/use-disclosure": "2.2.2",
        "@nextui-org/use-draggable": "2.1.2",
        "@react-aria/dialog": "3.5.20",
        "@react-aria/focus": "3.19.0",
        "@react-aria/interactions": "3.22.5",
        "@react-aria/overlays": "3.24.0",
        "@react-aria/utils": "3.26.0",
        "@react-stately/overlays": "3.6.12",
        "@react-types/overlays": "3.8.11"
      },
      "peerDependencies": {
        "@nextui-org/system": ">=2.4.0",
        "@nextui-org/theme": ">=2.4.0",
        "framer-motion": ">=11.5.6 || >=12.0.0-alpha.1",
        "react": ">=18 || >=19.0.0-rc.0",
        "react-dom": ">=18 || >=19.0.0-rc.0"
      }
    },
    "node_modules/@nextui-org/navbar": {
      "version": "2.2.8",
      "license": "MIT",
      "dependencies": {
        "@nextui-org/dom-animation": "2.1.1",
        "@nextui-org/framer-utils": "2.1.6",
        "@nextui-org/react-utils": "2.1.3",
        "@nextui-org/shared-utils": "2.1.2",
        "@nextui-org/use-scroll-position": "2.1.1",
        "@react-aria/button": "3.11.0",
        "@react-aria/focus": "3.19.0",
        "@react-aria/interactions": "3.22.5",
        "@react-aria/overlays": "3.24.0",
        "@react-aria/utils": "3.26.0",
        "@react-stately/toggle": "3.8.0",
        "@react-stately/utils": "3.10.5"
      },
      "peerDependencies": {
        "@nextui-org/system": ">=2.4.0",
        "@nextui-org/theme": ">=2.4.0",
        "framer-motion": ">=11.5.6 || >=12.0.0-alpha.1",
        "react": ">=18 || >=19.0.0-rc.0",
        "react-dom": ">=18 || >=19.0.0-rc.0"
      }
    },
    "node_modules/@nextui-org/pagination": {
      "version": "2.2.8",
      "license": "MIT",
      "dependencies": {
        "@nextui-org/react-utils": "2.1.3",
        "@nextui-org/shared-icons": "2.1.1",
        "@nextui-org/shared-utils": "2.1.2",
        "@nextui-org/use-intersection-observer": "2.2.2",
        "@nextui-org/use-pagination": "2.2.3",
        "@react-aria/focus": "3.19.0",
        "@react-aria/i18n": "3.12.4",
        "@react-aria/interactions": "3.22.5",
        "@react-aria/utils": "3.26.0",
        "scroll-into-view-if-needed": "3.0.10"
      },
      "peerDependencies": {
        "@nextui-org/system": ">=2.4.0",
        "@nextui-org/theme": ">=2.4.0",
        "react": ">=18 || >=19.0.0-rc.0",
        "react-dom": ">=18 || >=19.0.0-rc.0"
      }
    },
    "node_modules/@nextui-org/popover": {
      "version": "2.3.9",
      "license": "MIT",
      "dependencies": {
        "@nextui-org/aria-utils": "2.2.7",
        "@nextui-org/button": "2.2.9",
        "@nextui-org/dom-animation": "2.1.1",
        "@nextui-org/framer-utils": "2.1.6",
        "@nextui-org/react-utils": "2.1.3",
        "@nextui-org/shared-utils": "2.1.2",
        "@nextui-org/use-aria-button": "2.2.4",
        "@nextui-org/use-safe-layout-effect": "2.1.1",
        "@react-aria/dialog": "3.5.20",
        "@react-aria/focus": "3.19.0",
        "@react-aria/interactions": "3.22.5",
        "@react-aria/overlays": "3.24.0",
        "@react-aria/utils": "3.26.0",
        "@react-stately/overlays": "3.6.12",
        "@react-types/button": "3.10.1",
        "@react-types/overlays": "3.8.11"
      },
      "peerDependencies": {
        "@nextui-org/system": ">=2.4.0",
        "@nextui-org/theme": ">=2.4.0",
        "framer-motion": ">=11.5.6 || >=12.0.0-alpha.1",
        "react": ">=18 || >=19.0.0-rc.0",
        "react-dom": ">=18 || >=19.0.0-rc.0"
      }
    },
    "node_modules/@nextui-org/progress": {
      "version": "2.2.6",
      "license": "MIT",
      "dependencies": {
        "@nextui-org/react-utils": "2.1.3",
        "@nextui-org/shared-utils": "2.1.2",
        "@nextui-org/use-is-mounted": "2.1.1",
        "@react-aria/i18n": "3.12.4",
        "@react-aria/progress": "3.4.18",
        "@react-aria/utils": "3.26.0",
        "@react-types/progress": "3.5.8"
      },
      "peerDependencies": {
        "@nextui-org/system": ">=2.4.0",
        "@nextui-org/theme": ">=2.4.0",
        "react": ">=18 || >=19.0.0-rc.0",
        "react-dom": ">=18 || >=19.0.0-rc.0"
      }
    },
    "node_modules/@nextui-org/radio": {
      "version": "2.3.8",
      "license": "MIT",
      "dependencies": {
        "@nextui-org/form": "2.1.8",
        "@nextui-org/react-utils": "2.1.3",
        "@nextui-org/shared-utils": "2.1.2",
        "@react-aria/focus": "3.19.0",
        "@react-aria/interactions": "3.22.5",
        "@react-aria/radio": "3.10.10",
        "@react-aria/utils": "3.26.0",
        "@react-aria/visually-hidden": "3.8.18",
        "@react-stately/radio": "3.10.9",
        "@react-types/radio": "3.8.5",
        "@react-types/shared": "3.26.0"
      },
      "peerDependencies": {
        "@nextui-org/system": ">=2.4.0",
        "@nextui-org/theme": ">=2.4.3",
        "react": ">=18 || >=19.0.0-rc.0",
        "react-dom": ">=18 || >=19.0.0-rc.0"
      }
    },
    "node_modules/@nextui-org/react": {
      "version": "2.6.11",
      "license": "MIT",
      "dependencies": {
        "@nextui-org/accordion": "2.2.7",
        "@nextui-org/alert": "2.2.9",
        "@nextui-org/autocomplete": "2.3.9",
        "@nextui-org/avatar": "2.2.6",
        "@nextui-org/badge": "2.2.5",
        "@nextui-org/breadcrumbs": "2.2.6",
        "@nextui-org/button": "2.2.9",
        "@nextui-org/calendar": "2.2.9",
        "@nextui-org/card": "2.2.9",
        "@nextui-org/checkbox": "2.3.8",
        "@nextui-org/chip": "2.2.6",
        "@nextui-org/code": "2.2.6",
        "@nextui-org/date-input": "2.3.8",
        "@nextui-org/date-picker": "2.3.9",
        "@nextui-org/divider": "2.2.5",
        "@nextui-org/drawer": "2.2.7",
        "@nextui-org/dropdown": "2.3.9",
        "@nextui-org/form": "2.1.8",
        "@nextui-org/framer-utils": "2.1.6",
        "@nextui-org/image": "2.2.5",
        "@nextui-org/input": "2.4.8",
        "@nextui-org/input-otp": "2.1.8",
        "@nextui-org/kbd": "2.2.6",
        "@nextui-org/link": "2.2.7",
        "@nextui-org/listbox": "2.3.9",
        "@nextui-org/menu": "2.2.9",
        "@nextui-org/modal": "2.2.7",
        "@nextui-org/navbar": "2.2.8",
        "@nextui-org/pagination": "2.2.8",
        "@nextui-org/popover": "2.3.9",
        "@nextui-org/progress": "2.2.6",
        "@nextui-org/radio": "2.3.8",
        "@nextui-org/ripple": "2.2.7",
        "@nextui-org/scroll-shadow": "2.3.5",
        "@nextui-org/select": "2.4.9",
        "@nextui-org/skeleton": "2.2.5",
        "@nextui-org/slider": "2.4.7",
        "@nextui-org/snippet": "2.2.10",
        "@nextui-org/spacer": "2.2.6",
        "@nextui-org/spinner": "2.2.6",
        "@nextui-org/switch": "2.2.8",
        "@nextui-org/system": "2.4.6",
        "@nextui-org/table": "2.2.8",
        "@nextui-org/tabs": "2.2.7",
        "@nextui-org/theme": "2.4.5",
        "@nextui-org/tooltip": "2.2.7",
        "@nextui-org/user": "2.2.6",
        "@react-aria/visually-hidden": "3.8.18"
      },
      "peerDependencies": {
        "framer-motion": ">=11.5.6 || >=12.0.0-alpha.1",
        "react": ">=18 || >=19.0.0-rc.0",
        "react-dom": ">=18 || >=19.0.0-rc.0"
      }
    },
    "node_modules/@nextui-org/react-rsc-utils": {
      "version": "2.1.1",
      "license": "MIT",
      "peerDependencies": {
        "react": ">=18 || >=19.0.0-rc.0"
      }
    },
    "node_modules/@nextui-org/react-utils": {
      "version": "2.1.3",
      "license": "MIT",
      "dependencies": {
        "@nextui-org/react-rsc-utils": "2.1.1",
        "@nextui-org/shared-utils": "2.1.2"
      },
      "peerDependencies": {
        "react": ">=18 || >=19.0.0-rc.0"
      }
    },
    "node_modules/@nextui-org/ripple": {
      "version": "2.2.7",
      "license": "MIT",
      "dependencies": {
        "@nextui-org/dom-animation": "2.1.1",
        "@nextui-org/react-utils": "2.1.3",
        "@nextui-org/shared-utils": "2.1.2"
      },
      "peerDependencies": {
        "@nextui-org/system": ">=2.4.0",
        "@nextui-org/theme": ">=2.4.0",
        "framer-motion": ">=11.5.6 || >=12.0.0-alpha.1",
        "react": ">=18 || >=19.0.0-rc.0",
        "react-dom": ">=18 || >=19.0.0-rc.0"
      }
    },
    "node_modules/@nextui-org/scroll-shadow": {
      "version": "2.3.5",
      "license": "MIT",
      "dependencies": {
        "@nextui-org/react-utils": "2.1.3",
        "@nextui-org/shared-utils": "2.1.2",
        "@nextui-org/use-data-scroll-overflow": "2.2.2"
      },
      "peerDependencies": {
        "@nextui-org/system": ">=2.4.0",
        "@nextui-org/theme": ">=2.4.0",
        "react": ">=18 || >=19.0.0-rc.0",
        "react-dom": ">=18 || >=19.0.0-rc.0"
      }
    },
    "node_modules/@nextui-org/select": {
      "version": "2.4.9",
      "license": "MIT",
      "dependencies": {
        "@nextui-org/aria-utils": "2.2.7",
        "@nextui-org/form": "2.1.8",
        "@nextui-org/listbox": "2.3.9",
        "@nextui-org/popover": "2.3.9",
        "@nextui-org/react-utils": "2.1.3",
        "@nextui-org/scroll-shadow": "2.3.5",
        "@nextui-org/shared-icons": "2.1.1",
        "@nextui-org/shared-utils": "2.1.2",
        "@nextui-org/spinner": "2.2.6",
        "@nextui-org/use-aria-button": "2.2.4",
        "@nextui-org/use-aria-multiselect": "2.4.3",
        "@nextui-org/use-safe-layout-effect": "2.1.1",
        "@react-aria/focus": "3.19.0",
        "@react-aria/form": "3.0.11",
        "@react-aria/interactions": "3.22.5",
        "@react-aria/utils": "3.26.0",
        "@react-aria/visually-hidden": "3.8.18",
        "@react-types/shared": "3.26.0",
        "@tanstack/react-virtual": "3.11.2"
      },
      "peerDependencies": {
        "@nextui-org/system": ">=2.4.0",
        "@nextui-org/theme": ">=2.4.0",
        "framer-motion": ">=11.5.6 || >=12.0.0-alpha.1",
        "react": ">=18 || >=19.0.0-rc.0",
        "react-dom": ">=18 || >=19.0.0-rc.0"
      }
    },
    "node_modules/@nextui-org/shared-icons": {
      "version": "2.1.1",
      "license": "MIT",
      "peerDependencies": {
        "react": ">=18 || >=19.0.0-rc.0"
      }
    },
    "node_modules/@nextui-org/shared-utils": {
      "version": "2.1.2",
      "license": "MIT"
    },
    "node_modules/@nextui-org/skeleton": {
      "version": "2.2.5",
      "license": "MIT",
      "dependencies": {
        "@nextui-org/react-utils": "2.1.3",
        "@nextui-org/shared-utils": "2.1.2"
      },
      "peerDependencies": {
        "@nextui-org/system": ">=2.4.0",
        "@nextui-org/theme": ">=2.4.0",
        "react": ">=18 || >=19.0.0-rc.0",
        "react-dom": ">=18 || >=19.0.0-rc.0"
      }
    },
    "node_modules/@nextui-org/slider": {
      "version": "2.4.7",
      "license": "MIT",
      "dependencies": {
        "@nextui-org/react-utils": "2.1.3",
        "@nextui-org/shared-utils": "2.1.2",
        "@nextui-org/tooltip": "2.2.7",
        "@react-aria/focus": "3.19.0",
        "@react-aria/i18n": "3.12.4",
        "@react-aria/interactions": "3.22.5",
        "@react-aria/slider": "3.7.14",
        "@react-aria/utils": "3.26.0",
        "@react-aria/visually-hidden": "3.8.18",
        "@react-stately/slider": "3.6.0"
      },
      "peerDependencies": {
        "@nextui-org/system": ">=2.4.0",
        "@nextui-org/theme": ">=2.4.0",
        "react": ">=18 || >=19.0.0-rc.0",
        "react-dom": ">=18 || >=19.0.0-rc.0"
      }
    },
    "node_modules/@nextui-org/snippet": {
      "version": "2.2.10",
      "license": "MIT",
      "dependencies": {
        "@nextui-org/button": "2.2.9",
        "@nextui-org/react-utils": "2.1.3",
        "@nextui-org/shared-icons": "2.1.1",
        "@nextui-org/shared-utils": "2.1.2",
        "@nextui-org/tooltip": "2.2.7",
        "@nextui-org/use-clipboard": "2.1.2",
        "@react-aria/focus": "3.19.0",
        "@react-aria/utils": "3.26.0"
      },
      "peerDependencies": {
        "@nextui-org/system": ">=2.4.0",
        "@nextui-org/theme": ">=2.4.0",
        "framer-motion": ">=11.5.6 || >=12.0.0-alpha.1",
        "react": ">=18 || >=19.0.0-rc.0",
        "react-dom": ">=18 || >=19.0.0-rc.0"
      }
    },
    "node_modules/@nextui-org/spacer": {
      "version": "2.2.6",
      "license": "MIT",
      "dependencies": {
        "@nextui-org/react-utils": "2.1.3",
        "@nextui-org/shared-utils": "2.1.2",
        "@nextui-org/system-rsc": "2.3.5"
      },
      "peerDependencies": {
        "@nextui-org/theme": ">=2.4.0",
        "react": ">=18 || >=19.0.0-rc.0",
        "react-dom": ">=18 || >=19.0.0-rc.0"
      }
    },
    "node_modules/@nextui-org/spinner": {
      "version": "2.2.6",
      "license": "MIT",
      "dependencies": {
        "@nextui-org/react-utils": "2.1.3",
        "@nextui-org/shared-utils": "2.1.2",
        "@nextui-org/system-rsc": "2.3.5"
      },
      "peerDependencies": {
        "@nextui-org/theme": ">=2.4.0",
        "react": ">=18 || >=19.0.0-rc.0",
        "react-dom": ">=18 || >=19.0.0-rc.0"
      }
    },
    "node_modules/@nextui-org/switch": {
      "version": "2.2.8",
      "license": "MIT",
      "dependencies": {
        "@nextui-org/react-utils": "2.1.3",
        "@nextui-org/shared-utils": "2.1.2",
        "@nextui-org/use-safe-layout-effect": "2.1.1",
        "@react-aria/focus": "3.19.0",
        "@react-aria/interactions": "3.22.5",
        "@react-aria/switch": "3.6.10",
        "@react-aria/utils": "3.26.0",
        "@react-aria/visually-hidden": "3.8.18",
        "@react-stately/toggle": "3.8.0",
        "@react-types/shared": "3.26.0"
      },
      "peerDependencies": {
        "@nextui-org/system": ">=2.4.0",
        "@nextui-org/theme": ">=2.4.3",
        "react": ">=18 || >=19.0.0-rc.0",
        "react-dom": ">=18 || >=19.0.0-rc.0"
      }
    },
    "node_modules/@nextui-org/system": {
      "version": "2.4.6",
      "license": "MIT",
      "dependencies": {
        "@internationalized/date": "3.6.0",
        "@nextui-org/react-utils": "2.1.3",
        "@nextui-org/system-rsc": "2.3.5",
        "@react-aria/i18n": "3.12.4",
        "@react-aria/overlays": "3.24.0",
        "@react-aria/utils": "3.26.0",
        "@react-stately/utils": "3.10.5",
        "@react-types/datepicker": "3.9.0"
      },
      "peerDependencies": {
        "framer-motion": ">=11.5.6 || >=12.0.0-alpha.1",
        "react": ">=18 || >=19.0.0-rc.0",
        "react-dom": ">=18 || >=19.0.0-rc.0"
      }
    },
    "node_modules/@nextui-org/system-rsc": {
      "version": "2.3.5",
      "license": "MIT",
      "dependencies": {
        "@react-types/shared": "3.26.0",
        "clsx": "^1.2.1"
      },
      "peerDependencies": {
        "@nextui-org/theme": ">=2.4.0",
        "react": ">=18 || >=19.0.0-rc.0"
      }
    },
    "node_modules/@nextui-org/system-rsc/node_modules/clsx": {
      "version": "1.2.1",
      "license": "MIT",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/@nextui-org/table": {
      "version": "2.2.8",
      "license": "MIT",
      "dependencies": {
        "@nextui-org/checkbox": "2.3.8",
        "@nextui-org/react-utils": "2.1.3",
        "@nextui-org/shared-icons": "2.1.1",
        "@nextui-org/shared-utils": "2.1.2",
        "@nextui-org/spacer": "2.2.6",
        "@react-aria/focus": "3.19.0",
        "@react-aria/interactions": "3.22.5",
        "@react-aria/table": "3.16.0",
        "@react-aria/utils": "3.26.0",
        "@react-aria/visually-hidden": "3.8.18",
        "@react-stately/table": "3.13.0",
        "@react-stately/virtualizer": "4.2.0",
        "@react-types/grid": "3.2.10",
        "@react-types/table": "3.10.3"
      },
      "peerDependencies": {
        "@nextui-org/system": ">=2.4.0",
        "@nextui-org/theme": ">=2.4.0",
        "react": ">=18 || >=19.0.0-rc.0",
        "react-dom": ">=18 || >=19.0.0-rc.0"
      }
    },
    "node_modules/@nextui-org/tabs": {
      "version": "2.2.7",
      "license": "MIT",
      "dependencies": {
        "@nextui-org/aria-utils": "2.2.7",
        "@nextui-org/framer-utils": "2.1.6",
        "@nextui-org/react-utils": "2.1.3",
        "@nextui-org/shared-utils": "2.1.2",
        "@nextui-org/use-is-mounted": "2.1.1",
        "@nextui-org/use-update-effect": "2.1.1",
        "@react-aria/focus": "3.19.0",
        "@react-aria/interactions": "3.22.5",
        "@react-aria/tabs": "3.9.8",
        "@react-aria/utils": "3.26.0",
        "@react-stately/tabs": "3.7.0",
        "@react-types/shared": "3.26.0",
        "@react-types/tabs": "3.3.11",
        "scroll-into-view-if-needed": "3.0.10"
      },
      "peerDependencies": {
        "@nextui-org/system": ">=2.4.0",
        "@nextui-org/theme": ">=2.4.0",
        "framer-motion": ">=11.5.6 || >=12.0.0-alpha.1",
        "react": ">=18 || >=19.0.0-rc.0",
        "react-dom": ">=18 || >=19.0.0-rc.0"
      }
    },
    "node_modules/@nextui-org/theme": {
      "version": "2.4.5",
      "license": "MIT",
      "dependencies": {
        "@nextui-org/shared-utils": "2.1.2",
        "clsx": "^1.2.1",
        "color": "^4.2.3",
        "color2k": "^2.0.2",
        "deepmerge": "4.3.1",
        "flat": "^5.0.2",
        "tailwind-merge": "^2.5.2",
        "tailwind-variants": "^0.1.20"
      },
      "peerDependencies": {
        "tailwindcss": ">=3.4.0"
      }
    },
    "node_modules/@nextui-org/theme/node_modules/clsx": {
      "version": "1.2.1",
      "license": "MIT",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/@nextui-org/theme/node_modules/deepmerge": {
      "version": "4.3.1",
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/@nextui-org/tooltip": {
      "version": "2.2.7",
      "license": "MIT",
      "dependencies": {
        "@nextui-org/aria-utils": "2.2.7",
        "@nextui-org/dom-animation": "2.1.1",
        "@nextui-org/framer-utils": "2.1.6",
        "@nextui-org/react-utils": "2.1.3",
        "@nextui-org/shared-utils": "2.1.2",
        "@nextui-org/use-safe-layout-effect": "2.1.1",
        "@react-aria/interactions": "3.22.5",
        "@react-aria/overlays": "3.24.0",
        "@react-aria/tooltip": "3.7.10",
        "@react-aria/utils": "3.26.0",
        "@react-stately/tooltip": "3.5.0",
        "@react-types/overlays": "3.8.11",
        "@react-types/tooltip": "3.4.13"
      },
      "peerDependencies": {
        "@nextui-org/system": ">=2.4.0",
        "@nextui-org/theme": ">=2.4.0",
        "framer-motion": ">=11.5.6 || >=12.0.0-alpha.1",
        "react": ">=18 || >=19.0.0-rc.0",
        "react-dom": ">=18 || >=19.0.0-rc.0"
      }
    },
    "node_modules/@nextui-org/use-aria-accordion": {
      "version": "2.2.2",
      "license": "MIT",
      "dependencies": {
        "@react-aria/button": "3.11.0",
        "@react-aria/focus": "3.19.0",
        "@react-aria/selection": "3.21.0",
        "@react-aria/utils": "3.26.0",
        "@react-stately/tree": "3.8.6",
        "@react-types/accordion": "3.0.0-alpha.25",
        "@react-types/shared": "3.26.0"
      },
      "peerDependencies": {
        "react": ">=18 || >=19.0.0-rc.0"
      }
    },
    "node_modules/@nextui-org/use-aria-button": {
      "version": "2.2.4",
      "license": "MIT",
      "dependencies": {
        "@nextui-org/shared-utils": "2.1.2",
        "@react-aria/focus": "3.19.0",
        "@react-aria/interactions": "3.22.5",
        "@react-aria/utils": "3.26.0",
        "@react-types/button": "3.10.1",
        "@react-types/shared": "3.26.0"
      },
      "peerDependencies": {
        "react": ">=18 || >=19.0.0-rc.0"
      }
    },
    "node_modules/@nextui-org/use-aria-link": {
      "version": "2.2.5",
      "license": "MIT",
      "dependencies": {
        "@nextui-org/shared-utils": "2.1.2",
        "@react-aria/focus": "3.19.0",
        "@react-aria/interactions": "3.22.5",
        "@react-aria/utils": "3.26.0",
        "@react-types/link": "3.5.9",
        "@react-types/shared": "3.26.0"
      },
      "peerDependencies": {
        "react": ">=18 || >=19.0.0-rc.0"
      }
    },
    "node_modules/@nextui-org/use-aria-modal-overlay": {
      "version": "2.2.3",
      "license": "MIT",
      "dependencies": {
        "@react-aria/overlays": "3.24.0",
        "@react-aria/utils": "3.26.0",
        "@react-stately/overlays": "3.6.12",
        "@react-types/shared": "3.26.0"
      },
      "peerDependencies": {
        "react": ">=18 || >=19.0.0-rc.0",
        "react-dom": ">=18 || >=19.0.0-rc.0"
      }
    },
    "node_modules/@nextui-org/use-aria-multiselect": {
      "version": "2.4.3",
      "license": "MIT",
      "dependencies": {
        "@react-aria/i18n": "3.12.4",
        "@react-aria/interactions": "3.22.5",
        "@react-aria/label": "3.7.13",
        "@react-aria/listbox": "3.13.6",
        "@react-aria/menu": "3.16.0",
        "@react-aria/selection": "3.21.0",
        "@react-aria/utils": "3.26.0",
        "@react-stately/form": "3.1.0",
        "@react-stately/list": "3.11.1",
        "@react-stately/menu": "3.9.0",
        "@react-types/button": "3.10.1",
        "@react-types/overlays": "3.8.11",
        "@react-types/select": "3.9.8",
        "@react-types/shared": "3.26.0"
      },
      "peerDependencies": {
        "react": ">=18 || >=19.0.0-rc.0",
        "react-dom": ">=18 || >=19.0.0-rc.0"
      }
    },
    "node_modules/@nextui-org/use-callback-ref": {
      "version": "2.1.1",
      "license": "MIT",
      "dependencies": {
        "@nextui-org/use-safe-layout-effect": "2.1.1"
      },
      "peerDependencies": {
        "react": ">=18 || >=19.0.0-rc.0"
      }
    },
    "node_modules/@nextui-org/use-clipboard": {
      "version": "2.1.2",
      "license": "MIT",
      "peerDependencies": {
        "react": ">=18 || >=19.0.0-rc.0"
      }
    },
    "node_modules/@nextui-org/use-data-scroll-overflow": {
      "version": "2.2.2",
      "license": "MIT",
      "dependencies": {
        "@nextui-org/shared-utils": "2.1.2"
      },
      "peerDependencies": {
        "react": ">=18 || >=19.0.0-rc.0"
      }
    },
    "node_modules/@nextui-org/use-disclosure": {
      "version": "2.2.2",
      "license": "MIT",
      "dependencies": {
        "@nextui-org/use-callback-ref": "2.1.1",
        "@react-aria/utils": "3.26.0",
        "@react-stately/utils": "3.10.5"
      },
      "peerDependencies": {
        "react": ">=18 || >=19.0.0-rc.0"
      }
    },
    "node_modules/@nextui-org/use-draggable": {
      "version": "2.1.2",
      "license": "MIT",
      "dependencies": {
        "@react-aria/interactions": "3.22.5"
      },
      "peerDependencies": {
        "react": ">=18 || >=19.0.0-rc.0"
      }
    },
    "node_modules/@nextui-org/use-image": {
      "version": "2.1.2",
      "license": "MIT",
      "dependencies": {
        "@nextui-org/react-utils": "2.1.3",
        "@nextui-org/use-safe-layout-effect": "2.1.1"
      },
      "peerDependencies": {
        "react": ">=18 || >=19.0.0-rc.0"
      }
    },
    "node_modules/@nextui-org/use-intersection-observer": {
      "version": "2.2.2",
      "license": "MIT",
      "dependencies": {
        "@react-aria/interactions": "3.22.5",
        "@react-aria/ssr": "3.9.7",
        "@react-aria/utils": "3.26.0",
        "@react-types/shared": "3.26.0"
      },
      "peerDependencies": {
        "react": ">=18 || >=19.0.0-rc.0"
      }
    },
    "node_modules/@nextui-org/use-is-mobile": {
      "version": "2.2.2",
      "license": "MIT",
      "dependencies": {
        "@react-aria/ssr": "3.9.7"
      },
      "peerDependencies": {
        "react": ">=18 || >=19.0.0-rc.0"
      }
    },
    "node_modules/@nextui-org/use-is-mounted": {
      "version": "2.1.1",
      "license": "MIT",
      "peerDependencies": {
        "react": ">=18 || >=19.0.0-rc.0"
      }
    },
    "node_modules/@nextui-org/use-measure": {
      "version": "2.1.1",
      "license": "MIT",
      "peerDependencies": {
        "react": ">=18 || >=19.0.0-rc.0"
      }
    },
    "node_modules/@nextui-org/use-pagination": {
      "version": "2.2.3",
      "license": "MIT",
      "dependencies": {
        "@nextui-org/shared-utils": "2.1.2",
        "@react-aria/i18n": "3.12.4"
      },
      "peerDependencies": {
        "react": ">=18 || >=19.0.0-rc.0"
      }
    },
    "node_modules/@nextui-org/use-safe-layout-effect": {
      "version": "2.1.1",
      "license": "MIT",
      "peerDependencies": {
        "react": ">=18 || >=19.0.0-rc.0"
      }
    },
    "node_modules/@nextui-org/use-scroll-position": {
      "version": "2.1.1",
      "license": "MIT",
      "peerDependencies": {
        "react": ">=18 || >=19.0.0-rc.0"
      }
    },
    "node_modules/@nextui-org/use-update-effect": {
      "version": "2.1.1",
      "license": "MIT",
      "peerDependencies": {
        "react": ">=18 || >=19.0.0-rc.0"
      }
    },
    "node_modules/@nextui-org/user": {
      "version": "2.2.6",
      "license": "MIT",
      "dependencies": {
        "@nextui-org/avatar": "2.2.6",
        "@nextui-org/react-utils": "2.1.3",
        "@nextui-org/shared-utils": "2.1.2",
        "@react-aria/focus": "3.19.0",
        "@react-aria/utils": "3.26.0"
      },
      "peerDependencies": {
        "@nextui-org/system": ">=2.4.0",
        "@nextui-org/theme": ">=2.4.0",
        "react": ">=18 || >=19.0.0-rc.0",
        "react-dom": ">=18 || >=19.0.0-rc.0"
      }
    },
    "node_modules/@nodelib/fs.scandir": {
      "version": "2.1.5",
      "license": "MIT",
      "dependencies": {
        "@nodelib/fs.stat": "2.0.5",
        "run-parallel": "^1.1.9"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/@nodelib/fs.stat": {
      "version": "2.0.5",
      "license": "MIT",
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/@nodelib/fs.walk": {
      "version": "1.2.8",
      "license": "MIT",
      "dependencies": {
        "@nodelib/fs.scandir": "2.1.5",
        "fastq": "^1.6.0"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/@nolyfill/is-core-module": {
      "version": "1.0.39",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=12.4.0"
      }
    },
    "node_modules/@peculiar/asn1-schema": {
      "version": "2.6.0",
      "license": "MIT",
      "dependencies": {
        "asn1js": "^3.0.6",
        "pvtsutils": "^1.3.6",
        "tslib": "^2.8.1"
      }
    },
    "node_modules/@peculiar/asn1-schema/node_modules/tslib": {
      "version": "2.8.1",
      "license": "0BSD"
    },
    "node_modules/@peculiar/json-schema": {
      "version": "1.1.12",
      "license": "MIT",
      "dependencies": {
        "tslib": "^2.0.0"
      },
      "engines": {
        "node": ">=8.0.0"
      }
    },
    "node_modules/@peculiar/webcrypto": {
      "version": "1.4.1",
      "license": "MIT",
      "dependencies": {
        "@peculiar/asn1-schema": "^2.3.0",
        "@peculiar/json-schema": "^1.1.12",
        "pvtsutils": "^1.3.2",
        "tslib": "^2.4.1",
        "webcrypto-core": "^1.7.4"
      },
      "engines": {
        "node": ">=10.12.0"
      }
    },
    "node_modules/@pkgjs/parseargs": {
      "version": "0.11.0",
      "dev": true,
      "license": "MIT",
      "optional": true,
      "engines": {
        "node": ">=14"
      }
    },
    "node_modules/@popperjs/core": {
      "version": "2.11.8",
      "license": "MIT",
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/popperjs"
      }
    },
    "node_modules/@prisma/client": {
      "version": "5.19.1",
      "resolved": "https://registry.npmjs.org/@prisma/client/-/client-5.19.1.tgz",
      "integrity": "sha512-x30GFguInsgt+4z5I4WbkZP2CGpotJMUXy+Gl/aaUjHn2o1DnLYNTA+q9XdYmAQZM8fIIkvUiA2NpgosM3fneg==",
      "hasInstallScript": true,
      "license": "Apache-2.0",
      "engines": {
        "node": ">=16.13"
      },
      "peerDependencies": {
        "prisma": "*"
      },
      "peerDependenciesMeta": {
        "prisma": {
          "optional": true
        }
      }
    },
    "node_modules/@prisma/debug": {
      "version": "5.19.1",
      "resolved": "https://registry.npmjs.org/@prisma/debug/-/debug-5.19.1.tgz",
      "integrity": "sha512-lAG6A6QnG2AskAukIEucYJZxxcSqKsMK74ZFVfCTOM/7UiyJQi48v6TQ47d6qKG3LbMslqOvnTX25dj/qvclGg==",
      "devOptional": true,
      "license": "Apache-2.0"
    },
    "node_modules/@prisma/engines": {
      "version": "5.19.1",
      "resolved": "https://registry.npmjs.org/@prisma/engines/-/engines-5.19.1.tgz",
      "integrity": "sha512-kR/PoxZDrfUmbbXqqb8SlBBgCjvGaJYMCOe189PEYzq9rKqitQ2fvT/VJ8PDSe8tTNxhc2KzsCfCAL+Iwm/7Cg==",
      "devOptional": true,
      "hasInstallScript": true,
      "license": "Apache-2.0",
      "dependencies": {
        "@prisma/debug": "5.19.1",
        "@prisma/engines-version": "5.19.1-2.69d742ee20b815d88e17e54db4a2a7a3b30324e3",
        "@prisma/fetch-engine": "5.19.1",
        "@prisma/get-platform": "5.19.1"
      }
    },
    "node_modules/@prisma/engines-version": {
      "version": "5.19.1-2.69d742ee20b815d88e17e54db4a2a7a3b30324e3",
      "resolved": "https://registry.npmjs.org/@prisma/engines-version/-/engines-version-5.19.1-2.69d742ee20b815d88e17e54db4a2a7a3b30324e3.tgz",
      "integrity": "sha512-xR6rt+z5LnNqTP5BBc+8+ySgf4WNMimOKXRn6xfNRDSpHvbOEmd7+qAOmzCrddEc4Cp8nFC0txU14dstjH7FXA==",
      "devOptional": true,
      "license": "Apache-2.0"
    },
    "node_modules/@prisma/fetch-engine": {
      "version": "5.19.1",
      "resolved": "https://registry.npmjs.org/@prisma/fetch-engine/-/fetch-engine-5.19.1.tgz",
      "integrity": "sha512-pCq74rtlOVJfn4pLmdJj+eI4P7w2dugOnnTXpRilP/6n5b2aZiA4ulJlE0ddCbTPkfHmOL9BfaRgA8o+1rfdHw==",
      "devOptional": true,
      "license": "Apache-2.0",
      "dependencies": {
        "@prisma/debug": "5.19.1",
        "@prisma/engines-version": "5.19.1-2.69d742ee20b815d88e17e54db4a2a7a3b30324e3",
        "@prisma/get-platform": "5.19.1"
      }
    },
    "node_modules/@prisma/get-platform": {
      "version": "5.19.1",
      "resolved": "https://registry.npmjs.org/@prisma/get-platform/-/get-platform-5.19.1.tgz",
      "integrity": "sha512-sCeoJ+7yt0UjnR+AXZL7vXlg5eNxaFOwC23h0KvW1YIXUoa7+W2ZcAUhoEQBmJTW4GrFqCuZ8YSP0mkDa4k3Zg==",
      "devOptional": true,
      "license": "Apache-2.0",
      "dependencies": {
        "@prisma/debug": "5.19.1"
      }
    },
    "node_modules/@react-aria/breadcrumbs": {
      "version": "3.5.19",
      "license": "Apache-2.0",
      "dependencies": {
        "@react-aria/i18n": "^3.12.4",
        "@react-aria/link": "^3.7.7",
        "@react-aria/utils": "^3.26.0",
        "@react-types/breadcrumbs": "^3.7.9",
        "@react-types/shared": "^3.26.0",
        "@swc/helpers": "^0.5.0"
      },
      "peerDependencies": {
        "react": "^16.8.0 || ^17.0.0-rc.1 || ^18.0.0 || ^19.0.0-rc.1"
      }
    },
    "node_modules/@react-aria/button": {
      "version": "3.11.0",
      "license": "Apache-2.0",
      "dependencies": {
        "@react-aria/focus": "^3.19.0",
        "@react-aria/interactions": "^3.22.5",
        "@react-aria/toolbar": "3.0.0-beta.11",
        "@react-aria/utils": "^3.26.0",
        "@react-stately/toggle": "^3.8.0",
        "@react-types/button": "^3.10.1",
        "@react-types/shared": "^3.26.0",
        "@swc/helpers": "^0.5.0"
      },
      "peerDependencies": {
        "react": "^16.8.0 || ^17.0.0-rc.1 || ^18.0.0 || ^19.0.0-rc.1"
      }
    },
    "node_modules/@react-aria/calendar": {
      "version": "3.6.0",
      "license": "Apache-2.0",
      "dependencies": {
        "@internationalized/date": "^3.6.0",
        "@react-aria/i18n": "^3.12.4",
        "@react-aria/interactions": "^3.22.5",
        "@react-aria/live-announcer": "^3.4.1",
        "@react-aria/utils": "^3.26.0",
        "@react-stately/calendar": "^3.6.0",
        "@react-types/button": "^3.10.1",
        "@react-types/calendar": "^3.5.0",
        "@react-types/shared": "^3.26.0",
        "@swc/helpers": "^0.5.0"
      },
      "peerDependencies": {
        "react": "^16.8.0 || ^17.0.0-rc.1 || ^18.0.0 || ^19.0.0-rc.1",
        "react-dom": "^16.8.0 || ^17.0.0-rc.1 || ^18.0.0 || ^19.0.0-rc.1"
      }
    },
    "node_modules/@react-aria/checkbox": {
      "version": "3.15.0",
      "license": "Apache-2.0",
      "dependencies": {
        "@react-aria/form": "^3.0.11",
        "@react-aria/interactions": "^3.22.5",
        "@react-aria/label": "^3.7.13",
        "@react-aria/toggle": "^3.10.10",
        "@react-aria/utils": "^3.26.0",
        "@react-stately/checkbox": "^3.6.10",
        "@react-stately/form": "^3.1.0",
        "@react-stately/toggle": "^3.8.0",
        "@react-types/checkbox": "^3.9.0",
        "@react-types/shared": "^3.26.0",
        "@swc/helpers": "^0.5.0"
      },
      "peerDependencies": {
        "react": "^16.8.0 || ^17.0.0-rc.1 || ^18.0.0 || ^19.0.0-rc.1"
      }
    },
    "node_modules/@react-aria/checkbox/node_modules/@react-aria/ssr": {
      "version": "3.9.10",
      "license": "Apache-2.0",
      "dependencies": {
        "@swc/helpers": "^0.5.0"
      },
      "engines": {
        "node": ">= 12"
      },
      "peerDependencies": {
        "react": "^16.8.0 || ^17.0.0-rc.1 || ^18.0.0 || ^19.0.0-rc.1"
      }
    },
    "node_modules/@react-aria/checkbox/node_modules/@react-aria/toggle": {
      "version": "3.12.2",
      "license": "Apache-2.0",
      "dependencies": {
        "@react-aria/interactions": "^3.25.6",
        "@react-aria/utils": "^3.31.0",
        "@react-stately/toggle": "^3.9.2",
        "@react-types/checkbox": "^3.10.2",
        "@react-types/shared": "^3.32.1",
        "@swc/helpers": "^0.5.0"
      },
      "peerDependencies": {
        "react": "^16.8.0 || ^17.0.0-rc.1 || ^18.0.0 || ^19.0.0-rc.1",
        "react-dom": "^16.8.0 || ^17.0.0-rc.1 || ^18.0.0 || ^19.0.0-rc.1"
      }
    },
    "node_modules/@react-aria/checkbox/node_modules/@react-aria/toggle/node_modules/@react-aria/interactions": {
      "version": "3.25.6",
      "license": "Apache-2.0",
      "dependencies": {
        "@react-aria/ssr": "^3.9.10",
        "@react-aria/utils": "^3.31.0",
        "@react-stately/flags": "^3.1.2",
        "@react-types/shared": "^3.32.1",
        "@swc/helpers": "^0.5.0"
      },
      "peerDependencies": {
        "react": "^16.8.0 || ^17.0.0-rc.1 || ^18.0.0 || ^19.0.0-rc.1",
        "react-dom": "^16.8.0 || ^17.0.0-rc.1 || ^18.0.0 || ^19.0.0-rc.1"
      }
    },
    "node_modules/@react-aria/checkbox/node_modules/@react-aria/toggle/node_modules/@react-aria/utils": {
      "version": "3.31.0",
      "license": "Apache-2.0",
      "dependencies": {
        "@react-aria/ssr": "^3.9.10",
        "@react-stately/flags": "^3.1.2",
        "@react-stately/utils": "^3.10.8",
        "@react-types/shared": "^3.32.1",
        "@swc/helpers": "^0.5.0",
        "clsx": "^2.0.0"
      },
      "peerDependencies": {
        "react": "^16.8.0 || ^17.0.0-rc.1 || ^18.0.0 || ^19.0.0-rc.1",
        "react-dom": "^16.8.0 || ^17.0.0-rc.1 || ^18.0.0 || ^19.0.0-rc.1"
      }
    },
    "node_modules/@react-aria/checkbox/node_modules/@react-stately/toggle": {
      "version": "3.9.2",
      "license": "Apache-2.0",
      "dependencies": {
        "@react-stately/utils": "^3.10.8",
        "@react-types/checkbox": "^3.10.2",
        "@react-types/shared": "^3.32.1",
        "@swc/helpers": "^0.5.0"
      },
      "peerDependencies": {
        "react": "^16.8.0 || ^17.0.0-rc.1 || ^18.0.0 || ^19.0.0-rc.1"
      }
    },
    "node_modules/@react-aria/checkbox/node_modules/@react-stately/utils": {
      "version": "3.10.8",
      "license": "Apache-2.0",
      "dependencies": {
        "@swc/helpers": "^0.5.0"
      },
      "peerDependencies": {
        "react": "^16.8.0 || ^17.0.0-rc.1 || ^18.0.0 || ^19.0.0-rc.1"
      }
    },
    "node_modules/@react-aria/checkbox/node_modules/@react-types/checkbox": {
      "version": "3.10.2",
      "license": "Apache-2.0",
      "dependencies": {
        "@react-types/shared": "^3.32.1"
      },
      "peerDependencies": {
        "react": "^16.8.0 || ^17.0.0-rc.1 || ^18.0.0 || ^19.0.0-rc.1"
      }
    },
    "node_modules/@react-aria/checkbox/node_modules/@react-types/shared": {
      "version": "3.32.1",
      "license": "Apache-2.0",
      "peerDependencies": {
        "react": "^16.8.0 || ^17.0.0-rc.1 || ^18.0.0 || ^19.0.0-rc.1"
      }
    },
    "node_modules/@react-aria/combobox": {
      "version": "3.11.0",
      "license": "Apache-2.0",
      "dependencies": {
        "@react-aria/i18n": "^3.12.4",
        "@react-aria/listbox": "^3.13.6",
        "@react-aria/live-announcer": "^3.4.1",
        "@react-aria/menu": "^3.16.0",
        "@react-aria/overlays": "^3.24.0",
        "@react-aria/selection": "^3.21.0",
        "@react-aria/textfield": "^3.15.0",
        "@react-aria/utils": "^3.26.0",
        "@react-stately/collections": "^3.12.0",
        "@react-stately/combobox": "^3.10.1",
        "@react-stately/form": "^3.1.0",
        "@react-types/button": "^3.10.1",
        "@react-types/combobox": "^3.13.1",
        "@react-types/shared": "^3.26.0",
        "@swc/helpers": "^0.5.0"
      },
      "peerDependencies": {
        "react": "^16.8.0 || ^17.0.0-rc.1 || ^18.0.0 || ^19.0.0-rc.1",
        "react-dom": "^16.8.0 || ^17.0.0-rc.1 || ^18.0.0 || ^19.0.0-rc.1"
      }
    },
    "node_modules/@react-aria/datepicker": {
      "version": "3.12.0",
      "license": "Apache-2.0",
      "dependencies": {
        "@internationalized/date": "^3.6.0",
        "@internationalized/number": "^3.6.0",
        "@internationalized/string": "^3.2.5",
        "@react-aria/focus": "^3.19.0",
        "@react-aria/form": "^3.0.11",
        "@react-aria/i18n": "^3.12.4",
        "@react-aria/interactions": "^3.22.5",
        "@react-aria/label": "^3.7.13",
        "@react-aria/spinbutton": "^3.6.10",
        "@react-aria/utils": "^3.26.0",
        "@react-stately/datepicker": "^3.11.0",
        "@react-stately/form": "^3.1.0",
        "@react-types/button": "^3.10.1",
        "@react-types/calendar": "^3.5.0",
        "@react-types/datepicker": "^3.9.0",
        "@react-types/dialog": "^3.5.14",
        "@react-types/shared": "^3.26.0",
        "@swc/helpers": "^0.5.0"
      },
      "peerDependencies": {
        "react": "^16.8.0 || ^17.0.0-rc.1 || ^18.0.0 || ^19.0.0-rc.1",
        "react-dom": "^16.8.0 || ^17.0.0-rc.1 || ^18.0.0 || ^19.0.0-rc.1"
      }
    },
    "node_modules/@react-aria/dialog": {
      "version": "3.5.20",
      "license": "Apache-2.0",
      "dependencies": {
        "@react-aria/focus": "^3.19.0",
        "@react-aria/overlays": "^3.24.0",
        "@react-aria/utils": "^3.26.0",
        "@react-types/dialog": "^3.5.14",
        "@react-types/shared": "^3.26.0",
        "@swc/helpers": "^0.5.0"
      },
      "peerDependencies": {
        "react": "^16.8.0 || ^17.0.0-rc.1 || ^18.0.0 || ^19.0.0-rc.1",
        "react-dom": "^16.8.0 || ^17.0.0-rc.1 || ^18.0.0 || ^19.0.0-rc.1"
      }
    },
    "node_modules/@react-aria/focus": {
      "version": "3.19.0",
      "license": "Apache-2.0",
      "dependencies": {
        "@react-aria/interactions": "^3.22.5",
        "@react-aria/utils": "^3.26.0",
        "@react-types/shared": "^3.26.0",
        "@swc/helpers": "^0.5.0",
        "clsx": "^2.0.0"
      },
      "peerDependencies": {
        "react": "^16.8.0 || ^17.0.0-rc.1 || ^18.0.0 || ^19.0.0-rc.1"
      }
    },
    "node_modules/@react-aria/form": {
      "version": "3.0.11",
      "license": "Apache-2.0",
      "dependencies": {
        "@react-aria/interactions": "^3.22.5",
        "@react-aria/utils": "^3.26.0",
        "@react-stately/form": "^3.1.0",
        "@react-types/shared": "^3.26.0",
        "@swc/helpers": "^0.5.0"
      },
      "peerDependencies": {
        "react": "^16.8.0 || ^17.0.0-rc.1 || ^18.0.0 || ^19.0.0-rc.1"
      }
    },
    "node_modules/@react-aria/grid": {
      "version": "3.14.5",
      "license": "Apache-2.0",
      "dependencies": {
        "@react-aria/focus": "^3.21.2",
        "@react-aria/i18n": "^3.12.13",
        "@react-aria/interactions": "^3.25.6",
        "@react-aria/live-announcer": "^3.4.4",
        "@react-aria/selection": "^3.26.0",
        "@react-aria/utils": "^3.31.0",
        "@react-stately/collections": "^3.12.8",
        "@react-stately/grid": "^3.11.6",
        "@react-stately/selection": "^3.20.6",
        "@react-types/checkbox": "^3.10.2",
        "@react-types/grid": "^3.3.6",
        "@react-types/shared": "^3.32.1",
        "@swc/helpers": "^0.5.0"
      },
      "peerDependencies": {
        "react": "^16.8.0 || ^17.0.0-rc.1 || ^18.0.0 || ^19.0.0-rc.1",
        "react-dom": "^16.8.0 || ^17.0.0-rc.1 || ^18.0.0 || ^19.0.0-rc.1"
      }
    },
    "node_modules/@react-aria/grid/node_modules/@internationalized/date": {
      "version": "3.10.0",
      "license": "Apache-2.0",
      "dependencies": {
        "@swc/helpers": "^0.5.0"
      }
    },
    "node_modules/@react-aria/grid/node_modules/@react-aria/focus": {
      "version": "3.21.2",
      "license": "Apache-2.0",
      "dependencies": {
        "@react-aria/interactions": "^3.25.6",
        "@react-aria/utils": "^3.31.0",
        "@react-types/shared": "^3.32.1",
        "@swc/helpers": "^0.5.0",
        "clsx": "^2.0.0"
      },
      "peerDependencies": {
        "react": "^16.8.0 || ^17.0.0-rc.1 || ^18.0.0 || ^19.0.0-rc.1",
        "react-dom": "^16.8.0 || ^17.0.0-rc.1 || ^18.0.0 || ^19.0.0-rc.1"
      }
    },
    "node_modules/@react-aria/grid/node_modules/@react-aria/i18n": {
      "version": "3.12.13",
      "license": "Apache-2.0",
      "dependencies": {
        "@internationalized/date": "^3.10.0",
        "@internationalized/message": "^3.1.8",
        "@internationalized/number": "^3.6.5",
        "@internationalized/string": "^3.2.7",
        "@react-aria/ssr": "^3.9.10",
        "@react-aria/utils": "^3.31.0",
        "@react-types/shared": "^3.32.1",
        "@swc/helpers": "^0.5.0"
      },
      "peerDependencies": {
        "react": "^16.8.0 || ^17.0.0-rc.1 || ^18.0.0 || ^19.0.0-rc.1",
        "react-dom": "^16.8.0 || ^17.0.0-rc.1 || ^18.0.0 || ^19.0.0-rc.1"
      }
    },
    "node_modules/@react-aria/grid/node_modules/@react-aria/interactions": {
      "version": "3.25.6",
      "license": "Apache-2.0",
      "dependencies": {
        "@react-aria/ssr": "^3.9.10",
        "@react-aria/utils": "^3.31.0",
        "@react-stately/flags": "^3.1.2",
        "@react-types/shared": "^3.32.1",
        "@swc/helpers": "^0.5.0"
      },
      "peerDependencies": {
        "react": "^16.8.0 || ^17.0.0-rc.1 || ^18.0.0 || ^19.0.0-rc.1",
        "react-dom": "^16.8.0 || ^17.0.0-rc.1 || ^18.0.0 || ^19.0.0-rc.1"
      }
    },
    "node_modules/@react-aria/grid/node_modules/@react-aria/selection": {
      "version": "3.26.0",
      "license": "Apache-2.0",
      "dependencies": {
        "@react-aria/focus": "^3.21.2",
        "@react-aria/i18n": "^3.12.13",
        "@react-aria/interactions": "^3.25.6",
        "@react-aria/utils": "^3.31.0",
        "@react-stately/selection": "^3.20.6",
        "@react-types/shared": "^3.32.1",
        "@swc/helpers": "^0.5.0"
      },
      "peerDependencies": {
        "react": "^16.8.0 || ^17.0.0-rc.1 || ^18.0.0 || ^19.0.0-rc.1",
        "react-dom": "^16.8.0 || ^17.0.0-rc.1 || ^18.0.0 || ^19.0.0-rc.1"
      }
    },
    "node_modules/@react-aria/grid/node_modules/@react-aria/ssr": {
      "version": "3.9.10",
      "license": "Apache-2.0",
      "dependencies": {
        "@swc/helpers": "^0.5.0"
      },
      "engines": {
        "node": ">= 12"
      },
      "peerDependencies": {
        "react": "^16.8.0 || ^17.0.0-rc.1 || ^18.0.0 || ^19.0.0-rc.1"
      }
    },
    "node_modules/@react-aria/grid/node_modules/@react-aria/utils": {
      "version": "3.31.0",
      "license": "Apache-2.0",
      "dependencies": {
        "@react-aria/ssr": "^3.9.10",
        "@react-stately/flags": "^3.1.2",
        "@react-stately/utils": "^3.10.8",
        "@react-types/shared": "^3.32.1",
        "@swc/helpers": "^0.5.0",
        "clsx": "^2.0.0"
      },
      "peerDependencies": {
        "react": "^16.8.0 || ^17.0.0-rc.1 || ^18.0.0 || ^19.0.0-rc.1",
        "react-dom": "^16.8.0 || ^17.0.0-rc.1 || ^18.0.0 || ^19.0.0-rc.1"
      }
    },
    "node_modules/@react-aria/grid/node_modules/@react-stately/collections": {
      "version": "3.12.8",
      "license": "Apache-2.0",
      "dependencies": {
        "@react-types/shared": "^3.32.1",
        "@swc/helpers": "^0.5.0"
      },
      "peerDependencies": {
        "react": "^16.8.0 || ^17.0.0-rc.1 || ^18.0.0 || ^19.0.0-rc.1"
      }
    },
    "node_modules/@react-aria/grid/node_modules/@react-stately/utils": {
      "version": "3.10.8",
      "license": "Apache-2.0",
      "dependencies": {
        "@swc/helpers": "^0.5.0"
      },
      "peerDependencies": {
        "react": "^16.8.0 || ^17.0.0-rc.1 || ^18.0.0 || ^19.0.0-rc.1"
      }
    },
    "node_modules/@react-aria/grid/node_modules/@react-types/checkbox": {
      "version": "3.10.2",
      "license": "Apache-2.0",
      "dependencies": {
        "@react-types/shared": "^3.32.1"
      },
      "peerDependencies": {
        "react": "^16.8.0 || ^17.0.0-rc.1 || ^18.0.0 || ^19.0.0-rc.1"
      }
    },
    "node_modules/@react-aria/grid/node_modules/@react-types/grid": {
      "version": "3.3.6",
      "license": "Apache-2.0",
      "dependencies": {
        "@react-types/shared": "^3.32.1"
      },
      "peerDependencies": {
        "react": "^16.8.0 || ^17.0.0-rc.1 || ^18.0.0 || ^19.0.0-rc.1"
      }
    },
    "node_modules/@react-aria/grid/node_modules/@react-types/shared": {
      "version": "3.32.1",
      "license": "Apache-2.0",
      "peerDependencies": {
        "react": "^16.8.0 || ^17.0.0-rc.1 || ^18.0.0 || ^19.0.0-rc.1"
      }
    },
    "node_modules/@react-aria/i18n": {
      "version": "3.12.4",
      "license": "Apache-2.0",
      "dependencies": {
        "@internationalized/date": "^3.6.0",
        "@internationalized/message": "^3.1.6",
        "@internationalized/number": "^3.6.0",
        "@internationalized/string": "^3.2.5",
        "@react-aria/ssr": "^3.9.7",
        "@react-aria/utils": "^3.26.0",
        "@react-types/shared": "^3.26.0",
        "@swc/helpers": "^0.5.0"
      },
      "peerDependencies": {
        "react": "^16.8.0 || ^17.0.0-rc.1 || ^18.0.0 || ^19.0.0-rc.1"
      }
    },
    "node_modules/@react-aria/interactions": {
      "version": "3.22.5",
      "license": "Apache-2.0",
      "dependencies": {
        "@react-aria/ssr": "^3.9.7",
        "@react-aria/utils": "^3.26.0",
        "@react-types/shared": "^3.26.0",
        "@swc/helpers": "^0.5.0"
      },
      "peerDependencies": {
        "react": "^16.8.0 || ^17.0.0-rc.1 || ^18.0.0 || ^19.0.0-rc.1"
      }
    },
    "node_modules/@react-aria/label": {
      "version": "3.7.13",
      "license": "Apache-2.0",
      "dependencies": {
        "@react-aria/utils": "^3.26.0",
        "@react-types/shared": "^3.26.0",
        "@swc/helpers": "^0.5.0"
      },
      "peerDependencies": {
        "react": "^16.8.0 || ^17.0.0-rc.1 || ^18.0.0 || ^19.0.0-rc.1"
      }
    },
    "node_modules/@react-aria/link": {
      "version": "3.7.7",
      "license": "Apache-2.0",
      "dependencies": {
        "@react-aria/focus": "^3.19.0",
        "@react-aria/interactions": "^3.22.5",
        "@react-aria/utils": "^3.26.0",
        "@react-types/link": "^3.5.9",
        "@react-types/shared": "^3.26.0",
        "@swc/helpers": "^0.5.0"
      },
      "peerDependencies": {
        "react": "^16.8.0 || ^17.0.0-rc.1 || ^18.0.0 || ^19.0.0-rc.1"
      }
    },
    "node_modules/@react-aria/listbox": {
      "version": "3.13.6",
      "license": "Apache-2.0",
      "dependencies": {
        "@react-aria/interactions": "^3.22.5",
        "@react-aria/label": "^3.7.13",
        "@react-aria/selection": "^3.21.0",
        "@react-aria/utils": "^3.26.0",
        "@react-stately/collections": "^3.12.0",
        "@react-stately/list": "^3.11.1",
        "@react-types/listbox": "^3.5.3",
        "@react-types/shared": "^3.26.0",
        "@swc/helpers": "^0.5.0"
      },
      "peerDependencies": {
        "react": "^16.8.0 || ^17.0.0-rc.1 || ^18.0.0 || ^19.0.0-rc.1",
        "react-dom": "^16.8.0 || ^17.0.0-rc.1 || ^18.0.0 || ^19.0.0-rc.1"
      }
    },
    "node_modules/@react-aria/live-announcer": {
      "version": "3.4.4",
      "license": "Apache-2.0",
      "dependencies": {
        "@swc/helpers": "^0.5.0"
      }
    },
    "node_modules/@react-aria/menu": {
      "version": "3.16.0",
      "license": "Apache-2.0",
      "dependencies": {
        "@react-aria/focus": "^3.19.0",
        "@react-aria/i18n": "^3.12.4",
        "@react-aria/interactions": "^3.22.5",
        "@react-aria/overlays": "^3.24.0",
        "@react-aria/selection": "^3.21.0",
        "@react-aria/utils": "^3.26.0",
        "@react-stately/collections": "^3.12.0",
        "@react-stately/menu": "^3.9.0",
        "@react-stately/selection": "^3.18.0",
        "@react-stately/tree": "^3.8.6",
        "@react-types/button": "^3.10.1",
        "@react-types/menu": "^3.9.13",
        "@react-types/shared": "^3.26.0",
        "@swc/helpers": "^0.5.0"
      },
      "peerDependencies": {
        "react": "^16.8.0 || ^17.0.0-rc.1 || ^18.0.0 || ^19.0.0-rc.1",
        "react-dom": "^16.8.0 || ^17.0.0-rc.1 || ^18.0.0 || ^19.0.0-rc.1"
      }
    },
    "node_modules/@react-aria/overlays": {
      "version": "3.24.0",
      "license": "Apache-2.0",
      "dependencies": {
        "@react-aria/focus": "^3.19.0",
        "@react-aria/i18n": "^3.12.4",
        "@react-aria/interactions": "^3.22.5",
        "@react-aria/ssr": "^3.9.7",
        "@react-aria/utils": "^3.26.0",
        "@react-aria/visually-hidden": "^3.8.18",
        "@react-stately/overlays": "^3.6.12",
        "@react-types/button": "^3.10.1",
        "@react-types/overlays": "^3.8.11",
        "@react-types/shared": "^3.26.0",
        "@swc/helpers": "^0.5.0"
      },
      "peerDependencies": {
        "react": "^16.8.0 || ^17.0.0-rc.1 || ^18.0.0 || ^19.0.0-rc.1",
        "react-dom": "^16.8.0 || ^17.0.0-rc.1 || ^18.0.0 || ^19.0.0-rc.1"
      }
    },
    "node_modules/@react-aria/progress": {
      "version": "3.4.18",
      "license": "Apache-2.0",
      "dependencies": {
        "@react-aria/i18n": "^3.12.4",
        "@react-aria/label": "^3.7.13",
        "@react-aria/utils": "^3.26.0",
        "@react-types/progress": "^3.5.8",
        "@react-types/shared": "^3.26.0",
        "@swc/helpers": "^0.5.0"
      },
      "peerDependencies": {
        "react": "^16.8.0 || ^17.0.0-rc.1 || ^18.0.0 || ^19.0.0-rc.1"
      }
    },
    "node_modules/@react-aria/radio": {
      "version": "3.10.10",
      "license": "Apache-2.0",
      "dependencies": {
        "@react-aria/focus": "^3.19.0",
        "@react-aria/form": "^3.0.11",
        "@react-aria/i18n": "^3.12.4",
        "@react-aria/interactions": "^3.22.5",
        "@react-aria/label": "^3.7.13",
        "@react-aria/utils": "^3.26.0",
        "@react-stately/radio": "^3.10.9",
        "@react-types/radio": "^3.8.5",
        "@react-types/shared": "^3.26.0",
        "@swc/helpers": "^0.5.0"
      },
      "peerDependencies": {
        "react": "^16.8.0 || ^17.0.0-rc.1 || ^18.0.0 || ^19.0.0-rc.1"
      }
    },
    "node_modules/@react-aria/selection": {
      "version": "3.21.0",
      "license": "Apache-2.0",
      "dependencies": {
        "@react-aria/focus": "^3.19.0",
        "@react-aria/i18n": "^3.12.4",
        "@react-aria/interactions": "^3.22.5",
        "@react-aria/utils": "^3.26.0",
        "@react-stately/selection": "^3.18.0",
        "@react-types/shared": "^3.26.0",
        "@swc/helpers": "^0.5.0"
      },
      "peerDependencies": {
        "react": "^16.8.0 || ^17.0.0-rc.1 || ^18.0.0 || ^19.0.0-rc.1",
        "react-dom": "^16.8.0 || ^17.0.0-rc.1 || ^18.0.0 || ^19.0.0-rc.1"
      }
    },
    "node_modules/@react-aria/slider": {
      "version": "3.7.14",
      "license": "Apache-2.0",
      "dependencies": {
        "@react-aria/focus": "^3.19.0",
        "@react-aria/i18n": "^3.12.4",
        "@react-aria/interactions": "^3.22.5",
        "@react-aria/label": "^3.7.13",
        "@react-aria/utils": "^3.26.0",
        "@react-stately/slider": "^3.6.0",
        "@react-types/shared": "^3.26.0",
        "@react-types/slider": "^3.7.7",
        "@swc/helpers": "^0.5.0"
      },
      "peerDependencies": {
        "react": "^16.8.0 || ^17.0.0-rc.1 || ^18.0.0 || ^19.0.0-rc.1"
      }
    },
    "node_modules/@react-aria/spinbutton": {
      "version": "3.6.19",
      "license": "Apache-2.0",
      "dependencies": {
        "@react-aria/i18n": "^3.12.13",
        "@react-aria/live-announcer": "^3.4.4",
        "@react-aria/utils": "^3.31.0",
        "@react-types/button": "^3.14.1",
        "@react-types/shared": "^3.32.1",
        "@swc/helpers": "^0.5.0"
      },
      "peerDependencies": {
        "react": "^16.8.0 || ^17.0.0-rc.1 || ^18.0.0 || ^19.0.0-rc.1",
        "react-dom": "^16.8.0 || ^17.0.0-rc.1 || ^18.0.0 || ^19.0.0-rc.1"
      }
    },
    "node_modules/@react-aria/spinbutton/node_modules/@internationalized/date": {
      "version": "3.10.0",
      "license": "Apache-2.0",
      "dependencies": {
        "@swc/helpers": "^0.5.0"
      }
    },
    "node_modules/@react-aria/spinbutton/node_modules/@react-aria/i18n": {
      "version": "3.12.13",
      "license": "Apache-2.0",
      "dependencies": {
        "@internationalized/date": "^3.10.0",
        "@internationalized/message": "^3.1.8",
        "@internationalized/number": "^3.6.5",
        "@internationalized/string": "^3.2.7",
        "@react-aria/ssr": "^3.9.10",
        "@react-aria/utils": "^3.31.0",
        "@react-types/shared": "^3.32.1",
        "@swc/helpers": "^0.5.0"
      },
      "peerDependencies": {
        "react": "^16.8.0 || ^17.0.0-rc.1 || ^18.0.0 || ^19.0.0-rc.1",
        "react-dom": "^16.8.0 || ^17.0.0-rc.1 || ^18.0.0 || ^19.0.0-rc.1"
      }
    },
    "node_modules/@react-aria/spinbutton/node_modules/@react-aria/ssr": {
      "version": "3.9.10",
      "license": "Apache-2.0",
      "dependencies": {
        "@swc/helpers": "^0.5.0"
      },
      "engines": {
        "node": ">= 12"
      },
      "peerDependencies": {
        "react": "^16.8.0 || ^17.0.0-rc.1 || ^18.0.0 || ^19.0.0-rc.1"
      }
    },
    "node_modules/@react-aria/spinbutton/node_modules/@react-aria/utils": {
      "version": "3.31.0",
      "license": "Apache-2.0",
      "dependencies": {
        "@react-aria/ssr": "^3.9.10",
        "@react-stately/flags": "^3.1.2",
        "@react-stately/utils": "^3.10.8",
        "@react-types/shared": "^3.32.1",
        "@swc/helpers": "^0.5.0",
        "clsx": "^2.0.0"
      },
      "peerDependencies": {
        "react": "^16.8.0 || ^17.0.0-rc.1 || ^18.0.0 || ^19.0.0-rc.1",
        "react-dom": "^16.8.0 || ^17.0.0-rc.1 || ^18.0.0 || ^19.0.0-rc.1"
      }
    },
    "node_modules/@react-aria/spinbutton/node_modules/@react-stately/utils": {
      "version": "3.10.8",
      "license": "Apache-2.0",
      "dependencies": {
        "@swc/helpers": "^0.5.0"
      },
      "peerDependencies": {
        "react": "^16.8.0 || ^17.0.0-rc.1 || ^18.0.0 || ^19.0.0-rc.1"
      }
    },
    "node_modules/@react-aria/spinbutton/node_modules/@react-types/button": {
      "version": "3.14.1",
      "license": "Apache-2.0",
      "dependencies": {
        "@react-types/shared": "^3.32.1"
      },
      "peerDependencies": {
        "react": "^16.8.0 || ^17.0.0-rc.1 || ^18.0.0 || ^19.0.0-rc.1"
      }
    },
    "node_modules/@react-aria/spinbutton/node_modules/@react-types/shared": {
      "version": "3.32.1",
      "license": "Apache-2.0",
      "peerDependencies": {
        "react": "^16.8.0 || ^17.0.0-rc.1 || ^18.0.0 || ^19.0.0-rc.1"
      }
    },
    "node_modules/@react-aria/ssr": {
      "version": "3.9.7",
      "license": "Apache-2.0",
      "dependencies": {
        "@swc/helpers": "^0.5.0"
      },
      "engines": {
        "node": ">= 12"
      },
      "peerDependencies": {
        "react": "^16.8.0 || ^17.0.0-rc.1 || ^18.0.0 || ^19.0.0-rc.1"
      }
    },
    "node_modules/@react-aria/switch": {
      "version": "3.6.10",
      "license": "Apache-2.0",
      "dependencies": {
        "@react-aria/toggle": "^3.10.10",
        "@react-stately/toggle": "^3.8.0",
        "@react-types/shared": "^3.26.0",
        "@react-types/switch": "^3.5.7",
        "@swc/helpers": "^0.5.0"
      },
      "peerDependencies": {
        "react": "^16.8.0 || ^17.0.0-rc.1 || ^18.0.0 || ^19.0.0-rc.1"
      }
    },
    "node_modules/@react-aria/switch/node_modules/@react-aria/ssr": {
      "version": "3.9.10",
      "license": "Apache-2.0",
      "dependencies": {
        "@swc/helpers": "^0.5.0"
      },
      "engines": {
        "node": ">= 12"
      },
      "peerDependencies": {
        "react": "^16.8.0 || ^17.0.0-rc.1 || ^18.0.0 || ^19.0.0-rc.1"
      }
    },
    "node_modules/@react-aria/switch/node_modules/@react-aria/toggle": {
      "version": "3.12.2",
      "license": "Apache-2.0",
      "dependencies": {
        "@react-aria/interactions": "^3.25.6",
        "@react-aria/utils": "^3.31.0",
        "@react-stately/toggle": "^3.9.2",
        "@react-types/checkbox": "^3.10.2",
        "@react-types/shared": "^3.32.1",
        "@swc/helpers": "^0.5.0"
      },
      "peerDependencies": {
        "react": "^16.8.0 || ^17.0.0-rc.1 || ^18.0.0 || ^19.0.0-rc.1",
        "react-dom": "^16.8.0 || ^17.0.0-rc.1 || ^18.0.0 || ^19.0.0-rc.1"
      }
    },
    "node_modules/@react-aria/switch/node_modules/@react-aria/toggle/node_modules/@react-aria/interactions": {
      "version": "3.25.6",
      "license": "Apache-2.0",
      "dependencies": {
        "@react-aria/ssr": "^3.9.10",
        "@react-aria/utils": "^3.31.0",
        "@react-stately/flags": "^3.1.2",
        "@react-types/shared": "^3.32.1",
        "@swc/helpers": "^0.5.0"
      },
      "peerDependencies": {
        "react": "^16.8.0 || ^17.0.0-rc.1 || ^18.0.0 || ^19.0.0-rc.1",
        "react-dom": "^16.8.0 || ^17.0.0-rc.1 || ^18.0.0 || ^19.0.0-rc.1"
      }
    },
    "node_modules/@react-aria/switch/node_modules/@react-aria/toggle/node_modules/@react-aria/utils": {
      "version": "3.31.0",
      "license": "Apache-2.0",
      "dependencies": {
        "@react-aria/ssr": "^3.9.10",
        "@react-stately/flags": "^3.1.2",
        "@react-stately/utils": "^3.10.8",
        "@react-types/shared": "^3.32.1",
        "@swc/helpers": "^0.5.0",
        "clsx": "^2.0.0"
      },
      "peerDependencies": {
        "react": "^16.8.0 || ^17.0.0-rc.1 || ^18.0.0 || ^19.0.0-rc.1",
        "react-dom": "^16.8.0 || ^17.0.0-rc.1 || ^18.0.0 || ^19.0.0-rc.1"
      }
    },
    "node_modules/@react-aria/switch/node_modules/@react-stately/toggle": {
      "version": "3.9.2",
      "license": "Apache-2.0",
      "dependencies": {
        "@react-stately/utils": "^3.10.8",
        "@react-types/checkbox": "^3.10.2",
        "@react-types/shared": "^3.32.1",
        "@swc/helpers": "^0.5.0"
      },
      "peerDependencies": {
        "react": "^16.8.0 || ^17.0.0-rc.1 || ^18.0.0 || ^19.0.0-rc.1"
      }
    },
    "node_modules/@react-aria/switch/node_modules/@react-stately/utils": {
      "version": "3.10.8",
      "license": "Apache-2.0",
      "dependencies": {
        "@swc/helpers": "^0.5.0"
      },
      "peerDependencies": {
        "react": "^16.8.0 || ^17.0.0-rc.1 || ^18.0.0 || ^19.0.0-rc.1"
      }
    },
    "node_modules/@react-aria/switch/node_modules/@react-types/checkbox": {
      "version": "3.10.2",
      "license": "Apache-2.0",
      "dependencies": {
        "@react-types/shared": "^3.32.1"
      },
      "peerDependencies": {
        "react": "^16.8.0 || ^17.0.0-rc.1 || ^18.0.0 || ^19.0.0-rc.1"
      }
    },
    "node_modules/@react-aria/switch/node_modules/@react-types/shared": {
      "version": "3.32.1",
      "license": "Apache-2.0",
      "peerDependencies": {
        "react": "^16.8.0 || ^17.0.0-rc.1 || ^18.0.0 || ^19.0.0-rc.1"
      }
    },
    "node_modules/@react-aria/table": {
      "version": "3.16.0",
      "license": "Apache-2.0",
      "dependencies": {
        "@react-aria/focus": "^3.19.0",
        "@react-aria/grid": "^3.11.0",
        "@react-aria/i18n": "^3.12.4",
        "@react-aria/interactions": "^3.22.5",
        "@react-aria/live-announcer": "^3.4.1",
        "@react-aria/utils": "^3.26.0",
        "@react-aria/visually-hidden": "^3.8.18",
        "@react-stately/collections": "^3.12.0",
        "@react-stately/flags": "^3.0.5",
        "@react-stately/table": "^3.13.0",
        "@react-types/checkbox": "^3.9.0",
        "@react-types/grid": "^3.2.10",
        "@react-types/shared": "^3.26.0",
        "@react-types/table": "^3.10.3",
        "@swc/helpers": "^0.5.0"
      },
      "peerDependencies": {
        "react": "^16.8.0 || ^17.0.0-rc.1 || ^18.0.0 || ^19.0.0-rc.1",
        "react-dom": "^16.8.0 || ^17.0.0-rc.1 || ^18.0.0 || ^19.0.0-rc.1"
      }
    },
    "node_modules/@react-aria/tabs": {
      "version": "3.9.8",
      "license": "Apache-2.0",
      "dependencies": {
        "@react-aria/focus": "^3.19.0",
        "@react-aria/i18n": "^3.12.4",
        "@react-aria/selection": "^3.21.0",
        "@react-aria/utils": "^3.26.0",
        "@react-stately/tabs": "^3.7.0",
        "@react-types/shared": "^3.26.0",
        "@react-types/tabs": "^3.3.11",
        "@swc/helpers": "^0.5.0"
      },
      "peerDependencies": {
        "react": "^16.8.0 || ^17.0.0-rc.1 || ^18.0.0 || ^19.0.0-rc.1",
        "react-dom": "^16.8.0 || ^17.0.0-rc.1 || ^18.0.0 || ^19.0.0-rc.1"
      }
    },
    "node_modules/@react-aria/textfield": {
      "version": "3.15.0",
      "license": "Apache-2.0",
      "dependencies": {
        "@react-aria/focus": "^3.19.0",
        "@react-aria/form": "^3.0.11",
        "@react-aria/label": "^3.7.13",
        "@react-aria/utils": "^3.26.0",
        "@react-stately/form": "^3.1.0",
        "@react-stately/utils": "^3.10.5",
        "@react-types/shared": "^3.26.0",
        "@react-types/textfield": "^3.10.0",
        "@swc/helpers": "^0.5.0"
      },
      "peerDependencies": {
        "react": "^16.8.0 || ^17.0.0-rc.1 || ^18.0.0 || ^19.0.0-rc.1"
      }
    },
    "node_modules/@react-aria/toolbar": {
      "version": "3.0.0-beta.11",
      "license": "Apache-2.0",
      "dependencies": {
        "@react-aria/focus": "^3.19.0",
        "@react-aria/i18n": "^3.12.4",
        "@react-aria/utils": "^3.26.0",
        "@react-types/shared": "^3.26.0",
        "@swc/helpers": "^0.5.0"
      },
      "peerDependencies": {
        "react": "^16.8.0 || ^17.0.0-rc.1 || ^18.0.0 || ^19.0.0-rc.1"
      }
    },
    "node_modules/@react-aria/tooltip": {
      "version": "3.7.10",
      "license": "Apache-2.0",
      "dependencies": {
        "@react-aria/focus": "^3.19.0",
        "@react-aria/interactions": "^3.22.5",
        "@react-aria/utils": "^3.26.0",
        "@react-stately/tooltip": "^3.5.0",
        "@react-types/shared": "^3.26.0",
        "@react-types/tooltip": "^3.4.13",
        "@swc/helpers": "^0.5.0"
      },
      "peerDependencies": {
        "react": "^16.8.0 || ^17.0.0-rc.1 || ^18.0.0 || ^19.0.0-rc.1"
      }
    },
    "node_modules/@react-aria/utils": {
      "version": "3.26.0",
      "license": "Apache-2.0",
      "dependencies": {
        "@react-aria/ssr": "^3.9.7",
        "@react-stately/utils": "^3.10.5",
        "@react-types/shared": "^3.26.0",
        "@swc/helpers": "^0.5.0",
        "clsx": "^2.0.0"
      },
      "peerDependencies": {
        "react": "^16.8.0 || ^17.0.0-rc.1 || ^18.0.0 || ^19.0.0-rc.1"
      }
    },
    "node_modules/@react-aria/visually-hidden": {
      "version": "3.8.18",
      "license": "Apache-2.0",
      "dependencies": {
        "@react-aria/interactions": "^3.22.5",
        "@react-aria/utils": "^3.26.0",
        "@react-types/shared": "^3.26.0",
        "@swc/helpers": "^0.5.0"
      },
      "peerDependencies": {
        "react": "^16.8.0 || ^17.0.0-rc.1 || ^18.0.0 || ^19.0.0-rc.1"
      }
    },
    "node_modules/@react-stately/calendar": {
      "version": "3.6.0",
      "license": "Apache-2.0",
      "dependencies": {
        "@internationalized/date": "^3.6.0",
        "@react-stately/utils": "^3.10.5",
        "@react-types/calendar": "^3.5.0",
        "@react-types/shared": "^3.26.0",
        "@swc/helpers": "^0.5.0"
      },
      "peerDependencies": {
        "react": "^16.8.0 || ^17.0.0-rc.1 || ^18.0.0 || ^19.0.0-rc.1"
      }
    },
    "node_modules/@react-stately/checkbox": {
      "version": "3.6.10",
      "license": "Apache-2.0",
      "dependencies": {
        "@react-stately/form": "^3.1.0",
        "@react-stately/utils": "^3.10.5",
        "@react-types/checkbox": "^3.9.0",
        "@react-types/shared": "^3.26.0",
        "@swc/helpers": "^0.5.0"
      },
      "peerDependencies": {
        "react": "^16.8.0 || ^17.0.0-rc.1 || ^18.0.0 || ^19.0.0-rc.1"
      }
    },
    "node_modules/@react-stately/collections": {
      "version": "3.12.0",
      "license": "Apache-2.0",
      "dependencies": {
        "@react-types/shared": "^3.26.0",
        "@swc/helpers": "^0.5.0"
      },
      "peerDependencies": {
        "react": "^16.8.0 || ^17.0.0-rc.1 || ^18.0.0 || ^19.0.0-rc.1"
      }
    },
    "node_modules/@react-stately/combobox": {
      "version": "3.10.1",
      "license": "Apache-2.0",
      "dependencies": {
        "@react-stately/collections": "^3.12.0",
        "@react-stately/form": "^3.1.0",
        "@react-stately/list": "^3.11.1",
        "@react-stately/overlays": "^3.6.12",
        "@react-stately/select": "^3.6.9",
        "@react-stately/utils": "^3.10.5",
        "@react-types/combobox": "^3.13.1",
        "@react-types/shared": "^3.26.0",
        "@swc/helpers": "^0.5.0"
      },
      "peerDependencies": {
        "react": "^16.8.0 || ^17.0.0-rc.1 || ^18.0.0 || ^19.0.0-rc.1"
      }
    },
    "node_modules/@react-stately/datepicker": {
      "version": "3.11.0",
      "license": "Apache-2.0",
      "dependencies": {
        "@internationalized/date": "^3.6.0",
        "@internationalized/string": "^3.2.5",
        "@react-stately/form": "^3.1.0",
        "@react-stately/overlays": "^3.6.12",
        "@react-stately/utils": "^3.10.5",
        "@react-types/datepicker": "^3.9.0",
        "@react-types/shared": "^3.26.0",
        "@swc/helpers": "^0.5.0"
      },
      "peerDependencies": {
        "react": "^16.8.0 || ^17.0.0-rc.1 || ^18.0.0 || ^19.0.0-rc.1"
      }
    },
    "node_modules/@react-stately/flags": {
      "version": "3.1.2",
      "license": "Apache-2.0",
      "dependencies": {
        "@swc/helpers": "^0.5.0"
      }
    },
    "node_modules/@react-stately/form": {
      "version": "3.1.0",
      "license": "Apache-2.0",
      "dependencies": {
        "@react-types/shared": "^3.26.0",
        "@swc/helpers": "^0.5.0"
      },
      "peerDependencies": {
        "react": "^16.8.0 || ^17.0.0-rc.1 || ^18.0.0 || ^19.0.0-rc.1"
      }
    },
    "node_modules/@react-stately/grid": {
      "version": "3.11.6",
      "license": "Apache-2.0",
      "dependencies": {
        "@react-stately/collections": "^3.12.8",
        "@react-stately/selection": "^3.20.6",
        "@react-types/grid": "^3.3.6",
        "@react-types/shared": "^3.32.1",
        "@swc/helpers": "^0.5.0"
      },
      "peerDependencies": {
        "react": "^16.8.0 || ^17.0.0-rc.1 || ^18.0.0 || ^19.0.0-rc.1"
      }
    },
    "node_modules/@react-stately/grid/node_modules/@react-stately/collections": {
      "version": "3.12.8",
      "license": "Apache-2.0",
      "dependencies": {
        "@react-types/shared": "^3.32.1",
        "@swc/helpers": "^0.5.0"
      },
      "peerDependencies": {
        "react": "^16.8.0 || ^17.0.0-rc.1 || ^18.0.0 || ^19.0.0-rc.1"
      }
    },
    "node_modules/@react-stately/grid/node_modules/@react-types/grid": {
      "version": "3.3.6",
      "license": "Apache-2.0",
      "dependencies": {
        "@react-types/shared": "^3.32.1"
      },
      "peerDependencies": {
        "react": "^16.8.0 || ^17.0.0-rc.1 || ^18.0.0 || ^19.0.0-rc.1"
      }
    },
    "node_modules/@react-stately/grid/node_modules/@react-types/shared": {
      "version": "3.32.1",
      "license": "Apache-2.0",
      "peerDependencies": {
        "react": "^16.8.0 || ^17.0.0-rc.1 || ^18.0.0 || ^19.0.0-rc.1"
      }
    },
    "node_modules/@react-stately/list": {
      "version": "3.11.1",
      "license": "Apache-2.0",
      "dependencies": {
        "@react-stately/collections": "^3.12.0",
        "@react-stately/selection": "^3.18.0",
        "@react-stately/utils": "^3.10.5",
        "@react-types/shared": "^3.26.0",
        "@swc/helpers": "^0.5.0"
      },
      "peerDependencies": {
        "react": "^16.8.0 || ^17.0.0-rc.1 || ^18.0.0 || ^19.0.0-rc.1"
      }
    },
    "node_modules/@react-stately/menu": {
      "version": "3.9.0",
      "license": "Apache-2.0",
      "dependencies": {
        "@react-stately/overlays": "^3.6.12",
        "@react-types/menu": "^3.9.13",
        "@react-types/shared": "^3.26.0",
        "@swc/helpers": "^0.5.0"
      },
      "peerDependencies": {
        "react": "^16.8.0 || ^17.0.0-rc.1 || ^18.0.0 || ^19.0.0-rc.1"
      }
    },
    "node_modules/@react-stately/overlays": {
      "version": "3.6.12",
      "license": "Apache-2.0",
      "dependencies": {
        "@react-stately/utils": "^3.10.5",
        "@react-types/overlays": "^3.8.11",
        "@swc/helpers": "^0.5.0"
      },
      "peerDependencies": {
        "react": "^16.8.0 || ^17.0.0-rc.1 || ^18.0.0 || ^19.0.0-rc.1"
      }
    },
    "node_modules/@react-stately/radio": {
      "version": "3.10.9",
      "license": "Apache-2.0",
      "dependencies": {
        "@react-stately/form": "^3.1.0",
        "@react-stately/utils": "^3.10.5",
        "@react-types/radio": "^3.8.5",
        "@react-types/shared": "^3.26.0",
        "@swc/helpers": "^0.5.0"
      },
      "peerDependencies": {
        "react": "^16.8.0 || ^17.0.0-rc.1 || ^18.0.0 || ^19.0.0-rc.1"
      }
    },
    "node_modules/@react-stately/select": {
      "version": "3.8.0",
      "license": "Apache-2.0",
      "dependencies": {
        "@react-stately/form": "^3.2.2",
        "@react-stately/list": "^3.13.1",
        "@react-stately/overlays": "^3.6.20",
        "@react-stately/utils": "^3.10.8",
        "@react-types/select": "^3.11.0",
        "@react-types/shared": "^3.32.1",
        "@swc/helpers": "^0.5.0"
      },
      "peerDependencies": {
        "react": "^16.8.0 || ^17.0.0-rc.1 || ^18.0.0 || ^19.0.0-rc.1"
      }
    },
    "node_modules/@react-stately/select/node_modules/@react-stately/collections": {
      "version": "3.12.8",
      "license": "Apache-2.0",
      "dependencies": {
        "@react-types/shared": "^3.32.1",
        "@swc/helpers": "^0.5.0"
      },
      "peerDependencies": {
        "react": "^16.8.0 || ^17.0.0-rc.1 || ^18.0.0 || ^19.0.0-rc.1"
      }
    },
    "node_modules/@react-stately/select/node_modules/@react-stately/form": {
      "version": "3.2.2",
      "license": "Apache-2.0",
      "dependencies": {
        "@react-types/shared": "^3.32.1",
        "@swc/helpers": "^0.5.0"
      },
      "peerDependencies": {
        "react": "^16.8.0 || ^17.0.0-rc.1 || ^18.0.0 || ^19.0.0-rc.1"
      }
    },
    "node_modules/@react-stately/select/node_modules/@react-stately/list": {
      "version": "3.13.1",
      "license": "Apache-2.0",
      "dependencies": {
        "@react-stately/collections": "^3.12.8",
        "@react-stately/selection": "^3.20.6",
        "@react-stately/utils": "^3.10.8",
        "@react-types/shared": "^3.32.1",
        "@swc/helpers": "^0.5.0"
      },
      "peerDependencies": {
        "react": "^16.8.0 || ^17.0.0-rc.1 || ^18.0.0 || ^19.0.0-rc.1"
      }
    },
    "node_modules/@react-stately/select/node_modules/@react-stately/overlays": {
      "version": "3.6.20",
      "license": "Apache-2.0",
      "dependencies": {
        "@react-stately/utils": "^3.10.8",
        "@react-types/overlays": "^3.9.2",
        "@swc/helpers": "^0.5.0"
      },
      "peerDependencies": {
        "react": "^16.8.0 || ^17.0.0-rc.1 || ^18.0.0 || ^19.0.0-rc.1"
      }
    },
    "node_modules/@react-stately/select/node_modules/@react-stately/utils": {
      "version": "3.10.8",
      "license": "Apache-2.0",
      "dependencies": {
        "@swc/helpers": "^0.5.0"
      },
      "peerDependencies": {
        "react": "^16.8.0 || ^17.0.0-rc.1 || ^18.0.0 || ^19.0.0-rc.1"
      }
    },
    "node_modules/@react-stately/select/node_modules/@react-types/overlays": {
      "version": "3.9.2",
      "license": "Apache-2.0",
      "dependencies": {
        "@react-types/shared": "^3.32.1"
      },
      "peerDependencies": {
        "react": "^16.8.0 || ^17.0.0-rc.1 || ^18.0.0 || ^19.0.0-rc.1"
      }
    },
    "node_modules/@react-stately/select/node_modules/@react-types/select": {
      "version": "3.11.0",
      "license": "Apache-2.0",
      "dependencies": {
        "@react-types/shared": "^3.32.1"
      },
      "peerDependencies": {
        "react": "^16.8.0 || ^17.0.0-rc.1 || ^18.0.0 || ^19.0.0-rc.1"
      }
    },
    "node_modules/@react-stately/select/node_modules/@react-types/shared": {
      "version": "3.32.1",
      "license": "Apache-2.0",
      "peerDependencies": {
        "react": "^16.8.0 || ^17.0.0-rc.1 || ^18.0.0 || ^19.0.0-rc.1"
      }
    },
    "node_modules/@react-stately/selection": {
      "version": "3.20.6",
      "license": "Apache-2.0",
      "dependencies": {
        "@react-stately/collections": "^3.12.8",
        "@react-stately/utils": "^3.10.8",
        "@react-types/shared": "^3.32.1",
        "@swc/helpers": "^0.5.0"
      },
      "peerDependencies": {
        "react": "^16.8.0 || ^17.0.0-rc.1 || ^18.0.0 || ^19.0.0-rc.1"
      }
    },
    "node_modules/@react-stately/selection/node_modules/@react-stately/collections": {
      "version": "3.12.8",
      "license": "Apache-2.0",
      "dependencies": {
        "@react-types/shared": "^3.32.1",
        "@swc/helpers": "^0.5.0"
      },
      "peerDependencies": {
        "react": "^16.8.0 || ^17.0.0-rc.1 || ^18.0.0 || ^19.0.0-rc.1"
      }
    },
    "node_modules/@react-stately/selection/node_modules/@react-stately/utils": {
      "version": "3.10.8",
      "license": "Apache-2.0",
      "dependencies": {
        "@swc/helpers": "^0.5.0"
      },
      "peerDependencies": {
        "react": "^16.8.0 || ^17.0.0-rc.1 || ^18.0.0 || ^19.0.0-rc.1"
      }
    },
    "node_modules/@react-stately/selection/node_modules/@react-types/shared": {
      "version": "3.32.1",
      "license": "Apache-2.0",
      "peerDependencies": {
        "react": "^16.8.0 || ^17.0.0-rc.1 || ^18.0.0 || ^19.0.0-rc.1"
      }
    },
    "node_modules/@react-stately/slider": {
      "version": "3.6.0",
      "license": "Apache-2.0",
      "dependencies": {
        "@react-stately/utils": "^3.10.5",
        "@react-types/shared": "^3.26.0",
        "@react-types/slider": "^3.7.7",
        "@swc/helpers": "^0.5.0"
      },
      "peerDependencies": {
        "react": "^16.8.0 || ^17.0.0-rc.1 || ^18.0.0 || ^19.0.0-rc.1"
      }
    },
    "node_modules/@react-stately/table": {
      "version": "3.13.0",
      "license": "Apache-2.0",
      "dependencies": {
        "@react-stately/collections": "^3.12.0",
        "@react-stately/flags": "^3.0.5",
        "@react-stately/grid": "^3.10.0",
        "@react-stately/selection": "^3.18.0",
        "@react-stately/utils": "^3.10.5",
        "@react-types/grid": "^3.2.10",
        "@react-types/shared": "^3.26.0",
        "@react-types/table": "^3.10.3",
        "@swc/helpers": "^0.5.0"
      },
      "peerDependencies": {
        "react": "^16.8.0 || ^17.0.0-rc.1 || ^18.0.0 || ^19.0.0-rc.1"
      }
    },
    "node_modules/@react-stately/tabs": {
      "version": "3.7.0",
      "license": "Apache-2.0",
      "dependencies": {
        "@react-stately/list": "^3.11.1",
        "@react-types/shared": "^3.26.0",
        "@react-types/tabs": "^3.3.11",
        "@swc/helpers": "^0.5.0"
      },
      "peerDependencies": {
        "react": "^16.8.0 || ^17.0.0-rc.1 || ^18.0.0 || ^19.0.0-rc.1"
      }
    },
    "node_modules/@react-stately/toggle": {
      "version": "3.8.0",
      "license": "Apache-2.0",
      "dependencies": {
        "@react-stately/utils": "^3.10.5",
        "@react-types/checkbox": "^3.9.0",
        "@react-types/shared": "^3.26.0",
        "@swc/helpers": "^0.5.0"
      },
      "peerDependencies": {
        "react": "^16.8.0 || ^17.0.0-rc.1 || ^18.0.0 || ^19.0.0-rc.1"
      }
    },
    "node_modules/@react-stately/tooltip": {
      "version": "3.5.0",
      "license": "Apache-2.0",
      "dependencies": {
        "@react-stately/overlays": "^3.6.12",
        "@react-types/tooltip": "^3.4.13",
        "@swc/helpers": "^0.5.0"
      },
      "peerDependencies": {
        "react": "^16.8.0 || ^17.0.0-rc.1 || ^18.0.0 || ^19.0.0-rc.1"
      }
    },
    "node_modules/@react-stately/tree": {
      "version": "3.8.6",
      "license": "Apache-2.0",
      "dependencies": {
        "@react-stately/collections": "^3.12.0",
        "@react-stately/selection": "^3.18.0",
        "@react-stately/utils": "^3.10.5",
        "@react-types/shared": "^3.26.0",
        "@swc/helpers": "^0.5.0"
      },
      "peerDependencies": {
        "react": "^16.8.0 || ^17.0.0-rc.1 || ^18.0.0 || ^19.0.0-rc.1"
      }
    },
    "node_modules/@react-stately/utils": {
      "version": "3.10.5",
      "license": "Apache-2.0",
      "dependencies": {
        "@swc/helpers": "^0.5.0"
      },
      "peerDependencies": {
        "react": "^16.8.0 || ^17.0.0-rc.1 || ^18.0.0 || ^19.0.0-rc.1"
      }
    },
    "node_modules/@react-stately/virtualizer": {
      "version": "4.2.0",
      "license": "Apache-2.0",
      "dependencies": {
        "@react-aria/utils": "^3.26.0",
        "@react-types/shared": "^3.26.0",
        "@swc/helpers": "^0.5.0"
      },
      "peerDependencies": {
        "react": "^16.8.0 || ^17.0.0-rc.1 || ^18.0.0 || ^19.0.0-rc.1"
      }
    },
    "node_modules/@react-types/accordion": {
      "version": "3.0.0-alpha.25",
      "license": "Apache-2.0",
      "dependencies": {
        "@react-types/shared": "^3.26.0"
      },
      "peerDependencies": {
        "react": "^16.8.0 || ^17.0.0-rc.1 || ^18.0.0 || ^19.0.0-rc.1"
      }
    },
    "node_modules/@react-types/breadcrumbs": {
      "version": "3.7.9",
      "license": "Apache-2.0",
      "dependencies": {
        "@react-types/link": "^3.5.9",
        "@react-types/shared": "^3.26.0"
      },
      "peerDependencies": {
        "react": "^16.8.0 || ^17.0.0-rc.1 || ^18.0.0 || ^19.0.0-rc.1"
      }
    },
    "node_modules/@react-types/button": {
      "version": "3.10.1",
      "license": "Apache-2.0",
      "dependencies": {
        "@react-types/shared": "^3.26.0"
      },
      "peerDependencies": {
        "react": "^16.8.0 || ^17.0.0-rc.1 || ^18.0.0 || ^19.0.0-rc.1"
      }
    },
    "node_modules/@react-types/calendar": {
      "version": "3.5.0",
      "license": "Apache-2.0",
      "dependencies": {
        "@internationalized/date": "^3.6.0",
        "@react-types/shared": "^3.26.0"
      },
      "peerDependencies": {
        "react": "^16.8.0 || ^17.0.0-rc.1 || ^18.0.0 || ^19.0.0-rc.1"
      }
    },
    "node_modules/@react-types/checkbox": {
      "version": "3.9.0",
      "license": "Apache-2.0",
      "dependencies": {
        "@react-types/shared": "^3.26.0"
      },
      "peerDependencies": {
        "react": "^16.8.0 || ^17.0.0-rc.1 || ^18.0.0 || ^19.0.0-rc.1"
      }
    },
    "node_modules/@react-types/combobox": {
      "version": "3.13.1",
      "license": "Apache-2.0",
      "dependencies": {
        "@react-types/shared": "^3.26.0"
      },
      "peerDependencies": {
        "react": "^16.8.0 || ^17.0.0-rc.1 || ^18.0.0 || ^19.0.0-rc.1"
      }
    },
    "node_modules/@react-types/datepicker": {
      "version": "3.9.0",
      "license": "Apache-2.0",
      "dependencies": {
        "@internationalized/date": "^3.6.0",
        "@react-types/calendar": "^3.5.0",
        "@react-types/overlays": "^3.8.11",
        "@react-types/shared": "^3.26.0"
      },
      "peerDependencies": {
        "react": "^16.8.0 || ^17.0.0-rc.1 || ^18.0.0 || ^19.0.0-rc.1"
      }
    },
    "node_modules/@react-types/dialog": {
      "version": "3.5.22",
      "license": "Apache-2.0",
      "dependencies": {
        "@react-types/overlays": "^3.9.2",
        "@react-types/shared": "^3.32.1"
      },
      "peerDependencies": {
        "react": "^16.8.0 || ^17.0.0-rc.1 || ^18.0.0 || ^19.0.0-rc.1"
      }
    },
    "node_modules/@react-types/dialog/node_modules/@react-types/overlays": {
      "version": "3.9.2",
      "license": "Apache-2.0",
      "dependencies": {
        "@react-types/shared": "^3.32.1"
      },
      "peerDependencies": {
        "react": "^16.8.0 || ^17.0.0-rc.1 || ^18.0.0 || ^19.0.0-rc.1"
      }
    },
    "node_modules/@react-types/dialog/node_modules/@react-types/shared": {
      "version": "3.32.1",
      "license": "Apache-2.0",
      "peerDependencies": {
        "react": "^16.8.0 || ^17.0.0-rc.1 || ^18.0.0 || ^19.0.0-rc.1"
      }
    },
    "node_modules/@react-types/form": {
      "version": "3.7.8",
      "license": "Apache-2.0",
      "dependencies": {
        "@react-types/shared": "^3.26.0"
      },
      "peerDependencies": {
        "react": "^16.8.0 || ^17.0.0-rc.1 || ^18.0.0 || ^19.0.0-rc.1"
      }
    },
    "node_modules/@react-types/grid": {
      "version": "3.2.10",
      "license": "Apache-2.0",
      "dependencies": {
        "@react-types/shared": "^3.26.0"
      },
      "peerDependencies": {
        "react": "^16.8.0 || ^17.0.0-rc.1 || ^18.0.0 || ^19.0.0-rc.1"
      }
    },
    "node_modules/@react-types/link": {
      "version": "3.5.9",
      "license": "Apache-2.0",
      "dependencies": {
        "@react-types/shared": "^3.26.0"
      },
      "peerDependencies": {
        "react": "^16.8.0 || ^17.0.0-rc.1 || ^18.0.0 || ^19.0.0-rc.1"
      }
    },
    "node_modules/@react-types/listbox": {
      "version": "3.7.4",
      "license": "Apache-2.0",
      "dependencies": {
        "@react-types/shared": "^3.32.1"
      },
      "peerDependencies": {
        "react": "^16.8.0 || ^17.0.0-rc.1 || ^18.0.0 || ^19.0.0-rc.1"
      }
    },
    "node_modules/@react-types/listbox/node_modules/@react-types/shared": {
      "version": "3.32.1",
      "license": "Apache-2.0",
      "peerDependencies": {
        "react": "^16.8.0 || ^17.0.0-rc.1 || ^18.0.0 || ^19.0.0-rc.1"
      }
    },
    "node_modules/@react-types/menu": {
      "version": "3.9.13",
      "license": "Apache-2.0",
      "dependencies": {
        "@react-types/overlays": "^3.8.11",
        "@react-types/shared": "^3.26.0"
      },
      "peerDependencies": {
        "react": "^16.8.0 || ^17.0.0-rc.1 || ^18.0.0 || ^19.0.0-rc.1"
      }
    },
    "node_modules/@react-types/overlays": {
      "version": "3.8.11",
      "license": "Apache-2.0",
      "dependencies": {
        "@react-types/shared": "^3.26.0"
      },
      "peerDependencies": {
        "react": "^16.8.0 || ^17.0.0-rc.1 || ^18.0.0 || ^19.0.0-rc.1"
      }
    },
    "node_modules/@react-types/progress": {
      "version": "3.5.8",
      "license": "Apache-2.0",
      "dependencies": {
        "@react-types/shared": "^3.26.0"
      },
      "peerDependencies": {
        "react": "^16.8.0 || ^17.0.0-rc.1 || ^18.0.0 || ^19.0.0-rc.1"
      }
    },
    "node_modules/@react-types/radio": {
      "version": "3.8.5",
      "license": "Apache-2.0",
      "dependencies": {
        "@react-types/shared": "^3.26.0"
      },
      "peerDependencies": {
        "react": "^16.8.0 || ^17.0.0-rc.1 || ^18.0.0 || ^19.0.0-rc.1"
      }
    },
    "node_modules/@react-types/select": {
      "version": "3.9.8",
      "license": "Apache-2.0",
      "dependencies": {
        "@react-types/shared": "^3.26.0"
      },
      "peerDependencies": {
        "react": "^16.8.0 || ^17.0.0-rc.1 || ^18.0.0 || ^19.0.0-rc.1"
      }
    },
    "node_modules/@react-types/shared": {
      "version": "3.26.0",
      "license": "Apache-2.0",
      "peerDependencies": {
        "react": "^16.8.0 || ^17.0.0-rc.1 || ^18.0.0 || ^19.0.0-rc.1"
      }
    },
    "node_modules/@react-types/slider": {
      "version": "3.8.2",
      "license": "Apache-2.0",
      "dependencies": {
        "@react-types/shared": "^3.32.1"
      },
      "peerDependencies": {
        "react": "^16.8.0 || ^17.0.0-rc.1 || ^18.0.0 || ^19.0.0-rc.1"
      }
    },
    "node_modules/@react-types/slider/node_modules/@react-types/shared": {
      "version": "3.32.1",
      "license": "Apache-2.0",
      "peerDependencies": {
        "react": "^16.8.0 || ^17.0.0-rc.1 || ^18.0.0 || ^19.0.0-rc.1"
      }
    },
    "node_modules/@react-types/switch": {
      "version": "3.5.15",
      "license": "Apache-2.0",
      "dependencies": {
        "@react-types/shared": "^3.32.1"
      },
      "peerDependencies": {
        "react": "^16.8.0 || ^17.0.0-rc.1 || ^18.0.0 || ^19.0.0-rc.1"
      }
    },
    "node_modules/@react-types/switch/node_modules/@react-types/shared": {
      "version": "3.32.1",
      "license": "Apache-2.0",
      "peerDependencies": {
        "react": "^16.8.0 || ^17.0.0-rc.1 || ^18.0.0 || ^19.0.0-rc.1"
      }
    },
    "node_modules/@react-types/table": {
      "version": "3.10.3",
      "license": "Apache-2.0",
      "dependencies": {
        "@react-types/grid": "^3.2.10",
        "@react-types/shared": "^3.26.0"
      },
      "peerDependencies": {
        "react": "^16.8.0 || ^17.0.0-rc.1 || ^18.0.0 || ^19.0.0-rc.1"
      }
    },
    "node_modules/@react-types/tabs": {
      "version": "3.3.11",
      "license": "Apache-2.0",
      "dependencies": {
        "@react-types/shared": "^3.26.0"
      },
      "peerDependencies": {
        "react": "^16.8.0 || ^17.0.0-rc.1 || ^18.0.0 || ^19.0.0-rc.1"
      }
    },
    "node_modules/@react-types/textfield": {
      "version": "3.10.0",
      "license": "Apache-2.0",
      "dependencies": {
        "@react-types/shared": "^3.26.0"
      },
      "peerDependencies": {
        "react": "^16.8.0 || ^17.0.0-rc.1 || ^18.0.0 || ^19.0.0-rc.1"
      }
    },
    "node_modules/@react-types/tooltip": {
      "version": "3.4.13",
      "license": "Apache-2.0",
      "dependencies": {
        "@react-types/overlays": "^3.8.11",
        "@react-types/shared": "^3.26.0"
      },
      "peerDependencies": {
        "react": "^16.8.0 || ^17.0.0-rc.1 || ^18.0.0 || ^19.0.0-rc.1"
      }
    },
    "node_modules/@rtsao/scc": {
      "version": "1.1.0",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@rushstack/eslint-patch": {
      "version": "1.15.0",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@stripe/react-stripe-js": {
      "version": "2.9.0",
      "license": "MIT",
      "dependencies": {
        "prop-types": "^15.7.2"
      },
      "peerDependencies": {
        "@stripe/stripe-js": "^1.44.1 || ^2.0.0 || ^3.0.0 || ^4.0.0",
        "react": "^16.8.0 || ^17.0.0 || ^18.0.0",
        "react-dom": "^16.8.0 || ^17.0.0 || ^18.0.0"
      }
    },
    "node_modules/@stripe/stripe-js": {
      "version": "2.4.0",
      "license": "MIT"
    },
    "node_modules/@swc/counter": {
      "version": "0.1.3",
      "license": "Apache-2.0"
    },
    "node_modules/@swc/helpers": {
      "version": "0.5.17",
      "license": "Apache-2.0",
      "dependencies": {
        "tslib": "^2.8.0"
      }
    },
    "node_modules/@swc/helpers/node_modules/tslib": {
      "version": "2.8.1",
      "license": "0BSD"
    },
    "node_modules/@tanstack/react-virtual": {
      "version": "3.11.2",
      "license": "MIT",
      "dependencies": {
        "@tanstack/virtual-core": "3.11.2"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/tannerlinsley"
      },
      "peerDependencies": {
        "react": "^16.8.0 || ^17.0.0 || ^18.0.0 || ^19.0.0",
        "react-dom": "^16.8.0 || ^17.0.0 || ^18.0.0 || ^19.0.0"
      }
    },
    "node_modules/@tanstack/virtual-core": {
      "version": "3.11.2",
      "license": "MIT",
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/tannerlinsley"
      }
    },
    "node_modules/@types/body-parser": {
      "version": "1.19.6",
      "license": "MIT",
      "dependencies": {
        "@types/connect": "*",
        "@types/node": "*"
      }
    },
    "node_modules/@types/connect": {
      "version": "3.4.38",
      "license": "MIT",
      "dependencies": {
        "@types/node": "*"
      }
    },
    "node_modules/@types/cookies": {
      "version": "0.7.7",
      "license": "MIT",
      "dependencies": {
        "@types/connect": "*",
        "@types/express": "*",
        "@types/keygrip": "*",
        "@types/node": "*"
      }
    },
    "node_modules/@types/d3-array": {
      "version": "3.2.2",
      "license": "MIT"
    },
    "node_modules/@types/d3-color": {
      "version": "3.1.3",
      "license": "MIT"
    },
    "node_modules/@types/d3-ease": {
      "version": "3.0.2",
      "license": "MIT"
    },
    "node_modules/@types/d3-interpolate": {
      "version": "3.0.4",
      "license": "MIT",
      "dependencies": {
        "@types/d3-color": "*"
      }
    },
    "node_modules/@types/d3-path": {
      "version": "3.1.1",
      "license": "MIT"
    },
    "node_modules/@types/d3-scale": {
      "version": "4.0.9",
      "license": "MIT",
      "dependencies": {
        "@types/d3-time": "*"
      }
    },
    "node_modules/@types/d3-shape": {
      "version": "3.1.7",
      "license": "MIT",
      "dependencies": {
        "@types/d3-path": "*"
      }
    },
    "node_modules/@types/d3-time": {
      "version": "3.0.4",
      "license": "MIT"
    },
    "node_modules/@types/d3-timer": {
      "version": "3.0.2",
      "license": "MIT"
    },
    "node_modules/@types/express": {
      "version": "4.17.14",
      "license": "MIT",
      "dependencies": {
        "@types/body-parser": "*",
        "@types/express-serve-static-core": "^4.17.18",
        "@types/qs": "*",
        "@types/serve-static": "*"
      }
    },
    "node_modules/@types/express-serve-static-core": {
      "version": "4.19.7",
      "license": "MIT",
      "dependencies": {
        "@types/node": "*",
        "@types/qs": "*",
        "@types/range-parser": "*",
        "@types/send": "*"
      }
    },
    "node_modules/@types/http-errors": {
      "version": "2.0.5",
      "license": "MIT"
    },
    "node_modules/@types/json5": {
      "version": "0.0.29",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@types/keygrip": {
      "version": "1.0.6",
      "license": "MIT"
    },
    "node_modules/@types/lodash": {
      "version": "4.17.21",
      "license": "MIT"
    },
    "node_modules/@types/lodash.debounce": {
      "version": "4.0.9",
      "license": "MIT",
      "dependencies": {
        "@types/lodash": "*"
      }
    },
    "node_modules/@types/node": {
      "version": "20.19.25",
      "license": "MIT",
      "dependencies": {
        "undici-types": "~6.21.0"
      }
    },
    "node_modules/@types/node-fetch": {
      "version": "2.6.2",
      "license": "MIT",
      "dependencies": {
        "@types/node": "*",
        "form-data": "^3.0.0"
      }
    },
    "node_modules/@types/parse-json": {
      "version": "4.0.2",
      "license": "MIT"
    },
    "node_modules/@types/prop-types": {
      "version": "15.7.15",
      "license": "MIT"
    },
    "node_modules/@types/qs": {
      "version": "6.14.0",
      "license": "MIT"
    },
    "node_modules/@types/range-parser": {
      "version": "1.2.7",
      "license": "MIT"
    },
    "node_modules/@types/react": {
      "version": "18.3.27",
      "license": "MIT",
      "dependencies": {
        "@types/prop-types": "*",
        "csstype": "^3.2.2"
      }
    },
    "node_modules/@types/react-dom": {
      "version": "18.3.7",
      "dev": true,
      "license": "MIT",
      "peerDependencies": {
        "@types/react": "^18.0.0"
      }
    },
    "node_modules/@types/react-transition-group": {
      "version": "4.4.12",
      "license": "MIT",
      "peerDependencies": {
        "@types/react": "*"
      }
    },
    "node_modules/@types/react/node_modules/csstype": {
      "version": "3.2.3",
      "license": "MIT"
    },
    "node_modules/@types/send": {
      "version": "1.2.1",
      "license": "MIT",
      "dependencies": {
        "@types/node": "*"
      }
    },
    "node_modules/@types/serve-static": {
      "version": "2.2.0",
      "license": "MIT",
      "dependencies": {
        "@types/http-errors": "*",
        "@types/node": "*"
      }
    },
    "node_modules/@typescript-eslint/eslint-plugin": {
      "version": "8.48.0",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@eslint-community/regexpp": "^4.10.0",
        "@typescript-eslint/scope-manager": "8.48.0",
        "@typescript-eslint/type-utils": "8.48.0",
        "@typescript-eslint/utils": "8.48.0",
        "@typescript-eslint/visitor-keys": "8.48.0",
        "graphemer": "^1.4.0",
        "ignore": "^7.0.0",
        "natural-compare": "^1.4.0",
        "ts-api-utils": "^2.1.0"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      },
      "peerDependencies": {
        "@typescript-eslint/parser": "^8.48.0",
        "eslint": "^8.57.0 || ^9.0.0",
        "typescript": ">=4.8.4 <6.0.0"
      }
    },
    "node_modules/@typescript-eslint/eslint-plugin/node_modules/ignore": {
      "version": "7.0.5",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 4"
      }
    },
    "node_modules/@typescript-eslint/parser": {
      "version": "8.48.0",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@typescript-eslint/scope-manager": "8.48.0",
        "@typescript-eslint/types": "8.48.0",
        "@typescript-eslint/typescript-estree": "8.48.0",
        "@typescript-eslint/visitor-keys": "8.48.0",
        "debug": "^4.3.4"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      },
      "peerDependencies": {
        "eslint": "^8.57.0 || ^9.0.0",
        "typescript": ">=4.8.4 <6.0.0"
      }
    },
    "node_modules/@typescript-eslint/project-service": {
      "version": "8.48.0",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@typescript-eslint/tsconfig-utils": "^8.48.0",
        "@typescript-eslint/types": "^8.48.0",
        "debug": "^4.3.4"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      },
      "peerDependencies": {
        "typescript": ">=4.8.4 <6.0.0"
      }
    },
    "node_modules/@typescript-eslint/scope-manager": {
      "version": "8.48.0",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@typescript-eslint/types": "8.48.0",
        "@typescript-eslint/visitor-keys": "8.48.0"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      }
    },
    "node_modules/@typescript-eslint/tsconfig-utils": {
      "version": "8.48.0",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      },
      "peerDependencies": {
        "typescript": ">=4.8.4 <6.0.0"
      }
    },
    "node_modules/@typescript-eslint/type-utils": {
      "version": "8.48.0",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@typescript-eslint/types": "8.48.0",
        "@typescript-eslint/typescript-estree": "8.48.0",
        "@typescript-eslint/utils": "8.48.0",
        "debug": "^4.3.4",
        "ts-api-utils": "^2.1.0"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      },
      "peerDependencies": {
        "eslint": "^8.57.0 || ^9.0.0",
        "typescript": ">=4.8.4 <6.0.0"
      }
    },
    "node_modules/@typescript-eslint/types": {
      "version": "8.48.0",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      }
    },
    "node_modules/@typescript-eslint/typescript-estree": {
      "version": "8.48.0",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@typescript-eslint/project-service": "8.48.0",
        "@typescript-eslint/tsconfig-utils": "8.48.0",
        "@typescript-eslint/types": "8.48.0",
        "@typescript-eslint/visitor-keys": "8.48.0",
        "debug": "^4.3.4",
        "minimatch": "^9.0.4",
        "semver": "^7.6.0",
        "tinyglobby": "^0.2.15",
        "ts-api-utils": "^2.1.0"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      },
      "peerDependencies": {
        "typescript": ">=4.8.4 <6.0.0"
      }
    },
    "node_modules/@typescript-eslint/typescript-estree/node_modules/brace-expansion": {
      "version": "2.0.2",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "balanced-match": "^1.0.0"
      }
    },
    "node_modules/@typescript-eslint/typescript-estree/node_modules/minimatch": {
      "version": "9.0.5",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "brace-expansion": "^2.0.1"
      },
      "engines": {
        "node": ">=16 || 14 >=14.17"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      }
    },
    "node_modules/@typescript-eslint/utils": {
      "version": "8.48.0",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@eslint-community/eslint-utils": "^4.7.0",
        "@typescript-eslint/scope-manager": "8.48.0",
        "@typescript-eslint/types": "8.48.0",
        "@typescript-eslint/typescript-estree": "8.48.0"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      },
      "peerDependencies": {
        "eslint": "^8.57.0 || ^9.0.0",
        "typescript": ">=4.8.4 <6.0.0"
      }
    },
    "node_modules/@typescript-eslint/visitor-keys": {
      "version": "8.48.0",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@typescript-eslint/types": "8.48.0",
        "eslint-visitor-keys": "^4.2.1"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      }
    },
    "node_modules/@typescript-eslint/visitor-keys/node_modules/eslint-visitor-keys": {
      "version": "4.2.1",
      "dev": true,
      "license": "Apache-2.0",
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      }
    },
    "node_modules/@ungap/structured-clone": {
      "version": "1.3.0",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/@unrs/resolver-binding-win32-x64-msvc": {
      "version": "1.11.1",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ]
    },
    "node_modules/acorn": {
      "version": "8.15.0",
      "dev": true,
      "license": "MIT",
      "bin": {
        "acorn": "bin/acorn"
      },
      "engines": {
        "node": ">=0.4.0"
      }
    },
    "node_modules/acorn-jsx": {
      "version": "5.3.2",
      "dev": true,
      "license": "MIT",
      "peerDependencies": {
        "acorn": "^6.0.0 || ^7.0.0 || ^8.0.0"
      }
    },
    "node_modules/ajv": {
      "version": "6.12.6",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "fast-deep-equal": "^3.1.1",
        "fast-json-stable-stringify": "^2.0.0",
        "json-schema-traverse": "^0.4.1",
        "uri-js": "^4.2.2"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/epoberezkin"
      }
    },
    "node_modules/ansi-regex": {
      "version": "5.0.1",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/ansi-styles": {
      "version": "4.3.0",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "color-convert": "^2.0.1"
      },
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/chalk/ansi-styles?sponsor=1"
      }
    },
    "node_modules/any-promise": {
      "version": "1.3.0",
      "license": "MIT"
    },
    "node_modules/anymatch": {
      "version": "3.1.3",
      "license": "ISC",
      "dependencies": {
        "normalize-path": "^3.0.0",
        "picomatch": "^2.0.4"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/arg": {
      "version": "5.0.2",
      "license": "MIT"
    },
    "node_modules/argparse": {
      "version": "2.0.1",
      "dev": true,
      "license": "Python-2.0"
    },
    "node_modules/aria-query": {
      "version": "5.3.2",
      "dev": true,
      "license": "Apache-2.0",
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/array-buffer-byte-length": {
      "version": "1.0.2",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.3",
        "is-array-buffer": "^3.0.5"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/array-includes": {
      "version": "3.1.9",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.8",
        "call-bound": "^1.0.4",
        "define-properties": "^1.2.1",
        "es-abstract": "^1.24.0",
        "es-object-atoms": "^1.1.1",
        "get-intrinsic": "^1.3.0",
        "is-string": "^1.1.1",
        "math-intrinsics": "^1.1.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/array.prototype.findlast": {
      "version": "1.2.5",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.7",
        "define-properties": "^1.2.1",
        "es-abstract": "^1.23.2",
        "es-errors": "^1.3.0",
        "es-object-atoms": "^1.0.0",
        "es-shim-unscopables": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/array.prototype.findlastindex": {
      "version": "1.2.6",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.8",
        "call-bound": "^1.0.4",
        "define-properties": "^1.2.1",
        "es-abstract": "^1.23.9",
        "es-errors": "^1.3.0",
        "es-object-atoms": "^1.1.1",
        "es-shim-unscopables": "^1.1.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/array.prototype.flat": {
      "version": "1.3.3",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.8",
        "define-properties": "^1.2.1",
        "es-abstract": "^1.23.5",
        "es-shim-unscopables": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/array.prototype.flatmap": {
      "version": "1.3.3",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.8",
        "define-properties": "^1.2.1",
        "es-abstract": "^1.23.5",
        "es-shim-unscopables": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/array.prototype.tosorted": {
      "version": "1.1.4",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.7",
        "define-properties": "^1.2.1",
        "es-abstract": "^1.23.3",
        "es-errors": "^1.3.0",
        "es-shim-unscopables": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/arraybuffer.prototype.slice": {
      "version": "1.0.4",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "array-buffer-byte-length": "^1.0.1",
        "call-bind": "^1.0.8",
        "define-properties": "^1.2.1",
        "es-abstract": "^1.23.5",
        "es-errors": "^1.3.0",
        "get-intrinsic": "^1.2.6",
        "is-array-buffer": "^3.0.4"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/asn1js": {
      "version": "3.0.6",
      "license": "BSD-3-Clause",
      "dependencies": {
        "pvtsutils": "^1.3.6",
        "pvutils": "^1.1.3",
        "tslib": "^2.8.1"
      },
      "engines": {
        "node": ">=12.0.0"
      }
    },
    "node_modules/asn1js/node_modules/tslib": {
      "version": "2.8.1",
      "license": "0BSD"
    },
    "node_modules/ast-types-flow": {
      "version": "0.0.8",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/async-function": {
      "version": "1.0.0",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/asynckit": {
      "version": "0.4.0",
      "license": "MIT"
    },
    "node_modules/autoprefixer": {
      "version": "10.4.22",
      "dev": true,
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/postcss/"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/autoprefixer"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "browserslist": "^4.27.0",
        "caniuse-lite": "^1.0.30001754",
        "fraction.js": "^5.3.4",
        "normalize-range": "^0.1.2",
        "picocolors": "^1.1.1",
        "postcss-value-parser": "^4.2.0"
      },
      "bin": {
        "autoprefixer": "bin/autoprefixer"
      },
      "engines": {
        "node": "^10 || ^12 || >=14"
      },
      "peerDependencies": {
        "postcss": "^8.1.0"
      }
    },
    "node_modules/available-typed-arrays": {
      "version": "1.0.7",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "possible-typed-array-names": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/axe-core": {
      "version": "4.11.0",
      "dev": true,
      "license": "MPL-2.0",
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/axios": {
      "version": "1.13.2",
      "license": "MIT",
      "dependencies": {
        "follow-redirects": "^1.15.6",
        "form-data": "^4.0.4",
        "proxy-from-env": "^1.1.0"
      }
    },
    "node_modules/axios/node_modules/form-data": {
      "version": "4.0.5",
      "license": "MIT",
      "dependencies": {
        "asynckit": "^0.4.0",
        "combined-stream": "^1.0.8",
        "es-set-tostringtag": "^2.1.0",
        "hasown": "^2.0.2",
        "mime-types": "^2.1.12"
      },
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/axobject-query": {
      "version": "4.1.0",
      "dev": true,
      "license": "Apache-2.0",
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/babel-plugin-macros": {
      "version": "3.1.0",
      "license": "MIT",
      "dependencies": {
        "@babel/runtime": "^7.12.5",
        "cosmiconfig": "^7.0.0",
        "resolve": "^1.19.0"
      },
      "engines": {
        "node": ">=10",
        "npm": ">=6"
      }
    },
    "node_modules/balanced-match": {
      "version": "1.0.2",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/baseline-browser-mapping": {
      "version": "2.8.31",
      "dev": true,
      "license": "Apache-2.0",
      "bin": {
        "baseline-browser-mapping": "dist/cli.js"
      }
    },
    "node_modules/binary-extensions": {
      "version": "2.3.0",
      "license": "MIT",
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/brace-expansion": {
      "version": "1.1.12",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "balanced-match": "^1.0.0",
        "concat-map": "0.0.1"
      }
    },
    "node_modules/braces": {
      "version": "3.0.3",
      "license": "MIT",
      "dependencies": {
        "fill-range": "^7.1.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/browserslist": {
      "version": "4.28.0",
      "dev": true,
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/browserslist"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/browserslist"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "baseline-browser-mapping": "^2.8.25",
        "caniuse-lite": "^1.0.30001754",
        "electron-to-chromium": "^1.5.249",
        "node-releases": "^2.0.27",
        "update-browserslist-db": "^1.1.4"
      },
      "bin": {
        "browserslist": "cli.js"
      },
      "engines": {
        "node": "^6 || ^7 || ^8 || ^9 || ^10 || ^11 || ^12 || >=13.7"
      }
    },
    "node_modules/busboy": {
      "version": "1.6.0",
      "dependencies": {
        "streamsearch": "^1.1.0"
      },
      "engines": {
        "node": ">=10.16.0"
      }
    },
    "node_modules/call-bind": {
      "version": "1.0.8",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind-apply-helpers": "^1.0.0",
        "es-define-property": "^1.0.0",
        "get-intrinsic": "^1.2.4",
        "set-function-length": "^1.2.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/call-bind-apply-helpers": {
      "version": "1.0.2",
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0",
        "function-bind": "^1.1.2"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/call-bound": {
      "version": "1.0.4",
      "license": "MIT",
      "dependencies": {
        "call-bind-apply-helpers": "^1.0.2",
        "get-intrinsic": "^1.3.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/callsites": {
      "version": "3.1.0",
      "license": "MIT",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/camelcase": {
      "version": "5.3.1",
      "license": "MIT",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/camelcase-css": {
      "version": "2.0.1",
      "license": "MIT",
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/camelcase-keys": {
      "version": "6.2.2",
      "license": "MIT",
      "dependencies": {
        "camelcase": "^5.3.1",
        "map-obj": "^4.0.0",
        "quick-lru": "^4.0.1"
      },
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/caniuse-lite": {
      "version": "1.0.30001757",
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/browserslist"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/caniuse-lite"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "CC-BY-4.0"
    },
    "node_modules/chalk": {
      "version": "4.1.2",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ansi-styles": "^4.1.0",
        "supports-color": "^7.1.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/chalk/chalk?sponsor=1"
      }
    },
    "node_modules/chokidar": {
      "version": "3.6.0",
      "license": "MIT",
      "dependencies": {
        "anymatch": "~3.1.2",
        "braces": "~3.0.2",
        "glob-parent": "~5.1.2",
        "is-binary-path": "~2.1.0",
        "is-glob": "~4.0.1",
        "normalize-path": "~3.0.0",
        "readdirp": "~3.6.0"
      },
      "engines": {
        "node": ">= 8.10.0"
      },
      "funding": {
        "url": "https://paulmillr.com/funding/"
      },
      "optionalDependencies": {
        "fsevents": "~2.3.2"
      }
    },
    "node_modules/chokidar/node_modules/glob-parent": {
      "version": "5.1.2",
      "license": "ISC",
      "dependencies": {
        "is-glob": "^4.0.1"
      },
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/client-only": {
      "version": "0.0.1",
      "license": "MIT"
    },
    "node_modules/cloudinary": {
      "version": "1.41.3",
      "license": "MIT",
      "dependencies": {
        "cloudinary-core": "^2.13.0",
        "core-js": "^3.30.1",
        "lodash": "^4.17.21",
        "q": "^1.5.1"
      },
      "engines": {
        "node": ">=0.6"
      }
    },
    "node_modules/cloudinary-core": {
      "version": "2.14.0",
      "license": "MIT",
      "peerDependencies": {
        "lodash": ">=4.0"
      }
    },
    "node_modules/clsx": {
      "version": "2.1.1",
      "license": "MIT",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/color": {
      "version": "4.2.3",
      "license": "MIT",
      "dependencies": {
        "color-convert": "^2.0.1",
        "color-string": "^1.9.0"
      },
      "engines": {
        "node": ">=12.5.0"
      }
    },
    "node_modules/color-convert": {
      "version": "2.0.1",
      "license": "MIT",
      "dependencies": {
        "color-name": "~1.1.4"
      },
      "engines": {
        "node": ">=7.0.0"
      }
    },
    "node_modules/color-name": {
      "version": "1.1.4",
      "license": "MIT"
    },
    "node_modules/color-string": {
      "version": "1.9.1",
      "license": "MIT",
      "dependencies": {
        "color-name": "^1.0.0",
        "simple-swizzle": "^0.2.2"
      }
    },
    "node_modules/color2k": {
      "version": "2.0.3",
      "license": "MIT"
    },
    "node_modules/combined-stream": {
      "version": "1.0.8",
      "license": "MIT",
      "dependencies": {
        "delayed-stream": "~1.0.0"
      },
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/commander": {
      "version": "4.1.1",
      "license": "MIT",
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/compute-scroll-into-view": {
      "version": "3.1.1",
      "license": "MIT"
    },
    "node_modules/concat-map": {
      "version": "0.0.1",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/convert-source-map": {
      "version": "1.9.0",
      "license": "MIT"
    },
    "node_modules/cookie": {
      "version": "0.5.0",
      "license": "MIT",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/core-js": {
      "version": "3.47.0",
      "hasInstallScript": true,
      "license": "MIT",
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/core-js"
      }
    },
    "node_modules/cosmiconfig": {
      "version": "7.1.0",
      "license": "MIT",
      "dependencies": {
        "@types/parse-json": "^4.0.0",
        "import-fresh": "^3.2.1",
        "parse-json": "^5.0.0",
        "path-type": "^4.0.0",
        "yaml": "^1.10.0"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/cross-spawn": {
      "version": "7.0.6",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "path-key": "^3.1.0",
        "shebang-command": "^2.0.0",
        "which": "^2.0.1"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/cssesc": {
      "version": "3.0.0",
      "license": "MIT",
      "bin": {
        "cssesc": "bin/cssesc"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/csstype": {
      "version": "3.1.1",
      "license": "MIT"
    },
    "node_modules/d3-array": {
      "version": "3.2.4",
      "license": "ISC",
      "dependencies": {
        "internmap": "1 - 2"
      },
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/d3-color": {
      "version": "3.1.0",
      "license": "ISC",
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/d3-ease": {
      "version": "3.0.1",
      "license": "BSD-3-Clause",
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/d3-format": {
      "version": "3.1.0",
      "license": "ISC",
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/d3-interpolate": {
      "version": "3.0.1",
      "license": "ISC",
      "dependencies": {
        "d3-color": "1 - 3"
      },
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/d3-path": {
      "version": "3.1.0",
      "license": "ISC",
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/d3-scale": {
      "version": "4.0.2",
      "license": "ISC",
      "dependencies": {
        "d3-array": "2.10.0 - 3",
        "d3-format": "1 - 3",
        "d3-interpolate": "1.2.0 - 3",
        "d3-time": "2.1.1 - 3",
        "d3-time-format": "2 - 4"
      },
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/d3-shape": {
      "version": "3.2.0",
      "license": "ISC",
      "dependencies": {
        "d3-path": "^3.1.0"
      },
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/d3-time": {
      "version": "3.1.0",
      "license": "ISC",
      "dependencies": {
        "d3-array": "2 - 3"
      },
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/d3-time-format": {
      "version": "4.1.0",
      "license": "ISC",
      "dependencies": {
        "d3-time": "1 - 3"
      },
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/d3-timer": {
      "version": "3.0.1",
      "license": "ISC",
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/damerau-levenshtein": {
      "version": "1.0.8",
      "dev": true,
      "license": "BSD-2-Clause"
    },
    "node_modules/data-view-buffer": {
      "version": "1.0.2",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.3",
        "es-errors": "^1.3.0",
        "is-data-view": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/data-view-byte-length": {
      "version": "1.0.2",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.3",
        "es-errors": "^1.3.0",
        "is-data-view": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/inspect-js"
      }
    },
    "node_modules/data-view-byte-offset": {
      "version": "1.0.1",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.2",
        "es-errors": "^1.3.0",
        "is-data-view": "^1.0.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/debug": {
      "version": "4.4.3",
      "license": "MIT",
      "dependencies": {
        "ms": "^2.1.3"
      },
      "engines": {
        "node": ">=6.0"
      },
      "peerDependenciesMeta": {
        "supports-color": {
          "optional": true
        }
      }
    },
    "node_modules/decimal.js": {
      "version": "10.6.0",
      "license": "MIT"
    },
    "node_modules/decimal.js-light": {
      "version": "2.5.1",
      "license": "MIT"
    },
    "node_modules/deep-is": {
      "version": "0.1.4",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/deepmerge": {
      "version": "4.2.2",
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/define-data-property": {
      "version": "1.1.4",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "es-define-property": "^1.0.0",
        "es-errors": "^1.3.0",
        "gopd": "^1.0.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/define-properties": {
      "version": "1.2.1",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "define-data-property": "^1.0.1",
        "has-property-descriptors": "^1.0.0",
        "object-keys": "^1.1.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/delayed-stream": {
      "version": "1.0.0",
      "license": "MIT",
      "engines": {
        "node": ">=0.4.0"
      }
    },
    "node_modules/didyoumean": {
      "version": "1.2.2",
      "license": "Apache-2.0"
    },
    "node_modules/dlv": {
      "version": "1.1.3",
      "license": "MIT"
    },
    "node_modules/doctrine": {
      "version": "3.0.0",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "esutils": "^2.0.2"
      },
      "engines": {
        "node": ">=6.0.0"
      }
    },
    "node_modules/dom-helpers": {
      "version": "5.2.1",
      "license": "MIT",
      "dependencies": {
        "@babel/runtime": "^7.8.7",
        "csstype": "^3.0.2"
      }
    },
    "node_modules/dot-case": {
      "version": "3.0.4",
      "license": "MIT",
      "dependencies": {
        "no-case": "^3.0.4",
        "tslib": "^2.0.3"
      }
    },
    "node_modules/dunder-proto": {
      "version": "1.0.1",
      "license": "MIT",
      "dependencies": {
        "call-bind-apply-helpers": "^1.0.1",
        "es-errors": "^1.3.0",
        "gopd": "^1.2.0"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/eastasianwidth": {
      "version": "0.2.0",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/electron-to-chromium": {
      "version": "1.5.262",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/emoji-regex": {
      "version": "9.2.2",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/error-ex": {
      "version": "1.3.4",
      "license": "MIT",
      "dependencies": {
        "is-arrayish": "^0.2.1"
      }
    },
    "node_modules/es-abstract": {
      "version": "1.24.0",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "array-buffer-byte-length": "^1.0.2",
        "arraybuffer.prototype.slice": "^1.0.4",
        "available-typed-arrays": "^1.0.7",
        "call-bind": "^1.0.8",
        "call-bound": "^1.0.4",
        "data-view-buffer": "^1.0.2",
        "data-view-byte-length": "^1.0.2",
        "data-view-byte-offset": "^1.0.1",
        "es-define-property": "^1.0.1",
        "es-errors": "^1.3.0",
        "es-object-atoms": "^1.1.1",
        "es-set-tostringtag": "^2.1.0",
        "es-to-primitive": "^1.3.0",
        "function.prototype.name": "^1.1.8",
        "get-intrinsic": "^1.3.0",
        "get-proto": "^1.0.1",
        "get-symbol-description": "^1.1.0",
        "globalthis": "^1.0.4",
        "gopd": "^1.2.0",
        "has-property-descriptors": "^1.0.2",
        "has-proto": "^1.2.0",
        "has-symbols": "^1.1.0",
        "hasown": "^2.0.2",
        "internal-slot": "^1.1.0",
        "is-array-buffer": "^3.0.5",
        "is-callable": "^1.2.7",
        "is-data-view": "^1.0.2",
        "is-negative-zero": "^2.0.3",
        "is-regex": "^1.2.1",
        "is-set": "^2.0.3",
        "is-shared-array-buffer": "^1.0.4",
        "is-string": "^1.1.1",
        "is-typed-array": "^1.1.15",
        "is-weakref": "^1.1.1",
        "math-intrinsics": "^1.1.0",
        "object-inspect": "^1.13.4",
        "object-keys": "^1.1.1",
        "object.assign": "^4.1.7",
        "own-keys": "^1.0.1",
        "regexp.prototype.flags": "^1.5.4",
        "safe-array-concat": "^1.1.3",
        "safe-push-apply": "^1.0.0",
        "safe-regex-test": "^1.1.0",
        "set-proto": "^1.0.0",
        "stop-iteration-iterator": "^1.1.0",
        "string.prototype.trim": "^1.2.10",
        "string.prototype.trimend": "^1.0.9",
        "string.prototype.trimstart": "^1.0.8",
        "typed-array-buffer": "^1.0.3",
        "typed-array-byte-length": "^1.0.3",
        "typed-array-byte-offset": "^1.0.4",
        "typed-array-length": "^1.0.7",
        "unbox-primitive": "^1.1.0",
        "which-typed-array": "^1.1.19"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/es-define-property": {
      "version": "1.0.1",
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/es-errors": {
      "version": "1.3.0",
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/es-iterator-helpers": {
      "version": "1.2.1",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.8",
        "call-bound": "^1.0.3",
        "define-properties": "^1.2.1",
        "es-abstract": "^1.23.6",
        "es-errors": "^1.3.0",
        "es-set-tostringtag": "^2.0.3",
        "function-bind": "^1.1.2",
        "get-intrinsic": "^1.2.6",
        "globalthis": "^1.0.4",
        "gopd": "^1.2.0",
        "has-property-descriptors": "^1.0.2",
        "has-proto": "^1.2.0",
        "has-symbols": "^1.1.0",
        "internal-slot": "^1.1.0",
        "iterator.prototype": "^1.1.4",
        "safe-array-concat": "^1.1.3"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/es-object-atoms": {
      "version": "1.1.1",
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/es-set-tostringtag": {
      "version": "2.1.0",
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0",
        "get-intrinsic": "^1.2.6",
        "has-tostringtag": "^1.0.2",
        "hasown": "^2.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/es-shim-unscopables": {
      "version": "1.1.0",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "hasown": "^2.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/es-to-primitive": {
      "version": "1.3.0",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "is-callable": "^1.2.7",
        "is-date-object": "^1.0.5",
        "is-symbol": "^1.0.4"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/escalade": {
      "version": "3.2.0",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/escape-string-regexp": {
      "version": "4.0.0",
      "license": "MIT",
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/eslint": {
      "version": "8.57.1",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@eslint-community/eslint-utils": "^4.2.0",
        "@eslint-community/regexpp": "^4.6.1",
        "@eslint/eslintrc": "^2.1.4",
        "@eslint/js": "8.57.1",
        "@humanwhocodes/config-array": "^0.13.0",
        "@humanwhocodes/module-importer": "^1.0.1",
        "@nodelib/fs.walk": "^1.2.8",
        "@ungap/structured-clone": "^1.2.0",
        "ajv": "^6.12.4",
        "chalk": "^4.0.0",
        "cross-spawn": "^7.0.2",
        "debug": "^4.3.2",
        "doctrine": "^3.0.0",
        "escape-string-regexp": "^4.0.0",
        "eslint-scope": "^7.2.2",
        "eslint-visitor-keys": "^3.4.3",
        "espree": "^9.6.1",
        "esquery": "^1.4.2",
        "esutils": "^2.0.2",
        "fast-deep-equal": "^3.1.3",
        "file-entry-cache": "^6.0.1",
        "find-up": "^5.0.0",
        "glob-parent": "^6.0.2",
        "globals": "^13.19.0",
        "graphemer": "^1.4.0",
        "ignore": "^5.2.0",
        "imurmurhash": "^0.1.4",
        "is-glob": "^4.0.0",
        "is-path-inside": "^3.0.3",
        "js-yaml": "^4.1.0",
        "json-stable-stringify-without-jsonify": "^1.0.1",
        "levn": "^0.4.1",
        "lodash.merge": "^4.6.2",
        "minimatch": "^3.1.2",
        "natural-compare": "^1.4.0",
        "optionator": "^0.9.3",
        "strip-ansi": "^6.0.1",
        "text-table": "^0.2.0"
      },
      "bin": {
        "eslint": "bin/eslint.js"
      },
      "engines": {
        "node": "^12.22.0 || ^14.17.0 || >=16.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      }
    },
    "node_modules/eslint-config-next": {
      "version": "14.2.25",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@next/eslint-plugin-next": "14.2.25",
        "@rushstack/eslint-patch": "^1.3.3",
        "@typescript-eslint/eslint-plugin": "^5.4.2 || ^6.0.0 || ^7.0.0 || ^8.0.0",
        "@typescript-eslint/parser": "^5.4.2 || ^6.0.0 || ^7.0.0 || ^8.0.0",
        "eslint-import-resolver-node": "^0.3.6",
        "eslint-import-resolver-typescript": "^3.5.2",
        "eslint-plugin-import": "^2.28.1",
        "eslint-plugin-jsx-a11y": "^6.7.1",
        "eslint-plugin-react": "^7.33.2",
        "eslint-plugin-react-hooks": "^4.5.0 || 5.0.0-canary-7118f5dd7-20230705"
      },
      "peerDependencies": {
        "eslint": "^7.23.0 || ^8.0.0",
        "typescript": ">=3.3.1"
      },
      "peerDependenciesMeta": {
        "typescript": {
          "optional": true
        }
      }
    },
    "node_modules/eslint-config-next/node_modules/doctrine": {
      "version": "2.1.0",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "esutils": "^2.0.2"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/eslint-config-next/node_modules/eslint-plugin-react": {
      "version": "7.37.5",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "array-includes": "^3.1.8",
        "array.prototype.findlast": "^1.2.5",
        "array.prototype.flatmap": "^1.3.3",
        "array.prototype.tosorted": "^1.1.4",
        "doctrine": "^2.1.0",
        "es-iterator-helpers": "^1.2.1",
        "estraverse": "^5.3.0",
        "hasown": "^2.0.2",
        "jsx-ast-utils": "^2.4.1 || ^3.0.0",
        "minimatch": "^3.1.2",
        "object.entries": "^1.1.9",
        "object.fromentries": "^2.0.8",
        "object.values": "^1.2.1",
        "prop-types": "^15.8.1",
        "resolve": "^2.0.0-next.5",
        "semver": "^6.3.1",
        "string.prototype.matchall": "^4.0.12",
        "string.prototype.repeat": "^1.0.0"
      },
      "engines": {
        "node": ">=4"
      },
      "peerDependencies": {
        "eslint": "^3 || ^4 || ^5 || ^6 || ^7 || ^8 || ^9.7"
      }
    },
    "node_modules/eslint-config-next/node_modules/resolve": {
      "version": "2.0.0-next.5",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "is-core-module": "^2.13.0",
        "path-parse": "^1.0.7",
        "supports-preserve-symlinks-flag": "^1.0.0"
      },
      "bin": {
        "resolve": "bin/resolve"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/eslint-config-next/node_modules/semver": {
      "version": "6.3.1",
      "dev": true,
      "license": "ISC",
      "bin": {
        "semver": "bin/semver.js"
      }
    },
    "node_modules/eslint-import-resolver-node": {
      "version": "0.3.9",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "debug": "^3.2.7",
        "is-core-module": "^2.13.0",
        "resolve": "^1.22.4"
      }
    },
    "node_modules/eslint-import-resolver-node/node_modules/debug": {
      "version": "3.2.7",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ms": "^2.1.1"
      }
    },
    "node_modules/eslint-import-resolver-typescript": {
      "version": "3.10.1",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "@nolyfill/is-core-module": "1.0.39",
        "debug": "^4.4.0",
        "get-tsconfig": "^4.10.0",
        "is-bun-module": "^2.0.0",
        "stable-hash": "^0.0.5",
        "tinyglobby": "^0.2.13",
        "unrs-resolver": "^1.6.2"
      },
      "engines": {
        "node": "^14.18.0 || >=16.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint-import-resolver-typescript"
      },
      "peerDependencies": {
        "eslint": "*",
        "eslint-plugin-import": "*",
        "eslint-plugin-import-x": "*"
      },
      "peerDependenciesMeta": {
        "eslint-plugin-import": {
          "optional": true
        },
        "eslint-plugin-import-x": {
          "optional": true
        }
      }
    },
    "node_modules/eslint-module-utils": {
      "version": "2.12.1",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "debug": "^3.2.7"
      },
      "engines": {
        "node": ">=4"
      },
      "peerDependenciesMeta": {
        "eslint": {
          "optional": true
        }
      }
    },
    "node_modules/eslint-module-utils/node_modules/debug": {
      "version": "3.2.7",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ms": "^2.1.1"
      }
    },
    "node_modules/eslint-plugin-import": {
      "version": "2.32.0",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@rtsao/scc": "^1.1.0",
        "array-includes": "^3.1.9",
        "array.prototype.findlastindex": "^1.2.6",
        "array.prototype.flat": "^1.3.3",
        "array.prototype.flatmap": "^1.3.3",
        "debug": "^3.2.7",
        "doctrine": "^2.1.0",
        "eslint-import-resolver-node": "^0.3.9",
        "eslint-module-utils": "^2.12.1",
        "hasown": "^2.0.2",
        "is-core-module": "^2.16.1",
        "is-glob": "^4.0.3",
        "minimatch": "^3.1.2",
        "object.fromentries": "^2.0.8",
        "object.groupby": "^1.0.3",
        "object.values": "^1.2.1",
        "semver": "^6.3.1",
        "string.prototype.trimend": "^1.0.9",
        "tsconfig-paths": "^3.15.0"
      },
      "engines": {
        "node": ">=4"
      },
      "peerDependencies": {
        "eslint": "^2 || ^3 || ^4 || ^5 || ^6 || ^7.2.0 || ^8 || ^9"
      }
    },
    "node_modules/eslint-plugin-import/node_modules/debug": {
      "version": "3.2.7",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ms": "^2.1.1"
      }
    },
    "node_modules/eslint-plugin-import/node_modules/doctrine": {
      "version": "2.1.0",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "esutils": "^2.0.2"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/eslint-plugin-import/node_modules/semver": {
      "version": "6.3.1",
      "dev": true,
      "license": "ISC",
      "bin": {
        "semver": "bin/semver.js"
      }
    },
    "node_modules/eslint-plugin-jsx-a11y": {
      "version": "6.10.2",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "aria-query": "^5.3.2",
        "array-includes": "^3.1.8",
        "array.prototype.flatmap": "^1.3.2",
        "ast-types-flow": "^0.0.8",
        "axe-core": "^4.10.0",
        "axobject-query": "^4.1.0",
        "damerau-levenshtein": "^1.0.8",
        "emoji-regex": "^9.2.2",
        "hasown": "^2.0.2",
        "jsx-ast-utils": "^3.3.5",
        "language-tags": "^1.0.9",
        "minimatch": "^3.1.2",
        "object.fromentries": "^2.0.8",
        "safe-regex-test": "^1.0.3",
        "string.prototype.includes": "^2.0.1"
      },
      "engines": {
        "node": ">=4.0"
      },
      "peerDependencies": {
        "eslint": "^3 || ^4 || ^5 || ^6 || ^7 || ^8 || ^9"
      }
    },
    "node_modules/eslint-plugin-react-hooks": {
      "version": "5.0.0-canary-7118f5dd7-20230705",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=10"
      },
      "peerDependencies": {
        "eslint": "^3.0.0 || ^4.0.0 || ^5.0.0 || ^6.0.0 || ^7.0.0 || ^8.0.0-0"
      }
    },
    "node_modules/eslint-scope": {
      "version": "7.2.2",
      "dev": true,
      "license": "BSD-2-Clause",
      "dependencies": {
        "esrecurse": "^4.3.0",
        "estraverse": "^5.2.0"
      },
      "engines": {
        "node": "^12.22.0 || ^14.17.0 || >=16.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      }
    },
    "node_modules/eslint-visitor-keys": {
      "version": "3.4.3",
      "dev": true,
      "license": "Apache-2.0",
      "engines": {
        "node": "^12.22.0 || ^14.17.0 || >=16.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      }
    },
    "node_modules/espree": {
      "version": "9.6.1",
      "dev": true,
      "license": "BSD-2-Clause",
      "dependencies": {
        "acorn": "^8.9.0",
        "acorn-jsx": "^5.3.2",
        "eslint-visitor-keys": "^3.4.1"
      },
      "engines": {
        "node": "^12.22.0 || ^14.17.0 || >=16.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      }
    },
    "node_modules/esquery": {
      "version": "1.6.0",
      "dev": true,
      "license": "BSD-3-Clause",
      "dependencies": {
        "estraverse": "^5.1.0"
      },
      "engines": {
        "node": ">=0.10"
      }
    },
    "node_modules/esrecurse": {
      "version": "4.3.0",
      "dev": true,
      "license": "BSD-2-Clause",
      "dependencies": {
        "estraverse": "^5.2.0"
      },
      "engines": {
        "node": ">=4.0"
      }
    },
    "node_modules/estraverse": {
      "version": "5.3.0",
      "dev": true,
      "license": "BSD-2-Clause",
      "engines": {
        "node": ">=4.0"
      }
    },
    "node_modules/esutils": {
      "version": "2.0.3",
      "dev": true,
      "license": "BSD-2-Clause",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/eventemitter3": {
      "version": "4.0.7",
      "license": "MIT"
    },
    "node_modules/fast-deep-equal": {
      "version": "3.1.3",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/fast-equals": {
      "version": "5.3.3",
      "license": "MIT",
      "engines": {
        "node": ">=6.0.0"
      }
    },
    "node_modules/fast-glob": {
      "version": "3.3.3",
      "license": "MIT",
      "dependencies": {
        "@nodelib/fs.stat": "^2.0.2",
        "@nodelib/fs.walk": "^1.2.3",
        "glob-parent": "^5.1.2",
        "merge2": "^1.3.0",
        "micromatch": "^4.0.8"
      },
      "engines": {
        "node": ">=8.6.0"
      }
    },
    "node_modules/fast-glob/node_modules/glob-parent": {
      "version": "5.1.2",
      "license": "ISC",
      "dependencies": {
        "is-glob": "^4.0.1"
      },
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/fast-json-stable-stringify": {
      "version": "2.1.0",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/fast-levenshtein": {
      "version": "2.0.6",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/fastq": {
      "version": "1.19.1",
      "license": "ISC",
      "dependencies": {
        "reusify": "^1.0.4"
      }
    },
    "node_modules/file-entry-cache": {
      "version": "6.0.1",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "flat-cache": "^3.0.4"
      },
      "engines": {
        "node": "^10.12.0 || >=12.0.0"
      }
    },
    "node_modules/fill-range": {
      "version": "7.1.1",
      "license": "MIT",
      "dependencies": {
        "to-regex-range": "^5.0.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/find-root": {
      "version": "1.1.0",
      "license": "MIT"
    },
    "node_modules/find-up": {
      "version": "5.0.0",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "locate-path": "^6.0.0",
        "path-exists": "^4.0.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/flat": {
      "version": "5.0.2",
      "license": "BSD-3-Clause",
      "bin": {
        "flat": "cli.js"
      }
    },
    "node_modules/flat-cache": {
      "version": "3.2.0",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "flatted": "^3.2.9",
        "keyv": "^4.5.3",
        "rimraf": "^3.0.2"
      },
      "engines": {
        "node": "^10.12.0 || >=12.0.0"
      }
    },
    "node_modules/flatted": {
      "version": "3.3.3",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/follow-redirects": {
      "version": "1.15.11",
      "funding": [
        {
          "type": "individual",
          "url": "https://github.com/sponsors/RubenVerborgh"
        }
      ],
      "license": "MIT",
      "engines": {
        "node": ">=4.0"
      },
      "peerDependenciesMeta": {
        "debug": {
          "optional": true
        }
      }
    },
    "node_modules/for-each": {
      "version": "0.3.5",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "is-callable": "^1.2.7"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/foreground-child": {
      "version": "3.3.1",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "cross-spawn": "^7.0.6",
        "signal-exit": "^4.0.1"
      },
      "engines": {
        "node": ">=14"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      }
    },
    "node_modules/form-data": {
      "version": "3.0.4",
      "license": "MIT",
      "dependencies": {
        "asynckit": "^0.4.0",
        "combined-stream": "^1.0.8",
        "es-set-tostringtag": "^2.1.0",
        "hasown": "^2.0.2",
        "mime-types": "^2.1.35"
      },
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/fraction.js": {
      "version": "5.3.4",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": "*"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/rawify"
      }
    },
    "node_modules/framer-motion": {
      "version": "11.18.2",
      "license": "MIT",
      "dependencies": {
        "motion-dom": "^11.18.1",
        "motion-utils": "^11.18.1",
        "tslib": "^2.4.0"
      },
      "peerDependencies": {
        "@emotion/is-prop-valid": "*",
        "react": "^18.0.0 || ^19.0.0",
        "react-dom": "^18.0.0 || ^19.0.0"
      },
      "peerDependenciesMeta": {
        "@emotion/is-prop-valid": {
          "optional": true
        },
        "react": {
          "optional": true
        },
        "react-dom": {
          "optional": true
        }
      }
    },
    "node_modules/fs.realpath": {
      "version": "1.0.0",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/fsevents": {
      "version": "2.3.3",
      "resolved": "https://registry.npmjs.org/fsevents/-/fsevents-2.3.3.tgz",
      "integrity": "sha512-5xoDfX+fL7faATnagmWPpbFtwh/R77WmMMqqHGS65C3vvB0YHrgF+B1YmZ3441tMj5n63k0212XNoJwzlhffQw==",
      "hasInstallScript": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": "^8.16.0 || ^10.6.0 || >=11.0.0"
      }
    },
    "node_modules/function-bind": {
      "version": "1.1.2",
      "license": "MIT",
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/function.prototype.name": {
      "version": "1.1.8",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.8",
        "call-bound": "^1.0.3",
        "define-properties": "^1.2.1",
        "functions-have-names": "^1.2.3",
        "hasown": "^2.0.2",
        "is-callable": "^1.2.7"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/functions-have-names": {
      "version": "1.2.3",
      "dev": true,
      "license": "MIT",
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/generator-function": {
      "version": "2.0.1",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/get-intrinsic": {
      "version": "1.3.0",
      "license": "MIT",
      "dependencies": {
        "call-bind-apply-helpers": "^1.0.2",
        "es-define-property": "^1.0.1",
        "es-errors": "^1.3.0",
        "es-object-atoms": "^1.1.1",
        "function-bind": "^1.1.2",
        "get-proto": "^1.0.1",
        "gopd": "^1.2.0",
        "has-symbols": "^1.1.0",
        "hasown": "^2.0.2",
        "math-intrinsics": "^1.1.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/get-proto": {
      "version": "1.0.1",
      "license": "MIT",
      "dependencies": {
        "dunder-proto": "^1.0.1",
        "es-object-atoms": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/get-symbol-description": {
      "version": "1.1.0",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.3",
        "es-errors": "^1.3.0",
        "get-intrinsic": "^1.2.6"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/get-tsconfig": {
      "version": "4.13.0",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "resolve-pkg-maps": "^1.0.0"
      },
      "funding": {
        "url": "https://github.com/privatenumber/get-tsconfig?sponsor=1"
      }
    },
    "node_modules/glob": {
      "version": "10.3.10",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "foreground-child": "^3.1.0",
        "jackspeak": "^2.3.5",
        "minimatch": "^9.0.1",
        "minipass": "^5.0.0 || ^6.0.2 || ^7.0.0",
        "path-scurry": "^1.10.1"
      },
      "bin": {
        "glob": "dist/esm/bin.mjs"
      },
      "engines": {
        "node": ">=16 || 14 >=14.17"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      }
    },
    "node_modules/glob-parent": {
      "version": "6.0.2",
      "license": "ISC",
      "dependencies": {
        "is-glob": "^4.0.3"
      },
      "engines": {
        "node": ">=10.13.0"
      }
    },
    "node_modules/glob-to-regexp": {
      "version": "0.4.1",
      "license": "BSD-2-Clause"
    },
    "node_modules/glob/node_modules/brace-expansion": {
      "version": "2.0.2",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "balanced-match": "^1.0.0"
      }
    },
    "node_modules/glob/node_modules/minimatch": {
      "version": "9.0.5",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "brace-expansion": "^2.0.1"
      },
      "engines": {
        "node": ">=16 || 14 >=14.17"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      }
    },
    "node_modules/globals": {
      "version": "13.24.0",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "type-fest": "^0.20.2"
      },
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/globalthis": {
      "version": "1.0.4",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "define-properties": "^1.2.1",
        "gopd": "^1.0.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/goober": {
      "version": "2.1.18",
      "license": "MIT",
      "peerDependencies": {
        "csstype": "^3.0.10"
      }
    },
    "node_modules/gopd": {
      "version": "1.2.0",
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/graceful-fs": {
      "version": "4.2.11",
      "license": "ISC"
    },
    "node_modules/graphemer": {
      "version": "1.4.0",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/has-bigints": {
      "version": "1.1.0",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/has-flag": {
      "version": "4.0.0",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/has-property-descriptors": {
      "version": "1.0.2",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "es-define-property": "^1.0.0"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/has-proto": {
      "version": "1.2.0",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "dunder-proto": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/has-symbols": {
      "version": "1.1.0",
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/has-tostringtag": {
      "version": "1.0.2",
      "license": "MIT",
      "dependencies": {
        "has-symbols": "^1.0.3"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/hasown": {
      "version": "2.0.2",
      "license": "MIT",
      "dependencies": {
        "function-bind": "^1.1.2"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/hoist-non-react-statics": {
      "version": "3.3.2",
      "license": "BSD-3-Clause",
      "dependencies": {
        "react-is": "^16.7.0"
      }
    },
    "node_modules/hoist-non-react-statics/node_modules/react-is": {
      "version": "16.13.1",
      "license": "MIT"
    },
    "node_modules/ignore": {
      "version": "5.3.2",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 4"
      }
    },
    "node_modules/import-fresh": {
      "version": "3.3.1",
      "license": "MIT",
      "dependencies": {
        "parent-module": "^1.0.0",
        "resolve-from": "^4.0.0"
      },
      "engines": {
        "node": ">=6"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/imurmurhash": {
      "version": "0.1.4",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.8.19"
      }
    },
    "node_modules/inflight": {
      "version": "1.0.6",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "once": "^1.3.0",
        "wrappy": "1"
      }
    },
    "node_modules/inherits": {
      "version": "2.0.4",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/input-otp": {
      "version": "1.4.1",
      "license": "MIT",
      "peerDependencies": {
        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0.0 || ^19.0.0-rc",
        "react-dom": "^16.8 || ^17.0 || ^18.0 || ^19.0.0 || ^19.0.0-rc"
      }
    },
    "node_modules/internal-slot": {
      "version": "1.1.0",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0",
        "hasown": "^2.0.2",
        "side-channel": "^1.1.0"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/internmap": {
      "version": "2.0.3",
      "license": "ISC",
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/intl-messageformat": {
      "version": "10.7.18",
      "license": "BSD-3-Clause",
      "dependencies": {
        "@formatjs/ecma402-abstract": "2.3.6",
        "@formatjs/fast-memoize": "2.2.7",
        "@formatjs/icu-messageformat-parser": "2.11.4",
        "tslib": "^2.8.0"
      }
    },
    "node_modules/intl-messageformat/node_modules/tslib": {
      "version": "2.8.1",
      "license": "0BSD"
    },
    "node_modules/is-array-buffer": {
      "version": "3.0.5",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.8",
        "call-bound": "^1.0.3",
        "get-intrinsic": "^1.2.6"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-arrayish": {
      "version": "0.2.1",
      "license": "MIT"
    },
    "node_modules/is-async-function": {
      "version": "2.1.1",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "async-function": "^1.0.0",
        "call-bound": "^1.0.3",
        "get-proto": "^1.0.1",
        "has-tostringtag": "^1.0.2",
        "safe-regex-test": "^1.1.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-bigint": {
      "version": "1.1.0",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "has-bigints": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-binary-path": {
      "version": "2.1.0",
      "license": "MIT",
      "dependencies": {
        "binary-extensions": "^2.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/is-boolean-object": {
      "version": "1.2.2",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.3",
        "has-tostringtag": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-bun-module": {
      "version": "2.0.0",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "semver": "^7.7.1"
      }
    },
    "node_modules/is-callable": {
      "version": "1.2.7",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-core-module": {
      "version": "2.16.1",
      "license": "MIT",
      "dependencies": {
        "hasown": "^2.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-data-view": {
      "version": "1.0.2",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.2",
        "get-intrinsic": "^1.2.6",
        "is-typed-array": "^1.1.13"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-date-object": {
      "version": "1.1.0",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.2",
        "has-tostringtag": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-extglob": {
      "version": "2.1.1",
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/is-finalizationregistry": {
      "version": "1.1.1",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.3"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-fullwidth-code-point": {
      "version": "3.0.0",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/is-generator-function": {
      "version": "1.1.2",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.4",
        "generator-function": "^2.0.0",
        "get-proto": "^1.0.1",
        "has-tostringtag": "^1.0.2",
        "safe-regex-test": "^1.1.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-glob": {
      "version": "4.0.3",
      "license": "MIT",
      "dependencies": {
        "is-extglob": "^2.1.1"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/is-map": {
      "version": "2.0.3",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-negative-zero": {
      "version": "2.0.3",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-number": {
      "version": "7.0.0",
      "license": "MIT",
      "engines": {
        "node": ">=0.12.0"
      }
    },
    "node_modules/is-number-object": {
      "version": "1.1.1",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.3",
        "has-tostringtag": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-path-inside": {
      "version": "3.0.3",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/is-regex": {
      "version": "1.2.1",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.2",
        "gopd": "^1.2.0",
        "has-tostringtag": "^1.0.2",
        "hasown": "^2.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-set": {
      "version": "2.0.3",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-shared-array-buffer": {
      "version": "1.0.4",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.3"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-string": {
      "version": "1.1.1",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.3",
        "has-tostringtag": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-symbol": {
      "version": "1.1.1",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.2",
        "has-symbols": "^1.1.0",
        "safe-regex-test": "^1.1.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-typed-array": {
      "version": "1.1.15",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "which-typed-array": "^1.1.16"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-weakmap": {
      "version": "2.0.2",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-weakref": {
      "version": "1.1.1",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.3"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-weakset": {
      "version": "2.0.4",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.3",
        "get-intrinsic": "^1.2.6"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/isarray": {
      "version": "2.0.5",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/isexe": {
      "version": "2.0.0",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/iterator.prototype": {
      "version": "1.1.5",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "define-data-property": "^1.1.4",
        "es-object-atoms": "^1.0.0",
        "get-intrinsic": "^1.2.6",
        "get-proto": "^1.0.0",
        "has-symbols": "^1.1.0",
        "set-function-name": "^2.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/jackspeak": {
      "version": "2.3.6",
      "dev": true,
      "license": "BlueOak-1.0.0",
      "dependencies": {
        "@isaacs/cliui": "^8.0.2"
      },
      "engines": {
        "node": ">=14"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      },
      "optionalDependencies": {
        "@pkgjs/parseargs": "^0.11.0"
      }
    },
    "node_modules/jiti": {
      "version": "1.21.7",
      "license": "MIT",
      "bin": {
        "jiti": "bin/jiti.js"
      }
    },
    "node_modules/js-cookie": {
      "version": "3.0.1",
      "license": "MIT",
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/js-tokens": {
      "version": "4.0.0",
      "license": "MIT"
    },
    "node_modules/js-yaml": {
      "version": "4.1.1",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "argparse": "^2.0.1"
      },
      "bin": {
        "js-yaml": "bin/js-yaml.js"
      }
    },
    "node_modules/jsesc": {
      "version": "3.1.0",
      "license": "MIT",
      "bin": {
        "jsesc": "bin/jsesc"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/json-buffer": {
      "version": "3.0.1",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/json-parse-even-better-errors": {
      "version": "2.3.1",
      "license": "MIT"
    },
    "node_modules/json-schema-traverse": {
      "version": "0.4.1",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/json-stable-stringify-without-jsonify": {
      "version": "1.0.1",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/json5": {
      "version": "1.0.2",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "minimist": "^1.2.0"
      },
      "bin": {
        "json5": "lib/cli.js"
      }
    },
    "node_modules/jsx-ast-utils": {
      "version": "3.3.5",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "array-includes": "^3.1.6",
        "array.prototype.flat": "^1.3.1",
        "object.assign": "^4.1.4",
        "object.values": "^1.1.6"
      },
      "engines": {
        "node": ">=4.0"
      }
    },
    "node_modules/keyv": {
      "version": "4.5.4",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "json-buffer": "3.0.1"
      }
    },
    "node_modules/language-subtag-registry": {
      "version": "0.3.23",
      "dev": true,
      "license": "CC0-1.0"
    },
    "node_modules/language-tags": {
      "version": "1.0.9",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "language-subtag-registry": "^0.3.20"
      },
      "engines": {
        "node": ">=0.10"
      }
    },
    "node_modules/levn": {
      "version": "0.4.1",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "prelude-ls": "^1.2.1",
        "type-check": "~0.4.0"
      },
      "engines": {
        "node": ">= 0.8.0"
      }
    },
    "node_modules/lilconfig": {
      "version": "3.1.3",
      "license": "MIT",
      "engines": {
        "node": ">=14"
      },
      "funding": {
        "url": "https://github.com/sponsors/antonk52"
      }
    },
    "node_modules/lines-and-columns": {
      "version": "1.2.4",
      "license": "MIT"
    },
    "node_modules/locate-path": {
      "version": "6.0.0",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "p-locate": "^5.0.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/lodash": {
      "version": "4.17.21",
      "license": "MIT"
    },
    "node_modules/lodash.merge": {
      "version": "4.6.2",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/loose-envify": {
      "version": "1.4.0",
      "license": "MIT",
      "dependencies": {
        "js-tokens": "^3.0.0 || ^4.0.0"
      },
      "bin": {
        "loose-envify": "cli.js"
      }
    },
    "node_modules/lower-case": {
      "version": "2.0.2",
      "license": "MIT",
      "dependencies": {
        "tslib": "^2.0.3"
      }
    },
    "node_modules/lru-cache": {
      "version": "10.4.3",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/map-obj": {
      "version": "4.3.0",
      "license": "MIT",
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/math-intrinsics": {
      "version": "1.1.0",
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/merge2": {
      "version": "1.4.1",
      "license": "MIT",
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/micromatch": {
      "version": "4.0.8",
      "license": "MIT",
      "dependencies": {
        "braces": "^3.0.3",
        "picomatch": "^2.3.1"
      },
      "engines": {
        "node": ">=8.6"
      }
    },
    "node_modules/mime-db": {
      "version": "1.52.0",
      "license": "MIT",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/mime-types": {
      "version": "2.1.35",
      "license": "MIT",
      "dependencies": {
        "mime-db": "1.52.0"
      },
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/minimatch": {
      "version": "3.1.2",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "brace-expansion": "^1.1.7"
      },
      "engines": {
        "node": "*"
      }
    },
    "node_modules/minimist": {
      "version": "1.2.8",
      "dev": true,
      "license": "MIT",
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/minipass": {
      "version": "7.1.2",
      "dev": true,
      "license": "ISC",
      "engines": {
        "node": ">=16 || 14 >=14.17"
      }
    },
    "node_modules/motion-dom": {
      "version": "11.18.1",
      "license": "MIT",
      "dependencies": {
        "motion-utils": "^11.18.1"
      }
    },
    "node_modules/motion-utils": {
      "version": "11.18.1",
      "license": "MIT"
    },
    "node_modules/ms": {
      "version": "2.1.3",
      "license": "MIT"
    },
    "node_modules/mz": {
      "version": "2.7.0",
      "license": "MIT",
      "dependencies": {
        "any-promise": "^1.0.0",
        "object-assign": "^4.0.1",
        "thenify-all": "^1.0.0"
      }
    },
    "node_modules/nanoid": {
      "version": "3.3.11",
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "bin": {
        "nanoid": "bin/nanoid.cjs"
      },
      "engines": {
        "node": "^10 || ^12 || ^13.7 || ^14 || >=15.0.1"
      }
    },
    "node_modules/napi-postinstall": {
      "version": "0.3.4",
      "dev": true,
      "license": "MIT",
      "bin": {
        "napi-postinstall": "lib/cli.js"
      },
      "engines": {
        "node": "^12.20.0 || ^14.18.0 || >=16.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/napi-postinstall"
      }
    },
    "node_modules/natural-compare": {
      "version": "1.4.0",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/next": {
      "version": "14.2.25",
      "license": "MIT",
      "dependencies": {
        "@next/env": "14.2.25",
        "@swc/helpers": "0.5.5",
        "busboy": "1.6.0",
        "caniuse-lite": "^1.0.30001579",
        "graceful-fs": "^4.2.11",
        "postcss": "8.4.31",
        "styled-jsx": "5.1.1"
      },
      "bin": {
        "next": "dist/bin/next"
      },
      "engines": {
        "node": ">=18.17.0"
      },
      "optionalDependencies": {
        "@next/swc-darwin-arm64": "14.2.25",
        "@next/swc-darwin-x64": "14.2.25",
        "@next/swc-linux-arm64-gnu": "14.2.25",
        "@next/swc-linux-arm64-musl": "14.2.25",
        "@next/swc-linux-x64-gnu": "14.2.25",
        "@next/swc-linux-x64-musl": "14.2.25",
        "@next/swc-win32-arm64-msvc": "14.2.25",
        "@next/swc-win32-ia32-msvc": "14.2.25",
        "@next/swc-win32-x64-msvc": "14.2.25"
      },
      "peerDependencies": {
        "@opentelemetry/api": "^1.1.0",
        "@playwright/test": "^1.41.2",
        "react": "^18.2.0",
        "react-dom": "^18.2.0",
        "sass": "^1.3.0"
      },
      "peerDependenciesMeta": {
        "@opentelemetry/api": {
          "optional": true
        },
        "@playwright/test": {
          "optional": true
        },
        "sass": {
          "optional": true
        }
      }
    },
    "node_modules/next-themes": {
      "version": "0.3.0",
      "license": "MIT",
      "peerDependencies": {
        "react": "^16.8 || ^17 || ^18",
        "react-dom": "^16.8 || ^17 || ^18"
      }
    },
    "node_modules/next/node_modules/@swc/helpers": {
      "version": "0.5.5",
      "license": "Apache-2.0",
      "dependencies": {
        "@swc/counter": "^0.1.3",
        "tslib": "^2.4.0"
      }
    },
    "node_modules/next/node_modules/postcss": {
      "version": "8.4.31",
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/postcss/"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/postcss"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "nanoid": "^3.3.6",
        "picocolors": "^1.0.0",
        "source-map-js": "^1.0.2"
      },
      "engines": {
        "node": "^10 || ^12 || >=14"
      }
    },
    "node_modules/no-case": {
      "version": "3.0.4",
      "license": "MIT",
      "dependencies": {
        "lower-case": "^2.0.2",
        "tslib": "^2.0.3"
      }
    },
    "node_modules/node-fetch-native": {
      "version": "1.0.1",
      "license": "MIT"
    },
    "node_modules/node-releases": {
      "version": "2.0.27",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/normalize-path": {
      "version": "3.0.0",
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/normalize-range": {
      "version": "0.1.2",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/object-assign": {
      "version": "4.1.1",
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/object-hash": {
      "version": "3.0.0",
      "license": "MIT",
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/object-inspect": {
      "version": "1.13.4",
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/object-keys": {
      "version": "1.1.1",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/object.assign": {
      "version": "4.1.7",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.8",
        "call-bound": "^1.0.3",
        "define-properties": "^1.2.1",
        "es-object-atoms": "^1.0.0",
        "has-symbols": "^1.1.0",
        "object-keys": "^1.1.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/object.entries": {
      "version": "1.1.9",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.8",
        "call-bound": "^1.0.4",
        "define-properties": "^1.2.1",
        "es-object-atoms": "^1.1.1"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/object.fromentries": {
      "version": "2.0.8",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.7",
        "define-properties": "^1.2.1",
        "es-abstract": "^1.23.2",
        "es-object-atoms": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/object.groupby": {
      "version": "1.0.3",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.7",
        "define-properties": "^1.2.1",
        "es-abstract": "^1.23.2"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/object.values": {
      "version": "1.2.1",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.8",
        "call-bound": "^1.0.3",
        "define-properties": "^1.2.1",
        "es-object-atoms": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/once": {
      "version": "1.4.0",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "wrappy": "1"
      }
    },
    "node_modules/optionator": {
      "version": "0.9.4",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "deep-is": "^0.1.3",
        "fast-levenshtein": "^2.0.6",
        "levn": "^0.4.1",
        "prelude-ls": "^1.2.1",
        "type-check": "^0.4.0",
        "word-wrap": "^1.2.5"
      },
      "engines": {
        "node": ">= 0.8.0"
      }
    },
    "node_modules/own-keys": {
      "version": "1.0.1",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "get-intrinsic": "^1.2.6",
        "object-keys": "^1.1.1",
        "safe-push-apply": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/p-limit": {
      "version": "3.1.0",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "yocto-queue": "^0.1.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/p-locate": {
      "version": "5.0.0",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "p-limit": "^3.0.2"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/parent-module": {
      "version": "1.0.1",
      "license": "MIT",
      "dependencies": {
        "callsites": "^3.0.0"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/parse-json": {
      "version": "5.2.0",
      "license": "MIT",
      "dependencies": {
        "@babel/code-frame": "^7.0.0",
        "error-ex": "^1.3.1",
        "json-parse-even-better-errors": "^2.3.0",
        "lines-and-columns": "^1.1.6"
      },
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/path-exists": {
      "version": "4.0.0",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/path-is-absolute": {
      "version": "1.0.1",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/path-key": {
      "version": "3.1.1",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/path-parse": {
      "version": "1.0.7",
      "license": "MIT"
    },
    "node_modules/path-scurry": {
      "version": "1.11.1",
      "dev": true,
      "license": "BlueOak-1.0.0",
      "dependencies": {
        "lru-cache": "^10.2.0",
        "minipass": "^5.0.0 || ^6.0.2 || ^7.0.0"
      },
      "engines": {
        "node": ">=16 || 14 >=14.18"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      }
    },
    "node_modules/path-type": {
      "version": "4.0.0",
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/picocolors": {
      "version": "1.1.1",
      "license": "ISC"
    },
    "node_modules/picomatch": {
      "version": "2.3.1",
      "license": "MIT",
      "engines": {
        "node": ">=8.6"
      },
      "funding": {
        "url": "https://github.com/sponsors/jonschlinkert"
      }
    },
    "node_modules/pify": {
      "version": "2.3.0",
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/pirates": {
      "version": "4.0.7",
      "license": "MIT",
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/possible-typed-array-names": {
      "version": "1.1.0",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/postcss": {
      "version": "8.5.6",
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/postcss/"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/postcss"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "nanoid": "^3.3.11",
        "picocolors": "^1.1.1",
        "source-map-js": "^1.2.1"
      },
      "engines": {
        "node": "^10 || ^12 || >=14"
      }
    },
    "node_modules/postcss-import": {
      "version": "15.1.0",
      "license": "MIT",
      "dependencies": {
        "postcss-value-parser": "^4.0.0",
        "read-cache": "^1.0.0",
        "resolve": "^1.1.7"
      },
      "engines": {
        "node": ">=14.0.0"
      },
      "peerDependencies": {
        "postcss": "^8.0.0"
      }
    },
    "node_modules/postcss-js": {
      "version": "4.1.0",
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/postcss/"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "camelcase-css": "^2.0.1"
      },
      "engines": {
        "node": "^12 || ^14 || >= 16"
      },
      "peerDependencies": {
        "postcss": "^8.4.21"
      }
    },
    "node_modules/postcss-nested": {
      "version": "6.2.0",
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/postcss/"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "postcss-selector-parser": "^6.1.1"
      },
      "engines": {
        "node": ">=12.0"
      },
      "peerDependencies": {
        "postcss": "^8.2.14"
      }
    },
    "node_modules/postcss-selector-parser": {
      "version": "6.1.2",
      "license": "MIT",
      "dependencies": {
        "cssesc": "^3.0.0",
        "util-deprecate": "^1.0.2"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/postcss-value-parser": {
      "version": "4.2.0",
      "license": "MIT"
    },
    "node_modules/prelude-ls": {
      "version": "1.2.1",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.8.0"
      }
    },
    "node_modules/prisma": {
      "version": "5.19.1",
      "resolved": "https://registry.npmjs.org/prisma/-/prisma-5.19.1.tgz",
      "integrity": "sha512-c5K9MiDaa+VAAyh1OiYk76PXOme9s3E992D7kvvIOhCrNsBQfy2mP2QAQtX0WNj140IgG++12kwZpYB9iIydNQ==",
      "devOptional": true,
      "hasInstallScript": true,
      "license": "Apache-2.0",
      "dependencies": {
        "@prisma/engines": "5.19.1"
      },
      "bin": {
        "prisma": "build/index.js"
      },
      "engines": {
        "node": ">=16.13"
      },
      "optionalDependencies": {
        "fsevents": "2.3.3"
      }
    },
    "node_modules/prop-types": {
      "version": "15.8.1",
      "license": "MIT",
      "dependencies": {
        "loose-envify": "^1.4.0",
        "object-assign": "^4.1.1",
        "react-is": "^16.13.1"
      }
    },
    "node_modules/prop-types/node_modules/react-is": {
      "version": "16.13.1",
      "license": "MIT"
    },
    "node_modules/proxy-from-env": {
      "version": "1.1.0",
      "license": "MIT"
    },
    "node_modules/punycode": {
      "version": "2.3.1",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/pvtsutils": {
      "version": "1.3.6",
      "license": "MIT",
      "dependencies": {
        "tslib": "^2.8.1"
      }
    },
    "node_modules/pvtsutils/node_modules/tslib": {
      "version": "2.8.1",
      "license": "0BSD"
    },
    "node_modules/pvutils": {
      "version": "1.1.5",
      "license": "MIT",
      "engines": {
        "node": ">=16.0.0"
      }
    },
    "node_modules/q": {
      "version": "1.5.1",
      "license": "MIT",
      "engines": {
        "node": ">=0.6.0",
        "teleport": ">=0.2.0"
      }
    },
    "node_modules/qs": {
      "version": "6.14.0",
      "license": "BSD-3-Clause",
      "dependencies": {
        "side-channel": "^1.1.0"
      },
      "engines": {
        "node": ">=0.6"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/queue-microtask": {
      "version": "1.2.3",
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/feross"
        },
        {
          "type": "patreon",
          "url": "https://www.patreon.com/feross"
        },
        {
          "type": "consulting",
          "url": "https://feross.org/support"
        }
      ],
      "license": "MIT"
    },
    "node_modules/quick-lru": {
      "version": "4.0.1",
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/react": {
      "version": "18.3.1",
      "license": "MIT",
      "dependencies": {
        "loose-envify": "^1.1.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/react-dom": {
      "version": "18.3.1",
      "license": "MIT",
      "dependencies": {
        "loose-envify": "^1.1.0",
        "scheduler": "^0.23.2"
      },
      "peerDependencies": {
        "react": "^18.3.1"
      }
    },
    "node_modules/react-fast-marquee": {
      "version": "1.6.5",
      "license": "MIT",
      "peerDependencies": {
        "react": ">= 16.8.0 || ^18.0.0",
        "react-dom": ">= 16.8.0 || ^18.0.0"
      }
    },
    "node_modules/react-hot-toast": {
      "version": "2.6.0",
      "license": "MIT",
      "dependencies": {
        "csstype": "^3.1.3",
        "goober": "^2.1.16"
      },
      "engines": {
        "node": ">=10"
      },
      "peerDependencies": {
        "react": ">=16",
        "react-dom": ">=16"
      }
    },
    "node_modules/react-hot-toast/node_modules/csstype": {
      "version": "3.2.3",
      "license": "MIT"
    },
    "node_modules/react-icons": {
      "version": "5.5.0",
      "license": "MIT",
      "peerDependencies": {
        "react": "*"
      }
    },
    "node_modules/react-is": {
      "version": "19.2.0",
      "license": "MIT"
    },
    "node_modules/react-smooth": {
      "version": "4.0.4",
      "license": "MIT",
      "dependencies": {
        "fast-equals": "^5.0.1",
        "prop-types": "^15.8.1",
        "react-transition-group": "^4.4.5"
      },
      "peerDependencies": {
        "react": "^16.8.0 || ^17.0.0 || ^18.0.0 || ^19.0.0",
        "react-dom": "^16.8.0 || ^17.0.0 || ^18.0.0 || ^19.0.0"
      }
    },
    "node_modules/react-textarea-autosize": {
      "version": "8.5.9",
      "license": "MIT",
      "dependencies": {
        "@babel/runtime": "^7.20.13",
        "use-composed-ref": "^1.3.0",
        "use-latest": "^1.2.1"
      },
      "engines": {
        "node": ">=10"
      },
      "peerDependencies": {
        "react": "^16.8.0 || ^17.0.0 || ^18.0.0 || ^19.0.0"
      }
    },
    "node_modules/react-transition-group": {
      "version": "4.4.5",
      "license": "BSD-3-Clause",
      "dependencies": {
        "@babel/runtime": "^7.5.5",
        "dom-helpers": "^5.0.1",
        "loose-envify": "^1.4.0",
        "prop-types": "^15.6.2"
      },
      "peerDependencies": {
        "react": ">=16.6.0",
        "react-dom": ">=16.6.0"
      }
    },
    "node_modules/read-cache": {
      "version": "1.0.0",
      "license": "MIT",
      "dependencies": {
        "pify": "^2.3.0"
      }
    },
    "node_modules/readdirp": {
      "version": "3.6.0",
      "license": "MIT",
      "dependencies": {
        "picomatch": "^2.2.1"
      },
      "engines": {
        "node": ">=8.10.0"
      }
    },
    "node_modules/recharts": {
      "version": "2.15.4",
      "license": "MIT",
      "dependencies": {
        "clsx": "^2.0.0",
        "eventemitter3": "^4.0.1",
        "lodash": "^4.17.21",
        "react-is": "^18.3.1",
        "react-smooth": "^4.0.4",
        "recharts-scale": "^0.4.4",
        "tiny-invariant": "^1.3.1",
        "victory-vendor": "^36.6.8"
      },
      "engines": {
        "node": ">=14"
      },
      "peerDependencies": {
        "react": "^16.0.0 || ^17.0.0 || ^18.0.0 || ^19.0.0",
        "react-dom": "^16.0.0 || ^17.0.0 || ^18.0.0 || ^19.0.0"
      }
    },
    "node_modules/recharts-scale": {
      "version": "0.4.5",
      "license": "MIT",
      "dependencies": {
        "decimal.js-light": "^2.4.1"
      }
    },
    "node_modules/recharts/node_modules/react-is": {
      "version": "18.3.1",
      "license": "MIT"
    },
    "node_modules/reflect.getprototypeof": {
      "version": "1.0.10",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.8",
        "define-properties": "^1.2.1",
        "es-abstract": "^1.23.9",
        "es-errors": "^1.3.0",
        "es-object-atoms": "^1.0.0",
        "get-intrinsic": "^1.2.7",
        "get-proto": "^1.0.1",
        "which-builtin-type": "^1.2.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/regexp.prototype.flags": {
      "version": "1.5.4",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.8",
        "define-properties": "^1.2.1",
        "es-errors": "^1.3.0",
        "get-proto": "^1.0.1",
        "gopd": "^1.2.0",
        "set-function-name": "^2.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/reselect": {
      "version": "4.1.8",
      "license": "MIT"
    },
    "node_modules/resolve": {
      "version": "1.22.11",
      "license": "MIT",
      "dependencies": {
        "is-core-module": "^2.16.1",
        "path-parse": "^1.0.7",
        "supports-preserve-symlinks-flag": "^1.0.0"
      },
      "bin": {
        "resolve": "bin/resolve"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/resolve-from": {
      "version": "4.0.0",
      "license": "MIT",
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/resolve-pkg-maps": {
      "version": "1.0.0",
      "dev": true,
      "license": "MIT",
      "funding": {
        "url": "https://github.com/privatenumber/resolve-pkg-maps?sponsor=1"
      }
    },
    "node_modules/reusify": {
      "version": "1.1.0",
      "license": "MIT",
      "engines": {
        "iojs": ">=1.0.0",
        "node": ">=0.10.0"
      }
    },
    "node_modules/rimraf": {
      "version": "3.0.2",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "glob": "^7.1.3"
      },
      "bin": {
        "rimraf": "bin.js"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      }
    },
    "node_modules/rimraf/node_modules/glob": {
      "version": "7.2.3",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "fs.realpath": "^1.0.0",
        "inflight": "^1.0.4",
        "inherits": "2",
        "minimatch": "^3.1.1",
        "once": "^1.3.0",
        "path-is-absolute": "^1.0.0"
      },
      "engines": {
        "node": "*"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      }
    },
    "node_modules/run-parallel": {
      "version": "1.2.0",
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/feross"
        },
        {
          "type": "patreon",
          "url": "https://www.patreon.com/feross"
        },
        {
          "type": "consulting",
          "url": "https://feross.org/support"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "queue-microtask": "^1.2.2"
      }
    },
    "node_modules/safe-array-concat": {
      "version": "1.1.3",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.8",
        "call-bound": "^1.0.2",
        "get-intrinsic": "^1.2.6",
        "has-symbols": "^1.1.0",
        "isarray": "^2.0.5"
      },
      "engines": {
        "node": ">=0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/safe-push-apply": {
      "version": "1.0.0",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0",
        "isarray": "^2.0.5"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/safe-regex-test": {
      "version": "1.1.0",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.2",
        "es-errors": "^1.3.0",
        "is-regex": "^1.2.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/scheduler": {
      "version": "0.23.2",
      "license": "MIT",
      "dependencies": {
        "loose-envify": "^1.1.0"
      }
    },
    "node_modules/scroll-into-view-if-needed": {
      "version": "3.0.10",
      "license": "MIT",
      "dependencies": {
        "compute-scroll-into-view": "^3.0.2"
      }
    },
    "node_modules/semver": {
      "version": "7.7.3",
      "dev": true,
      "license": "ISC",
      "bin": {
        "semver": "bin/semver.js"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/set-function-length": {
      "version": "1.2.2",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "define-data-property": "^1.1.4",
        "es-errors": "^1.3.0",
        "function-bind": "^1.1.2",
        "get-intrinsic": "^1.2.4",
        "gopd": "^1.0.1",
        "has-property-descriptors": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/set-function-name": {
      "version": "2.0.2",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "define-data-property": "^1.1.4",
        "es-errors": "^1.3.0",
        "functions-have-names": "^1.2.3",
        "has-property-descriptors": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/set-proto": {
      "version": "1.0.0",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "dunder-proto": "^1.0.1",
        "es-errors": "^1.3.0",
        "es-object-atoms": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/shebang-command": {
      "version": "2.0.0",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "shebang-regex": "^3.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/shebang-regex": {
      "version": "3.0.0",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/side-channel": {
      "version": "1.1.0",
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0",
        "object-inspect": "^1.13.3",
        "side-channel-list": "^1.0.0",
        "side-channel-map": "^1.0.1",
        "side-channel-weakmap": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/side-channel-list": {
      "version": "1.0.0",
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0",
        "object-inspect": "^1.13.3"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/side-channel-map": {
      "version": "1.0.1",
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.2",
        "es-errors": "^1.3.0",
        "get-intrinsic": "^1.2.5",
        "object-inspect": "^1.13.3"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/side-channel-weakmap": {
      "version": "1.0.2",
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.2",
        "es-errors": "^1.3.0",
        "get-intrinsic": "^1.2.5",
        "object-inspect": "^1.13.3",
        "side-channel-map": "^1.0.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/signal-exit": {
      "version": "4.1.0",
      "dev": true,
      "license": "ISC",
      "engines": {
        "node": ">=14"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      }
    },
    "node_modules/simple-swizzle": {
      "version": "0.2.4",
      "license": "MIT",
      "dependencies": {
        "is-arrayish": "^0.3.1"
      }
    },
    "node_modules/simple-swizzle/node_modules/is-arrayish": {
      "version": "0.3.4",
      "license": "MIT"
    },
    "node_modules/snake-case": {
      "version": "3.0.4",
      "license": "MIT",
      "dependencies": {
        "dot-case": "^3.0.4",
        "tslib": "^2.0.3"
      }
    },
    "node_modules/snakecase-keys": {
      "version": "5.4.4",
      "license": "MIT",
      "dependencies": {
        "map-obj": "^4.1.0",
        "snake-case": "^3.0.4",
        "type-fest": "^2.5.2"
      },
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/snakecase-keys/node_modules/type-fest": {
      "version": "2.19.0",
      "license": "(MIT OR CC0-1.0)",
      "engines": {
        "node": ">=12.20"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/source-map": {
      "version": "0.5.7",
      "license": "BSD-3-Clause",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/source-map-js": {
      "version": "1.2.1",
      "license": "BSD-3-Clause",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/stable-hash": {
      "version": "0.0.5",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/stop-iteration-iterator": {
      "version": "1.1.0",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0",
        "internal-slot": "^1.1.0"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/streamsearch": {
      "version": "1.1.0",
      "engines": {
        "node": ">=10.0.0"
      }
    },
    "node_modules/string-width": {
      "version": "5.1.2",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "eastasianwidth": "^0.2.0",
        "emoji-regex": "^9.2.2",
        "strip-ansi": "^7.0.1"
      },
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/string-width-cjs": {
      "name": "string-width",
      "version": "4.2.3",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "emoji-regex": "^8.0.0",
        "is-fullwidth-code-point": "^3.0.0",
        "strip-ansi": "^6.0.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/string-width-cjs/node_modules/emoji-regex": {
      "version": "8.0.0",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/string-width/node_modules/ansi-regex": {
      "version": "6.2.2",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/chalk/ansi-regex?sponsor=1"
      }
    },
    "node_modules/string-width/node_modules/strip-ansi": {
      "version": "7.1.2",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ansi-regex": "^6.0.1"
      },
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/chalk/strip-ansi?sponsor=1"
      }
    },
    "node_modules/string.prototype.includes": {
      "version": "2.0.1",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.7",
        "define-properties": "^1.2.1",
        "es-abstract": "^1.23.3"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/string.prototype.matchall": {
      "version": "4.0.12",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.8",
        "call-bound": "^1.0.3",
        "define-properties": "^1.2.1",
        "es-abstract": "^1.23.6",
        "es-errors": "^1.3.0",
        "es-object-atoms": "^1.0.0",
        "get-intrinsic": "^1.2.6",
        "gopd": "^1.2.0",
        "has-symbols": "^1.1.0",
        "internal-slot": "^1.1.0",
        "regexp.prototype.flags": "^1.5.3",
        "set-function-name": "^2.0.2",
        "side-channel": "^1.1.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/string.prototype.repeat": {
      "version": "1.0.0",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "define-properties": "^1.1.3",
        "es-abstract": "^1.17.5"
      }
    },
    "node_modules/string.prototype.trim": {
      "version": "1.2.10",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.8",
        "call-bound": "^1.0.2",
        "define-data-property": "^1.1.4",
        "define-properties": "^1.2.1",
        "es-abstract": "^1.23.5",
        "es-object-atoms": "^1.0.0",
        "has-property-descriptors": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/string.prototype.trimend": {
      "version": "1.0.9",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.8",
        "call-bound": "^1.0.2",
        "define-properties": "^1.2.1",
        "es-object-atoms": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/string.prototype.trimstart": {
      "version": "1.0.8",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.7",
        "define-properties": "^1.2.1",
        "es-object-atoms": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/strip-ansi": {
      "version": "6.0.1",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ansi-regex": "^5.0.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/strip-ansi-cjs": {
      "name": "strip-ansi",
      "version": "6.0.1",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ansi-regex": "^5.0.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/strip-bom": {
      "version": "3.0.0",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/strip-json-comments": {
      "version": "3.1.1",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/stripe": {
      "version": "16.12.0",
      "license": "MIT",
      "dependencies": {
        "@types/node": ">=8.1.0",
        "qs": "^6.11.0"
      },
      "engines": {
        "node": ">=12.*"
      }
    },
    "node_modules/styled-jsx": {
      "version": "5.1.1",
      "license": "MIT",
      "dependencies": {
        "client-only": "0.0.1"
      },
      "engines": {
        "node": ">= 12.0.0"
      },
      "peerDependencies": {
        "react": ">= 16.8.0 || 17.x.x || ^18.0.0-0"
      },
      "peerDependenciesMeta": {
        "@babel/core": {
          "optional": true
        },
        "babel-plugin-macros": {
          "optional": true
        }
      }
    },
    "node_modules/stylis": {
      "version": "4.2.0",
      "license": "MIT"
    },
    "node_modules/sucrase": {
      "version": "3.35.1",
      "license": "MIT",
      "dependencies": {
        "@jridgewell/gen-mapping": "^0.3.2",
        "commander": "^4.0.0",
        "lines-and-columns": "^1.1.6",
        "mz": "^2.7.0",
        "pirates": "^4.0.1",
        "tinyglobby": "^0.2.11",
        "ts-interface-checker": "^0.1.9"
      },
      "bin": {
        "sucrase": "bin/sucrase",
        "sucrase-node": "bin/sucrase-node"
      },
      "engines": {
        "node": ">=16 || 14 >=14.17"
      }
    },
    "node_modules/supports-color": {
      "version": "7.2.0",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "has-flag": "^4.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/supports-preserve-symlinks-flag": {
      "version": "1.0.0",
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/swr": {
      "version": "2.2.0",
      "license": "MIT",
      "dependencies": {
        "use-sync-external-store": "^1.2.0"
      },
      "peerDependencies": {
        "react": "^16.11.0 || ^17.0.0 || ^18.0.0"
      }
    },
    "node_modules/tailwind-merge": {
      "version": "2.6.0",
      "license": "MIT",
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/dcastil"
      }
    },
    "node_modules/tailwind-variants": {
      "version": "0.1.20",
      "license": "MIT",
      "dependencies": {
        "tailwind-merge": "^1.14.0"
      },
      "engines": {
        "node": ">=16.x",
        "pnpm": ">=7.x"
      },
      "peerDependencies": {
        "tailwindcss": "*"
      }
    },
    "node_modules/tailwind-variants/node_modules/tailwind-merge": {
      "version": "1.14.0",
      "license": "MIT",
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/dcastil"
      }
    },
    "node_modules/tailwindcss": {
      "version": "3.4.18",
      "license": "MIT",
      "dependencies": {
        "@alloc/quick-lru": "^5.2.0",
        "arg": "^5.0.2",
        "chokidar": "^3.6.0",
        "didyoumean": "^1.2.2",
        "dlv": "^1.1.3",
        "fast-glob": "^3.3.2",
        "glob-parent": "^6.0.2",
        "is-glob": "^4.0.3",
        "jiti": "^1.21.7",
        "lilconfig": "^3.1.3",
        "micromatch": "^4.0.8",
        "normalize-path": "^3.0.0",
        "object-hash": "^3.0.0",
        "picocolors": "^1.1.1",
        "postcss": "^8.4.47",
        "postcss-import": "^15.1.0",
        "postcss-js": "^4.0.1",
        "postcss-load-config": "^4.0.2 || ^5.0 || ^6.0",
        "postcss-nested": "^6.2.0",
        "postcss-selector-parser": "^6.1.2",
        "resolve": "^1.22.8",
        "sucrase": "^3.35.0"
      },
      "bin": {
        "tailwind": "lib/cli.js",
        "tailwindcss": "lib/cli.js"
      },
      "engines": {
        "node": ">=14.0.0"
      }
    },
    "node_modules/tailwindcss/node_modules/postcss-load-config": {
      "version": "6.0.1",
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/postcss/"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "lilconfig": "^3.1.1"
      },
      "engines": {
        "node": ">= 18"
      },
      "peerDependencies": {
        "jiti": ">=1.21.0",
        "postcss": ">=8.0.9",
        "tsx": "^4.8.1",
        "yaml": "^2.4.2"
      },
      "peerDependenciesMeta": {
        "jiti": {
          "optional": true
        },
        "postcss": {
          "optional": true
        },
        "tsx": {
          "optional": true
        },
        "yaml": {
          "optional": true
        }
      }
    },
    "node_modules/text-table": {
      "version": "0.2.0",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/thenify": {
      "version": "3.3.1",
      "license": "MIT",
      "dependencies": {
        "any-promise": "^1.0.0"
      }
    },
    "node_modules/thenify-all": {
      "version": "1.6.0",
      "license": "MIT",
      "dependencies": {
        "thenify": ">= 3.1.0 < 4"
      },
      "engines": {
        "node": ">=0.8"
      }
    },
    "node_modules/timeago.js": {
      "version": "4.0.2",
      "license": "MIT"
    },
    "node_modules/tiny-invariant": {
      "version": "1.3.3",
      "license": "MIT"
    },
    "node_modules/tinyglobby": {
      "version": "0.2.15",
      "license": "MIT",
      "dependencies": {
        "fdir": "^6.5.0",
        "picomatch": "^4.0.3"
      },
      "engines": {
        "node": ">=12.0.0"
      },
      "funding": {
        "url": "https://github.com/sponsors/SuperchupuDev"
      }
    },
    "node_modules/tinyglobby/node_modules/fdir": {
      "version": "6.5.0",
      "license": "MIT",
      "engines": {
        "node": ">=12.0.0"
      },
      "peerDependencies": {
        "picomatch": "^3 || ^4"
      },
      "peerDependenciesMeta": {
        "picomatch": {
          "optional": true
        }
      }
    },
    "node_modules/tinyglobby/node_modules/picomatch": {
      "version": "4.0.3",
      "license": "MIT",
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/sponsors/jonschlinkert"
      }
    },
    "node_modules/to-no-case": {
      "version": "1.0.2",
      "license": "MIT"
    },
    "node_modules/to-regex-range": {
      "version": "5.0.1",
      "license": "MIT",
      "dependencies": {
        "is-number": "^7.0.0"
      },
      "engines": {
        "node": ">=8.0"
      }
    },
    "node_modules/to-snake-case": {
      "version": "1.0.0",
      "license": "MIT",
      "dependencies": {
        "to-space-case": "^1.0.0"
      }
    },
    "node_modules/to-space-case": {
      "version": "1.0.0",
      "license": "MIT",
      "dependencies": {
        "to-no-case": "^1.0.0"
      }
    },
    "node_modules/ts-api-utils": {
      "version": "2.1.0",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=18.12"
      },
      "peerDependencies": {
        "typescript": ">=4.8.4"
      }
    },
    "node_modules/ts-interface-checker": {
      "version": "0.1.13",
      "license": "Apache-2.0"
    },
    "node_modules/tsconfig-paths": {
      "version": "3.15.0",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@types/json5": "^0.0.29",
        "json5": "^1.0.2",
        "minimist": "^1.2.6",
        "strip-bom": "^3.0.0"
      }
    },
    "node_modules/tslib": {
      "version": "2.4.1",
      "license": "0BSD"
    },
    "node_modules/type-check": {
      "version": "0.4.0",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "prelude-ls": "^1.2.1"
      },
      "engines": {
        "node": ">= 0.8.0"
      }
    },
    "node_modules/type-fest": {
      "version": "0.20.2",
      "dev": true,
      "license": "(MIT OR CC0-1.0)",
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/typed-array-buffer": {
      "version": "1.0.3",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.3",
        "es-errors": "^1.3.0",
        "is-typed-array": "^1.1.14"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/typed-array-byte-length": {
      "version": "1.0.3",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.8",
        "for-each": "^0.3.3",
        "gopd": "^1.2.0",
        "has-proto": "^1.2.0",
        "is-typed-array": "^1.1.14"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/typed-array-byte-offset": {
      "version": "1.0.4",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "available-typed-arrays": "^1.0.7",
        "call-bind": "^1.0.8",
        "for-each": "^0.3.3",
        "gopd": "^1.2.0",
        "has-proto": "^1.2.0",
        "is-typed-array": "^1.1.15",
        "reflect.getprototypeof": "^1.0.9"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/typed-array-length": {
      "version": "1.0.7",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.7",
        "for-each": "^0.3.3",
        "gopd": "^1.0.1",
        "is-typed-array": "^1.1.13",
        "possible-typed-array-names": "^1.0.0",
        "reflect.getprototypeof": "^1.0.6"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/typescript": {
      "version": "5.9.3",
      "dev": true,
      "license": "Apache-2.0",
      "bin": {
        "tsc": "bin/tsc",
        "tsserver": "bin/tsserver"
      },
      "engines": {
        "node": ">=14.17"
      }
    },
    "node_modules/unbox-primitive": {
      "version": "1.1.0",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.3",
        "has-bigints": "^1.0.2",
        "has-symbols": "^1.1.0",
        "which-boxed-primitive": "^1.1.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/undici-types": {
      "version": "6.21.0",
      "license": "MIT"
    },
    "node_modules/unrs-resolver": {
      "version": "1.11.1",
      "dev": true,
      "hasInstallScript": true,
      "license": "MIT",
      "dependencies": {
        "napi-postinstall": "^0.3.0"
      },
      "funding": {
        "url": "https://opencollective.com/unrs-resolver"
      },
      "optionalDependencies": {
        "@unrs/resolver-binding-android-arm-eabi": "1.11.1",
        "@unrs/resolver-binding-android-arm64": "1.11.1",
        "@unrs/resolver-binding-darwin-arm64": "1.11.1",
        "@unrs/resolver-binding-darwin-x64": "1.11.1",
        "@unrs/resolver-binding-freebsd-x64": "1.11.1",
        "@unrs/resolver-binding-linux-arm-gnueabihf": "1.11.1",
        "@unrs/resolver-binding-linux-arm-musleabihf": "1.11.1",
        "@unrs/resolver-binding-linux-arm64-gnu": "1.11.1",
        "@unrs/resolver-binding-linux-arm64-musl": "1.11.1",
        "@unrs/resolver-binding-linux-ppc64-gnu": "1.11.1",
        "@unrs/resolver-binding-linux-riscv64-gnu": "1.11.1",
        "@unrs/resolver-binding-linux-riscv64-musl": "1.11.1",
        "@unrs/resolver-binding-linux-s390x-gnu": "1.11.1",
        "@unrs/resolver-binding-linux-x64-gnu": "1.11.1",
        "@unrs/resolver-binding-linux-x64-musl": "1.11.1",
        "@unrs/resolver-binding-wasm32-wasi": "1.11.1",
        "@unrs/resolver-binding-win32-arm64-msvc": "1.11.1",
        "@unrs/resolver-binding-win32-ia32-msvc": "1.11.1",
        "@unrs/resolver-binding-win32-x64-msvc": "1.11.1"
      }
    },
    "node_modules/update-browserslist-db": {
      "version": "1.1.4",
      "dev": true,
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/browserslist"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/browserslist"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "escalade": "^3.2.0",
        "picocolors": "^1.1.1"
      },
      "bin": {
        "update-browserslist-db": "cli.js"
      },
      "peerDependencies": {
        "browserslist": ">= 4.21.0"
      }
    },
    "node_modules/uri-js": {
      "version": "4.4.1",
      "dev": true,
      "license": "BSD-2-Clause",
      "dependencies": {
        "punycode": "^2.1.0"
      }
    },
    "node_modules/use-composed-ref": {
      "version": "1.4.0",
      "license": "MIT",
      "peerDependencies": {
        "react": "^16.8.0 || ^17.0.0 || ^18.0.0 || ^19.0.0"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        }
      }
    },
    "node_modules/use-isomorphic-layout-effect": {
      "version": "1.2.1",
      "license": "MIT",
      "peerDependencies": {
        "react": "^16.8.0 || ^17.0.0 || ^18.0.0 || ^19.0.0"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        }
      }
    },
    "node_modules/use-latest": {
      "version": "1.3.0",
      "license": "MIT",
      "dependencies": {
        "use-isomorphic-layout-effect": "^1.1.1"
      },
      "peerDependencies": {
        "react": "^16.8.0 || ^17.0.0 || ^18.0.0 || ^19.0.0"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        }
      }
    },
    "node_modules/use-sync-external-store": {
      "version": "1.6.0",
      "license": "MIT",
      "peerDependencies": {
        "react": "^16.8.0 || ^17.0.0 || ^18.0.0 || ^19.0.0"
      }
    },
    "node_modules/util-deprecate": {
      "version": "1.0.2",
      "license": "MIT"
    },
    "node_modules/victory-vendor": {
      "version": "36.9.2",
      "license": "MIT AND ISC",
      "dependencies": {
        "@types/d3-array": "^3.0.3",
        "@types/d3-ease": "^3.0.0",
        "@types/d3-interpolate": "^3.0.1",
        "@types/d3-scale": "^4.0.2",
        "@types/d3-shape": "^3.1.0",
        "@types/d3-time": "^3.0.0",
        "@types/d3-timer": "^3.0.0",
        "d3-array": "^3.1.6",
        "d3-ease": "^3.0.1",
        "d3-interpolate": "^3.0.1",
        "d3-scale": "^4.0.2",
        "d3-shape": "^3.1.0",
        "d3-time": "^3.0.0",
        "d3-timer": "^3.0.1"
      }
    },
    "node_modules/webcrypto-core": {
      "version": "1.8.1",
      "license": "MIT",
      "dependencies": {
        "@peculiar/asn1-schema": "^2.3.13",
        "@peculiar/json-schema": "^1.1.12",
        "asn1js": "^3.0.5",
        "pvtsutils": "^1.3.5",
        "tslib": "^2.7.0"
      }
    },
    "node_modules/webcrypto-core/node_modules/tslib": {
      "version": "2.8.1",
      "license": "0BSD"
    },
    "node_modules/which": {
      "version": "2.0.2",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "isexe": "^2.0.0"
      },
      "bin": {
        "node-which": "bin/node-which"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/which-boxed-primitive": {
      "version": "1.1.1",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "is-bigint": "^1.1.0",
        "is-boolean-object": "^1.2.1",
        "is-number-object": "^1.1.1",
        "is-string": "^1.1.1",
        "is-symbol": "^1.1.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/which-builtin-type": {
      "version": "1.2.1",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.2",
        "function.prototype.name": "^1.1.6",
        "has-tostringtag": "^1.0.2",
        "is-async-function": "^2.0.0",
        "is-date-object": "^1.1.0",
        "is-finalizationregistry": "^1.1.0",
        "is-generator-function": "^1.0.10",
        "is-regex": "^1.2.1",
        "is-weakref": "^1.0.2",
        "isarray": "^2.0.5",
        "which-boxed-primitive": "^1.1.0",
        "which-collection": "^1.0.2",
        "which-typed-array": "^1.1.16"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/which-collection": {
      "version": "1.0.2",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "is-map": "^2.0.3",
        "is-set": "^2.0.3",
        "is-weakmap": "^2.0.2",
        "is-weakset": "^2.0.3"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/which-typed-array": {
      "version": "1.1.19",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "available-typed-arrays": "^1.0.7",
        "call-bind": "^1.0.8",
        "call-bound": "^1.0.4",
        "for-each": "^0.3.5",
        "get-proto": "^1.0.1",
        "gopd": "^1.2.0",
        "has-tostringtag": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/word-wrap": {
      "version": "1.2.5",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/wrap-ansi": {
      "version": "8.1.0",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ansi-styles": "^6.1.0",
        "string-width": "^5.0.1",
        "strip-ansi": "^7.0.1"
      },
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/chalk/wrap-ansi?sponsor=1"
      }
    },
    "node_modules/wrap-ansi-cjs": {
      "name": "wrap-ansi",
      "version": "7.0.0",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ansi-styles": "^4.0.0",
        "string-width": "^4.1.0",
        "strip-ansi": "^6.0.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/chalk/wrap-ansi?sponsor=1"
      }
    },
    "node_modules/wrap-ansi-cjs/node_modules/emoji-regex": {
      "version": "8.0.0",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/wrap-ansi-cjs/node_modules/string-width": {
      "version": "4.2.3",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "emoji-regex": "^8.0.0",
        "is-fullwidth-code-point": "^3.0.0",
        "strip-ansi": "^6.0.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/wrap-ansi/node_modules/ansi-regex": {
      "version": "6.2.2",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/chalk/ansi-regex?sponsor=1"
      }
    },
    "node_modules/wrap-ansi/node_modules/ansi-styles": {
      "version": "6.2.3",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/chalk/ansi-styles?sponsor=1"
      }
    },
    "node_modules/wrap-ansi/node_modules/strip-ansi": {
      "version": "7.1.2",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ansi-regex": "^6.0.1"
      },
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/chalk/strip-ansi?sponsor=1"
      }
    },
    "node_modules/wrappy": {
      "version": "1.0.2",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/yaml": {
      "version": "1.10.2",
      "license": "ISC",
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/yocto-queue": {
      "version": "0.1.0",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    }
  }
}

```

---

### <a id="📄-package-json"></a>📄 `package.json`

**File Info:**
- **Size**: 1.28 KB
- **Extension**: `.json`
- **Language**: `json`
- **Location**: `package.json`
- **Relative Path**: `root`
- **Created**: 2025-11-12 05:58:33 (Asia/Katmandu / GMT+06:45)
- **Modified**: 2025-11-28 20:49:32 (Asia/Katmandu / GMT+06:45)
- **MD5**: `68e96db8800b88f61a9069e6b9517ed4`
- **SHA256**: `82c57b4e4a1a422a95d998c6034e79e7de2025cc353aef8d4a5466911b739144`
- **Encoding**: ASCII

**File code content:**

```json
{
  "name": "prompt-marketplace",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "postinstall": "prisma generate"
  },
  "dependencies": {
    "@clerk/nextjs": "^4.31.8",
    "@emotion/react": "^11.11.4",
    "@emotion/styled": "^11.11.5",
    "@mui/material": "^5.15.20",
    "@mui/x-data-grid": "^6.19.5",
    "@nextui-org/react": "^2.6.11",
    "@prisma/client": "^5.19.1",
    "@stripe/react-stripe-js": "^2.5.1",
    "@stripe/stripe-js": "^2.3.0",
    "axios": "^1.7.7",
    "cloudinary": "^1.41.2",
    "framer-motion": "^11.5.6",
    "next": "14.2.25",
    "next-themes": "^0.3.0",
    "react": "18.3.1",
    "react-dom": "18.3.1",
    "react-fast-marquee": "^1.6.1",
    "react-hot-toast": "^2.4.1",
    "react-icons": "^5.2.1",
    "recharts": "^2.12.7",
    "stripe": "^16.5.0",
    "timeago.js": "^4.0.2"
  },
  "devDependencies": {
    "@types/node": "^20.14.12",
    "@types/react": "^18.3.10",
    "@types/react-dom": "^18.3.5",
    "autoprefixer": "^10.4.20",
    "eslint": "^8.57.0",
    "eslint-config-next": "14.2.25",
    "postcss": "^8.4.41",
    "prisma": "^5.19.1",
    "tailwindcss": "^3.4.14",
    "typescript": "^5.6.3"
  },
  "engines": {
    "node": ">=18.17.0"
  }
}

```

---

### <a id="📄-postcss-config-js"></a>📄 `postcss.config.js`

**File Info:**
- **Size**: 82 B
- **Extension**: `.js`
- **Language**: `javascript`
- **Location**: `postcss.config.js`
- **Relative Path**: `root`
- **Created**: 2025-11-12 05:58:33 (Asia/Katmandu / GMT+06:45)
- **Modified**: 2024-01-24 15:41:52 (Asia/Katmandu / GMT+06:45)
- **MD5**: `854b38759e7a8b4b82306ae2d9a3a833`
- **SHA256**: `251ecddd4672c9cf467547e3dc535de00ad2129df26e7e7ae728fa4e5ac45fc5`
- **Encoding**: ASCII

**File code content:**

```javascript
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}

```

---

### <a id="📄-readme-md"></a>📄 `README.md`

**File Info:**
- **Size**: 1.94 KB
- **Extension**: `.md`
- **Language**: `text`
- **Location**: `README.md`
- **Relative Path**: `root`
- **Created**: 2025-11-12 05:58:32 (Asia/Katmandu / GMT+06:45)
- **Modified**: 2024-01-24 15:41:52 (Asia/Katmandu / GMT+06:45)
- **MD5**: `0302242a1ed980935ed0b0f168ce238c`
- **SHA256**: `52cc990ffa35382ea023470525654447da6944b9cd9b1a32095186f74ef6ae34`
- **Encoding**: UTF-8

**File code content:**

````markdown
## 📋 Tutorial

This GitHub repository hosts the code associated with a comprehensive tutorial featured on our YouTube channel, <a href="https://www.youtube.com/@BecodemyOfficial" target="_blank"><b>Becodemy</b></a>. 

For those who find visual learning more effective, this serves as an ideal reference. Follow our tutorial to acquire a step-by-step understanding of constructing projects like these in a beginner-friendly approach!
<a href="https://www.youtube.com/watch?v=mzbOqy5DWzE&t=216s" target="_blank">Link</a>

## 🤖 Introduction

Welcome to our AI Prompt Selling Marketplace, a cutting-edge project. Dive into the trendiest topic on the internet – Artificial Intelligence – as we guide you through building your own AI Prompt Selling Marketplace.

What makes this project even more exciting? It's fully completed and ready for deployment, allowing you to kickstart your AI startup effortlessly. Explore the added convenience of a separate Admin Dashboard, empowering you to take control of the main website seamlessly. Get ready to embark on your AI journey with this comprehensive and innovative project.

## ⚙️ Tech Stack

- Next.js
- NextUI
- TailwindCSS
- Clerk
- Prisma
- TypeScript


## 🤸 Getting Started

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

~~~~bash
git clone https://github.com/shahriarsajeeb/AI-Prompt-Selling-MarketPlace.git
~~~~

**Installation**

Install the project dependencies using npm:

~~~~bash
npm install
~~~~

**Running the Project**

~~~~bash
npm run dev
~~~~

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.

## 🚨 Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

````

---

### <a id="📄-tailwind-config-ts"></a>📄 `tailwind.config.ts`

**File Info:**
- **Size**: 780 B
- **Extension**: `.ts`
- **Language**: `typescript`
- **Location**: `tailwind.config.ts`
- **Relative Path**: `root`
- **Created**: 2025-11-12 05:58:33 (Asia/Katmandu / GMT+06:45)
- **Modified**: 2024-01-24 15:41:52 (Asia/Katmandu / GMT+06:45)
- **MD5**: `d94252ab3fb497e6015ed4fb21c46ec5`
- **SHA256**: `e5a00e550038797350e6403540f11a77734a313d05504b58049a340d17e4e067`
- **Encoding**: ASCII

**File code content:**

```typescript
import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./utils/styles.ts",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
         Inter:["var(--font-inter)"],
         Monserrat: ["var(--font-montserrat)"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [nextui({
    theme: {}
  })],
};
export default config;


```

---

### <a id="📄-tsconfig-json"></a>📄 `tsconfig.json`

**File Info:**
- **Size**: 595 B
- **Extension**: `.json`
- **Language**: `json`
- **Location**: `tsconfig.json`
- **Relative Path**: `root`
- **Created**: 2025-11-12 05:58:33 (Asia/Katmandu / GMT+06:45)
- **Modified**: 2024-01-24 15:41:52 (Asia/Katmandu / GMT+06:45)
- **MD5**: `130469b4894d9a3d8783798ab6587893`
- **SHA256**: `6db99fb5bc552c04488c0bffbe2bba67dd7c75cf244f42e758e3e4a45a8b7d00`
- **Encoding**: ASCII

**File code content:**

```json
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}

```

---

## 🚫 Binary/Excluded Files

The following files were not included in the text content:

- `LICENSE`

