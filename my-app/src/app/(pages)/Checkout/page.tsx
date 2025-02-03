"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import PagesHeader from "@/components/PagesHeader";
import { UseAppSelector } from "@/redux/hooks";
import { MdClose } from "react-icons/md";

// Define an interface for form fields
interface FormData {
  firstName: string;
  lastName: string;
  companyName?: string;
  country: string;
  streetAddress: string;
  town: string;
  province: string;
  zip: string;
  phone: string;
  email: string;
  additionalInfo?: string;
}

const Checkout = () => {
  const cartItems = UseAppSelector((state) => state.cart.items);
  const cartTotal = cartItems.reduce((acc, product) => acc + product.price * product.quantity,0);
  
  const [paymentMethod, setPaymentMethod] = useState("bank");
  const router = useRouter();

  // State for form data and errors
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    companyName: "",
    country: "",
    streetAddress: "",
    town: "",
    province: "",
    zip: "",
    phone: "",
    email: "",
    additionalInfo: "",
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});

  // Handle input change and clear error for that field
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  // Validate required fields
  const validate = (): Partial<FormData> => {
    const newErrors: Partial<FormData> = {};
    if (!formData.firstName.trim()) newErrors.firstName = "First Name is required.";
    if (!formData.lastName.trim()) newErrors.lastName = "Last Name is required.";
    if (!formData.country.trim()) newErrors.country = "Country is required.";
    if (!formData.streetAddress.trim()) newErrors.streetAddress = "Street Address is required.";
    if (!formData.town.trim()) newErrors.town = "Town / City is required.";
    if (!formData.province.trim()) newErrors.province = "Province is required.";
    if (!formData.zip.trim()) newErrors.zip = "ZIP code is required.";
    if (!formData.phone.trim()) newErrors.phone = "Phone is required.";
    if (!formData.email.trim()) newErrors.email = "Email is required.";
    // additionalInfo aur companyName optional hain
    return newErrors;
  };

  // Submit handler with validation
  const handlePlaceOrder = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return; // Agar errors hain, to order place nahi hoga.
    }
    // Agar validation pass ho gaya, to payment method ke hisaab se route karo.
    if (paymentMethod === "bank") {
      router.push("/Payment");
    } else if (paymentMethod === "cod") {
      router.push("/Order-place-success")
    }
  };

  // Agar cart empty ho to
  if (!cartItems || cartItems.length === 0) {
    return (
      <div className="max-w-[1440vw] font-poppins w-full md:mt-[90px] mt-[60px]">
        <PagesHeader name="Checkout" title="Checkout" />
        <div className="text-center items-center flex justify-center lg:text-xl text-base font-semibold h-[400px]">
          Your cart is empty! Please add items before proceeding to checkout.
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-[1440vw] font-poppins w-full md:mt-[90px] mt-[60px]">
      <PagesHeader name="Checkout" title="Checkout" />
      <div className="flex flex-col md:flex-row justify-between md:w-[85%] w-[90%] mx-auto md:py-20 py-10 gap-10">
        {/* Billing Details Section */}
        <div className="flex flex-col gap-8 w-full mx-auto">
          <h1 className="font-semibold text-4xl">Billing details</h1>
          <form onSubmit={handlePlaceOrder} className="flex justify-between w-full flex-col md:flex-row gap-7">
            <div className="flex flex-col gap-7">
                <div className="flex md:gap-8 gap-3">
              {/* First Name */}
              <div className="flex flex-col gap-4">
                <label htmlFor="firstName" className="text-base font-medium">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className={`mt-1 p-6 border rounded-[10px] lg:w-[211px] w-[150px] lg:h-[75px] h-12 focus:outline-none ${
                    errors.firstName ? "border-red-500" : "border-[#9F9F9F]"
                  }`}
                  placeholder=""
                />
                {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
              </div>

              {/* Last Name */}
              <div className="flex flex-col gap-4">
                <label htmlFor="lastName" className="text-base font-medium">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className={`mt-1 p-6 border rounded-[10px] lg:w-[211px] w-[150px] lg:h-[75px] h-12 focus:outline-none ${
                    errors.lastName ? "border-red-500" : "border-[#9F9F9F]"
                  }`}
                  placeholder=""
                />
                {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
              </div>

              </div>

              {/* Company Name (Optional) */}
              <div className="flex flex-col gap-4">
                <label htmlFor="companyName" className="text-base font-medium">
                  Company Name (Optional)
                </label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  className="mt-1 p-6 border border-[#9F9F9F] md:w-[453px] lg:h-[75px] h-12 rounded-[10px] focus:outline-none"
                  placeholder=""
                />
              </div>

              {/* Country / Region */}
              <div className="flex flex-col gap-4">
                <label htmlFor="country" className="text-base font-medium">
                  Country / Region
                </label>
                <input
                  type="text"
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className={`mt-1 p-6 border rounded-[10px] md:w-[453px] lg:h-[75px] h-12 focus:outline-none ${
                    errors.country ? "border-red-500" : "border-[#9F9F9F]"
                  }`}
                  placeholder="Sri Lanka"
                />
                {errors.country && <p className="text-red-500 text-sm">{errors.country}</p>}
              </div>

              {/* Street Address */}
              <div className="flex flex-col gap-4">
                <label htmlFor="streetAddress" className="text-base font-medium">
                  Street address
                </label>
                <input
                  type="text"
                  id="streetAddress"
                  name="streetAddress"
                  value={formData.streetAddress}
                  onChange={handleChange}
                  className={`mt-1 p-6 border rounded-[10px] md:w-[453px] lg:h-[75px] h-12 focus:outline-none ${
                    errors.streetAddress ? "border-red-500" : "border-[#9F9F9F]"
                  }`}
                  placeholder=""
                />
                {errors.streetAddress && <p className="text-red-500 text-sm">{errors.streetAddress}</p>}
              </div>

              {/* Town / City */}
              <div className="flex flex-col gap-4">
                <label htmlFor="town" className="text-base font-medium">
                  Town / City
                </label>
                <input
                  type="text"
                  id="town"
                  name="town"
                  value={formData.town}
                  onChange={handleChange}
                  className={`mt-1 p-6 border rounded-[10px] md:w-[453px] lg:h-[75px] h-12 focus:outline-none ${
                    errors.town ? "border-red-500" : "border-[#9F9F9F]"
                  }`}
                  placeholder=""
                />
                {errors.town && <p className="text-red-500 text-sm">{errors.town}</p>}
              </div>

              {/* Province */}
              <div className="flex flex-col gap-4">
                <label htmlFor="province" className="text-base font-medium">
                  Province
                </label>
                <input
                  type="text"
                  id="province"
                  name="province"
                  value={formData.province}
                  onChange={handleChange}
                  className={`mt-1 p-6 border rounded-[10px] md:w-[453px] lg:h-[75px] h-12 focus:outline-none ${
                    errors.province ? "border-red-500" : "border-[#9F9F9F]"
                  }`}
                  placeholder="Western Province"
                />
                {errors.province && <p className="text-red-500 text-sm">{errors.province}</p>}
              </div>

              {/* ZIP Code */}
              <div className="flex flex-col gap-4">
                <label htmlFor="zip" className="text-base font-medium">
                  ZIP code
                </label>
                <input
                  type="text"
                  id="zip"
                  name="zip"
                  value={formData.zip}
                  onChange={handleChange}
                  className={`mt-1 p-6 border rounded-[10px] md:w-[453px] lg:h-[75px] h-12 focus:outline-none ${
                    errors.zip ? "border-red-500" : "border-[#9F9F9F]"
                  }`}
                  placeholder=""
                />
                {errors.zip && <p className="text-red-500 text-sm">{errors.zip}</p>}
              </div>

              {/* Phone */}
              <div className="flex flex-col gap-4">
                <label htmlFor="phone" className="text-base font-medium">
                  Phone
                </label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`mt-1 p-6 border rounded-[10px] md:w-[453px] lg:h-[75px] h-12 focus:outline-none ${
                    errors.phone ? "border-red-500" : "border-[#9F9F9F]"
                  }`}
                  placeholder=""
                />
                {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
              </div>

              {/* Email */}
              <div className="flex flex-col gap-4">
                <label htmlFor="email" className="text-base font-medium">
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`mt-1 p-6 border rounded-[10px] md:w-[453px] lg:h-[75px] h-12 focus:outline-none ${
                    errors.email ? "border-red-500" : "border-[#9F9F9F]"
                  }`}
                  placeholder=""
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
              </div>

              {/* Additional Information (Optional) */}
              <div className="flex flex-col">
                <textarea
                  rows={1}
                  id="additionalInfo"
                  name="additionalInfo"
                  value={formData.additionalInfo}
                  onChange={handleChange}
                  className="mt-10 p-6 border border-[#9F9F9F] md:w-[453px] h-[75px] rounded-[10px] focus:outline-none"
                  placeholder="Additional information"
                />
              </div>
            </div>

            {/* Order Summary & Payment Method Section */}
            <div className="flex flex-col gap-4 md:w-[40%]">
              {cartItems.map((product) => (
                <div key={product.id} className="flex justify-between w-full border-b border-[#D9D9D9] md:pb-6 pb-3">
                  <div className="flex flex-col justify-start gap-4 font-normal text-base">
                    <h1 className="font-medium text-2xl">Product</h1>
                    <div className="flex gap-3 items-center">
                      <p className="text-[#9F9F9F]">{product.name}</p>
                      <MdClose size={15} />
                      <p>{product.quantity}</p>
                    </div>
                    <p>Subtotal</p>
                  </div>
                  <div className="flex flex-col justify-end gap-4 text-end font-light text-base">
                    <h1 className="font-medium text-2xl">Subtotal</h1>
                    <p>${product.price * product.quantity}</p>
                    <h2>${product.price * product.quantity}</h2>
                  </div>
                </div>
              ))}
              {/* Total */}
              <div className="flex justify-between text-end font-light text-base">
                <h1 className="font-medium text-2xl">Total</h1>
                <h2 className="font-bold text-2xl text-[#B88E2F]">${cartTotal}</h2>
              </div>
              <div className="text-base font-normal">
                <div className="flex gap-4 items-center">
                  <p className="w-[14px] h-[14px] rounded-full bg-black"></p>
                  <p>{paymentMethod === "bank" ? "Direct Bank Transfer" : "Cash On Delivery"}</p>
                </div>
                <p className="font-light text-[#9F9F9F] mt-3">
                  {paymentMethod === "bank"
                    ? "Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account."
                    : "Pay with cash when your order is delivered. Ensure you have the exact amount ready as change may not be available."}
                </p>
                <div className="py-6 flex flex-col gap-3 cursor-pointer">
                  <div
                    onClick={() => setPaymentMethod("bank")}
                    className={`flex gap-4 items-center ${paymentMethod === "bank" ? "text-black" : "text-[#9F9F9F]"}`}
                  >
                    <p
                      className={`w-[14px] h-[14px] rounded-full border ${
                        paymentMethod === "bank" ? "border-black bg-black" : "border-[#9F9F9F]"
                      }`}
                    ></p>
                    <p>Direct Bank Transfer</p>
                  </div>
                  <div
                    onClick={() => setPaymentMethod("cod")}
                    className={`flex gap-4 items-center ${paymentMethod === "cod" ? "text-black" : "text-[#9F9F9F]"} cursor-pointer`}
                  >
                    <p
                      className={`w-[14px] h-[14px] rounded-full border ${
                        paymentMethod === "cod" ? "border-black bg-black" : "border-[#9F9F9F]"
                      }`}
                    ></p>
                    <p>Cash On Delivery</p>
                  </div>
                </div>
                <p className="font-extralight">
                  Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our{" "}
                  <span className="font-semibold">privacy policy</span>.
                </p>
              </div>
              <button type="submit" className="mt-4 flex justify-center mx-auto rounded-[15px] font-normal text-xl lg:w-[318px] w-[280px] lg:py-5 py-3 border border-black">
                Place order
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
