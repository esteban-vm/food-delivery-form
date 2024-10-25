export const defaultValues: IFoodDeliveryForm = {
  orderNumber: new Date().valueOf(),
  customerDetails: {
    name: '',
    email: '',
    cellphone: '',
  },
  checkoutDetails: {
    paymentMethod: '',
    deliveryTime: '',
  },
  deliveryAddress: {
    state: '',
    city: '',
    street: '',
    landmark: '',
  },
}
