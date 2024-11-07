import { atom } from 'recoil';

export const paymentProductAtom = atom({
  key: 'paymentProduct',
  default: [
    {
      cartId: '',
      productDiscountPrice: 0,
      productId: '',
      productImageName: '',
      productImagePath: '',
      productImageUrl: '',
      productName: '',
      productPrice: 0,
      productQuantity: '',
      storeBrandName: '',
      storeId: '',
      userId: '',
    },
  ],
  effects: [
    ({ setSelf, onSet }) => {
      const savedData = sessionStorage.getItem('paymentProduct');
      if (savedData) {
        setSelf(JSON.parse(savedData));
      }

      onSet((newValue) => {
        sessionStorage.setItem('paymentProduct', JSON.stringify(newValue));
      });
    },
  ],
});
