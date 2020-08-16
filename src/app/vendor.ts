import { Address } from "./model/address";
import { PaymentInformation } from "./model/paymentInformation";
import { UserAccount } from "./model/userAccount";

export class Vendor {
  id: String;
  name: String;
  moto: String;
  imageLogoName: String;

  address: Address;

  paymentInformation: PaymentInformation[];

  userAccount: UserAccount;
}
