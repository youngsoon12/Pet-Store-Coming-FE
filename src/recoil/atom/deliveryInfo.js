import { atom } from 'recoil';

export const deliveryInfo = atom({
  key: 'deliveryInfo',
  default: {
    userId: '',
    orderId: '',
    paymentKey: '',
    deliveryAddress: '',
    receiverName: '',
    phoneNumber: '',
    orderName: '',
    productList: [],
    amount: 0,
  },
  effects: [
    ({ setSelf, onSet }) => {
      const savedData = sessionStorage.getItem('deliveryInfo');
      if (savedData) {
        setSelf(JSON.parse(savedData));
      }

      onSet((newValue) => {
        sessionStorage.setItem('deliveryInfo', JSON.stringify(newValue));
      });
    },
  ],
});
