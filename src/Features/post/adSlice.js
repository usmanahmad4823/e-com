import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  ads: [
    {
      id: 1,
      title: "iPhone 13 Pro Max",
      description: "Excellent condition, 128GB storage, PTA approved",
      price: 135000,
      category: "iPhones",
    //   image: "image-url-here",
      image: " https://www.techjuice.pk/wp-content/uploads/2025/01/iphone-17-air-rumors-design-changes-camera-upgrades-and-pricing-techjuice-164045-1-940x538.jpg",
    },
    {
      id: 2,
      title: "Samsung s23",
      description: "Excellent condition, 256GB storage, PTA approved",
      price: 85000,
      category: "Samsung",
    //   image: "image-url-here",
      image: "https://media.assettype.com/outlookbusiness/import/uploadimage/library/16_9/16_9_5/IMAGE_1681733162.webp?w=801&auto=format%2Ccompress&fit=max&format=webp&dpr=1.0",
    },
  ],
};

const adSlice = createSlice({
  name: "ad",
  initialState,
  reducers: {
    // ✅ Add new Ad
    addAd: (state, action) => {
      const newAd = {
        id: nanoid(),
        title: action.payload.title,
        description: action.payload.description,
        price: action.payload.price,
        category: action.payload.category,
        image: action.payload.image,
      };
      state.ads.push(newAd);
    },

    // ✅ Remove Ad by id
    removeAd: (state, action) => {
      state.ads = state.ads.filter((ad) => ad.id !== action.payload);
    },

    // ✅ Clear all ads
    clearAds: (state) => {
      state.ads = [];
    },
  },
});

export const { addAd, removeAd, clearAds } = adSlice.actions;
export default adSlice.reducer;
