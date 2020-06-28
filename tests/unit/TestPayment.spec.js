
import * as chai from "chai";
import { Payment } from "@/services/Payment.js";
const assert = chai.assert;
//chai.use(require("chai-as-promised"))
describe("Payment.js", () => {
  it("payment.get() with correct params is not empty", (done) => {
    let data = {
      apiUrl: 'http://localhost:8086',
      payDetails: {
        orderDescription: 'Тестовый заказ',
        customerFullname: 'Ермаков Денис Владимирович',
        customerPhone: '+79626114494'
      }
    };
    let payment = new Payment(data);
    payment.get()
    .then((payObject)=>{
      assert.isNotEmpty(payObject.id);
      done();
    })
    .catch((err)=>{
      done(err);
    })
  });
})
