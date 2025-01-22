import Link from "next/link";
import React from "react";

const menuItems = [
  { name: "NSE", link: "/" },
  { name: "BSE", link: "/" },
  { name: "MCX", link: "/" },
  { name: "Terms & conditions", link: "/" },
  { name: "Policies & procedures", link: "/" },
  { name: "Privacy policy", link: "/" },
  { name: "Disclosure", link: "/" },
  { name: "For investor's attention", link: "/" },
  { name: "Investor charter", link: "/" },
];


export default function Aboutus() {
  return (
    <div className="px-[14%] py-[1.5%] flex flex-col bg-[#fbfbfb] gap-2">
      <p className="text-[#9b9b9b] text-[10.4px]">
        Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration
        no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking
        Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through
        Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI Registration
        no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154,
        4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th
        Phase, Bengaluru - 560078, Karnataka, India. For any complaints
        pertaining to securities broking please write to{" "}
        <span className="text-blue-500">complaints@zerodha.com</span>, for DP
        related to <span className="text-blue-500">dp@zerodha.com</span>. Please
        ensure you carefully read the Risk Disclosure Document as prescribed by
        SEBI | ICF
      </p>
      <p className="text-[#9b9b9b] text-[10.4px]">
        Procedure to file a complaint on{" "}
        <span className="text-blue-500">SEBI SCORES: </span>
        Register on SCORES portal. Mandatory details for filing complaints on
        SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits:
        Effective Communication, Speedy redressal of the grievances
      </p>
      <p className="text-blue-500 text-[10.4px]">
        Smart Online Dispute Resolution | Grievances Redressal Mechanism
      </p>
      <p className="text-[#9b9b9b] text-[10.4px]">
        Investments in securities market are subject to market risks; read all
        the related documents carefully before investing.
      </p>
      <p className="text-[#9b9b9b] text-[10.4px]">
        Attention investors: 1) Stock brokers can accept securities as margins
        from clients only by way of pledge in the depository system w.e.f
        September 01, 2020. 2) Update your e-mail and phone number with your
        stock broker / depository participant and receive OTP directly from
        depository on your e-mail and/or mobile number to create pledge. 3)
        Check your securities / MF / bonds in the consolidated account statement
        issued by NSDL/CDSL every month.
      </p>
      <p className="text-[#9b9b9b] text-[10.4px]">
        {" "}
        "Prevent unauthorised transactions in your account. Update your mobile
        numbers/email IDs with your stock brokers. Receive information of your
        transactions directly from Exchange on your mobile/email at the end of
        the day. Issued in the interest of investors. KYC is one time exercise
        while dealing in securities markets - once KYC is done through a SEBI
        registered intermediary (broker, DP, Mutual Fund etc.), you need not
        undergo the same process again when you approach another intermediary."
        Dear Investor, if you are subscribing to an IPO, there is no need to
        issue a cheque. Please write the Bank account number and sign the IPO
        application form to authorize your bank to make payment in case of
        allotment. In case of non allotment the funds will remain in your bank
        account. As a business we don't give stock tips, and have not authorized
        anyone to trade on behalf of others. If you find anyone claiming to be
        part of Zerodha and offering such services, please{" "}
        <span className="text-blue-500"> create a ticket here</span>.
      </p>
      <div className="flex gap-4 items-center  justify-center text-[#9b9b9b] font-medium my-2">
        {menuItems.map((item, index) => (
          <Link href={item.link} key={index} className="text-[12px] hover:text-blue-500">
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
