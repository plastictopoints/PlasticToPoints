import { motion } from 'motion/react';
import { Meta } from '../components/layout/Meta';

export default function Privacy() {
  const lastUpdated = "May 2026"; // Current Project Date

  return (
    <div className="pt-32 pb-32 bg-white selection:bg-mint/30">
      <Meta 
        title="Privacy Policy | PlasticToPoints"
        description="Learn how PlasticToPoints protects your data and manages your information as you help us clean the environment."
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h1 className="text-6xl lg:text-7xl font-[900] tracking-tighter uppercase leading-none mb-6">
            Privacy <span className="text-mint">Policy</span>
          </h1>
          <p className="text-xl font-black uppercase tracking-tight text-slate">
            Last updated: {lastUpdated}
          </p>
        </motion.div>

        {/* Content Section */}
        <div className="space-y-12 text-slate font-medium text-lg leading-relaxed uppercase tracking-tight">
          
          <section>
            <p className="mb-6">
              YOUR PRIVACY MATTERS TO PLASTICTOPOINTS (THE “COMPANY”, “WE”, “PLASTICTOPOINTS”, “US” OR “OUR”).
            </p>
            <p className="mb-6">
              THIS PRIVACY POLICY (“POLICY”) DESCRIBES THE POLICIES AND PROCEDURES ON THE COLLECTION, USE, PROCESSING, STORAGE, RETRIEVAL, DISCLOSURE, TRANSFER AND PROTECTION OF YOUR INFORMATION, INCLUDING PERSONAL INFORMATION AND SENSITIVE PERSONAL DATA OR INFORMATION (“INFORMATION”), THAT <strong>PLASTICTOPOINTS</strong> MAY RECEIVE THROUGH YOUR ONLINE ACCESS, INTERACTION OR USE, OF THE <strong>PLASTICTOPOINTS</strong> MOBILE APPLICATIONS (“APP”) OR OUR WEBSITE (THE WEBSITE AND APP ARE COLLECTIVELY REFERRED TO AS THE “<strong>PLASTICTOPOINTS</strong> PLATFORM”) OR THROUGH YOUR OFFLINE INTERACTION WITH US INCLUDING THROUGH MAILS, PHONES, IN PERSON, ETC., OR WHILE AVAILING OUR SERVICES.
            </p>
            <p className="mb-6">
              THE TERMS “YOU” AND “YOUR” REFER TO A RECYCLER, A CUSTOMER, A HUB PARTNER OR ANY OTHER USER OF THE PLASTICTOPOINTS PLATFORM AND / OR AVAILING THE SERVICES.
            </p>
            <p>
              PLEASE READ THIS POLICY BEFORE USING THE PLASTICTOPOINTS PLATFORM OR SUBMITTING ANY INFORMATION TO PLASTICTOPOINTS. THIS POLICY IS A PART OF AND INCORPORATED WITHIN THE TERMS AND CONDITIONS APPLICABLE TO THE USERS OF THE APP.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-[900] text-charcoal mb-6">USER ACCEPTANCE</h2>
            <p className="mb-6">
              BY ACCESSING OR USING THE <strong>PLASTICTOPOINTS</strong> PLATFORM OR THE SERVICES, YOU AGREE AND CONSENT TO THIS POLICY, ALONG WITH ANY AMENDMENTS MADE BY THE COMPANY AT ITS SOLE DISCRETION AND POSTED ON THE <strong>PLASTICTOPOINTS</strong> PLATFORM FROM TIME TO TIME.
            </p>
            <p>
              ANY COLLECTION, PROCESSING, RETRIEVAL, TRANSFER, USE, STORAGE, DISCLOSURE AND PROTECTION OF YOUR INFORMATION WILL BE IN ACCORDANCE WITH THIS POLICY AND APPLICABLE LAWS INCLUDING BUT NOT LIMITED TO THE INFORMATION TECHNOLOGY ACT. IF YOU DO NOT AGREE WITH THE POLICY, PLEASE DO NOT USE OR ACCESS THE <strong>PLASTICTOPOINTS</strong> PLATFORM.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-[900] text-charcoal mb-6">DEFINITIONS</h2>
            <p className="mb-6">UNLESS OTHERWISE PROVIDED IN THIS POLICY, THE TERMS CAPITALIZED IN THE POLICY SHALL HAVE THE MEANING AS PROVIDED HEREUNDER:</p>
            <ul className="space-y-4">
              <li><strong>“RECYCLERS”</strong> MEANS INDEPENDENT USERS WHO PARTICIPATE IN THE PLASTICTOPOINTS ECOSYSTEM BY CONTRIBUTING PLASTIC WASTE.</li>
              <li><strong>“CO-BRANDED SERVICES”</strong> SHALL HAVE THE MEANING ASSIGNED TO THE TERM IN THE DISCLOSURE SECTION HERETO.</li>
              <li><strong>“DEVICE”</strong> SHALL MEAN COMPUTER, MOBILE OR OTHER DEVICE USED TO ACCESS THE SERVICES.</li>
              <li><strong>“DEVICE IDENTIFIER”</strong> SHALL MEAN IP ADDRESS OR OTHER UNIQUE IDENTIFIER OF THE DEVICE.</li>
              <li><strong>“PERSONAL INFORMATION”</strong> SHALL MEAN SUCH CATEGORIES OF INFORMATION THAT COULD REASONABLY BE USED TO IDENTIFY YOU PERSONALLY, INCLUDING YOUR NAME, E-MAIL ADDRESS, AND MOBILE NUMBER.</li>
              <li><strong>“TPSP”</strong> SHALL MEAN A THIRD-PARTY SERVICE PROVIDER.</li>
              <li><strong>“USAGE INFORMATION”</strong> SHALL HAVE THE MEANING ASSIGNED TO THE TERM IN THE COLLECTION SECTION HERETO.</li>
              <li><strong>“HUB PARTNER”</strong> SHALL MEAN THIRD PARTY PROVIDERS WHO OFFER COLLECTION AND VERIFICATION SERVICES ON THE PLASTICTOPOINTS PLATFORM.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-[900] text-charcoal mb-6">WHAT INFORMATION DO WE COLLECT?</h2>
            
            <div className="space-y-10">
              <div>
                <h3 className="text-xl font-black text-charcoal mb-4">I. INFORMATION YOU PROVIDE TO US</h3>
                <p className="mb-4"><strong>PERSONAL INFORMATION:</strong> WE MAY ASK YOU TO PROVIDE CERTAIN PERSONAL INFORMATION TO US. WE COLLECT THIS INFORMATION THROUGH VARIOUS MEANS INCLUDING ACCOUNT REGISTRATION FORMS, CONTACT US FORMS, OR WHEN YOU OTHERWISE INTERACT WITH US. WHEN YOU SIGN UP TO USE THE SERVICES, YOU CREATE A USER PROFILE. WE SHALL ASK YOU TO PROVIDE ONLY SUCH PERSONAL INFORMATION WHICH IS FOR LAWFUL PURPOSE CONNECTED WITH OUR SERVICES.</p>
                <ul className="list-disc pl-6 space-y-4">
                  <li><strong>ACCOUNT INFORMATION:</strong> CREATE OR UPDATE YOUR ACCOUNT WHICH MAY INCLUDE YOUR EMAIL ADDRESS, NAME, ADDRESS, MOBILE NUMBER, GENDER, DATE OF BIRTH, PHOTOGRAPH, LOGIN NAME, PASSWORD, BANKING OR PAYMENT RELATED INFORMATION (AS PERMITTED BY APPLICABLE LAWS), ETC.</li>
                  <li><strong>SAVED INFORMATION:</strong> WHILE YOU USE OUR SERVICES, WE MAY COLLECT AND STORE INFORMATION ABOUT YOU TO PROCESS YOUR REQUESTS AND AUTOMATICALLY COMPLETE FORMS FOR FUTURE TRANSACTIONS.</li>
                  <li><strong>VERIFICATION INFORMATION:</strong> IF YOU ARE A HUB PARTNER OR RECYCLER, WE MAY COLLECT LOCATION DETAILS, PROFILE PICTURE, COPIES OF GOVERNMENT ISSUED IDENTIFICATION DOCUMENTS SUCH AS CITIZENSHIP CARD, PERMANENT ACCOUNT NUMBER (PAN), ETC.</li>
                  <li><strong>BACKGROUND CHECK INFORMATION:</strong> WE COLLECT BACKGROUND CHECK AND IDENTITY VERIFICATION INFORMATION OF OUR PARTNERS WHERE PERMITTED BY LAW.</li>
                  <li><strong>OTHER APPS:</strong> ENABLE FEATURES THAT REQUIRE PLASTICTOPOINTS’S ACCESS TO OTHER APPLICATIONS ON YOUR DEVICE AIMING TO PREVENT AND DETECT FRAUD.</li>
                  <li><strong>OTHER INFORMATION:</strong> WE COLLECT ADDITIONAL INFORMATION YOU PROVIDE WHEN YOU CORRESPOND WITH US FOR CUSTOMER SUPPORT OR REPORT PROBLEMS.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-black text-charcoal mb-4">II. INFORMATION WE COLLECT AS YOU ACCESS AND USE THE APP</h3>
                <ul className="list-disc pl-6 space-y-4">
                  <li><strong>TRANSACTION INFORMATION:</strong> WE COLLECT TRANSACTION INFORMATION SUCH AS RECYCLING TRIP DETAILS, PICK-UP AND DROP-OFF ADDRESSES, DISTANCE TRAVELED, AND POINT REDEMPTION HISTORY.</li>
                  <li><strong>LOCATION DATA:</strong> WE COLLECT PRECISE OR APPROXIMATE LOCATION DATA FROM YOUR DEVICE IF YOU ENABLE US TO DO SO. WE USE THIS DATA FROM THE TIME A SERVICE IS REQUESTED UNTIL IT IS FINISHED.</li>
                  <li><strong>USAGE INFORMATION:</strong> WE AND OUR TPSPS MAY USE TECHNOLOGIES THAT AUTOMATICALLY COLLECT CERTAIN INFORMATION WHENEVER YOU VISIT OR INTERACT WITH THE PLATFORM.</li>
                  <li><strong>DEVICE INFORMATION:</strong> WE COLLECT TECHNICAL INFORMATION INCLUDING DEVICE IDENTIFIER, MANUFACTURE, SOFTWARE MODEL, AND OPERATING SYSTEM VERSIONS.</li>
                  <li><strong>SMS/TEXT MESSAGES:</strong> WE MAY COLLECT DATA FROM SMS FOR THE PURPOSES OF (I) ISSUING AND RECEIVING ONE-TIME PASSWORDS AND (II) AUTOMATICALLY FILLING VERIFICATION DETAILS DURING TRANSACTIONS.</li>
                  <li><strong>CALL DETAILS:</strong> IF YOU ARE A HUB PARTNER, WE WILL RECORD YOUR CALLS WITH US MADE FROM THE DEVICE USED TO PROVIDE SERVICES FOR TRAINING AND QUALITY PURPOSES.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-black text-charcoal mb-4">III. INFORMATION THIRD PARTIES PROVIDE ABOUT YOU</h3>
                <p>WE MAY, FROM TIME TO TIME, COLLECT INFORMATION ABOUT YOU THROUGH OUR PLATFORM OR WHILE AVAILING THE SERVICES AND COLLECT INFORMATION FROM OUR AFFILIATES OR TPSPS SUCH AS ANALYTICS PROVIDERS, SEARCH INFORMATION PROVIDERS, AND PAYMENT SERVICE PROVIDERS.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-[900] text-charcoal mb-6">USE OF INFORMATION COLLECTED</h2>
            <p className="mb-6">OUR PRIMARY GOAL IN COLLECTING YOUR INFORMATION IS TO PROVIDE YOU WITH AN ENHANCED EXPERIENCE WHEN USING THE SERVICES. WE MAY USE YOUR INFORMATION FOR:</p>
            <ul className="list-disc pl-6 space-y-4">
              <li>ENABLING YOU TO ACCESS THE PLASTICTOPOINTS PLATFORM.</li>
              <li>VERIFYING YOUR IDENTITY AND YOUR CAPACITY TO PROVIDE OR RECEIVE SERVICES.</li>
              <li>MONITORING WHICH FEATURES OF THE SERVICES ARE USED MOST TO DETERMINE WHICH FEATURES NEED TO BE IMPROVED.</li>
              <li>SENDING YOU WELCOME COMMUNICATIONS AND STRICTLY SERVICE-RELATED ANNOUNCEMENTS.</li>
              <li>PREVENTING, DISCOVERING AND INVESTIGATING VIOLATIONS OF THIS POLICY OR ANY TERMS OF SERVICE.</li>
              <li>IDENTIFYING SECURITY BREACHES, ERRORS, FRAUD, MONEY LAUNDERING, AND OTHER CRIMINAL ACTIVITIES.</li>
              <li>PROVIDING FUNCTIONALITY, ANALYSING PERFORMANCE, FIXING ERRORS, AND IMPROVING USABILITY.</li>
              <li>COMPLYING WITH APPLICABLE LAWS OR REQUESTS RECEIVED FROM REGULATORS AND GOVERNMENT AUTHORITIES.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-[900] text-charcoal mb-6">HOW AND WHEN DO WE DISCLOSE INFORMATION TO THIRD PARTIES</h2>
            <p className="mb-8 font-black uppercase text-mint leading-tight">WE DO NOT SELL, SHARE, RENT OR TRADE THE INFORMATION WE HAVE COLLECTED ABOUT YOU, OTHER THAN AS DISCLOSED WITHIN THIS POLICY.</p>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-black text-charcoal mb-3">A. WHEN YOU AGREE TO SHARE INFORMATION</h3>
                <p>YOU MAY OPT TO RECEIVE MARKETING OFFERS FROM THIRD PARTIES. IF YOU AGREE, YOUR PERSONAL INFORMATION WILL BE DISCLOSED TO SUCH THIRD PARTIES AND SUBJECT TO THEIR PRIVACY POLICIES.</p>
              </div>
              
              <div>
                <h3 className="text-xl font-black text-charcoal mb-3">B. THIRD PARTIES PROVIDING SERVICES ON OUR BEHALF</h3>
                <p>WE USE TPSPS TO FACILITATE OUR SERVICES, PERFORM ANALYTICS, PROCESS PAYMENTS, AND ENGAGE IN ANTI-FRAUD MEASURES. THESE THIRD PARTIES WILL HAVE ACCESS TO INFORMATION ONLY TO CARRY OUT THE SERVICES THEY ARE PERFORMING FOR US.</p>
              </div>

              <div>
                <h3 className="text-xl font-black text-charcoal mb-3">C. CO-BRANDED SERVICES</h3>
                <p>CERTAIN ASPECTS OF THE SERVICES MAY BE PROVIDED IN ASSOCIATION WITH THIRD PARTIES SUCH AS CREDIT HOUSES AND SPONSORS. IF YOU ELECT TO REGISTER FOR THESE, YOU CONSENT TO PROVIDING INFORMATION TO BOTH US AND THE THIRD PARTY.</p>
              </div>

              <div>
                <h3 className="text-xl font-black text-charcoal mb-3">D. ADMINISTRATIVE AND LEGAL REASONS</h3>
                <p>WE COOPERATE WITH GOVERNMENT OFFICIALS TO COMPLY WITH APPLICABLE LAWS. WE MAY DISCLOSE YOUR INFORMATION TO SATISFY ANY REGULATION, GOVERNMENTAL REQUEST OR LEGAL PROCESS.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-[900] text-charcoal mb-6">THIRD PARTY CONTENT AND LINKS</h2>
            <p className="mb-6">
              THE SERVICES MAY CONTAIN CONTENT SUPPLIED BY THIRD PARTIES. WE ARE NOT RESPONSIBLE FOR THE PRIVACY PRACTICES EMPLOYED BY THESE THIRD PARTIES. IF YOU CLICK ON A LINK TO A THIRD-PARTY SITE, OUR POLICY NO LONGER APPLIES.
            </p>
            <p>
              SOCIAL MEDIA FEATURES (LIKE THE FACEBOOK LIKE BUTTON OR WHATSAPP SHARE) MAY BE INTEGRATED INTO THE APP. THESE FEATURES MAY COLLECT YOUR IP ADDRESS AND SET COOKIES TO FUNCTION PROPERLY. YOUR INTERACTIONS WITH THESE FEATURES ARE GOVERNED BY THE PRIVACY POLICY OF THE PROVIDING COMPANY.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-[900] text-charcoal mb-6">SECURITY</h2>
            <p className="mb-6">
              THE INFORMATION WE COLLECT IS SECURELY STORED WITHIN OUR DATABASES, AND WE USE STANDARD, INDUSTRY-WIDE SECURITY PRACTICES SUCH AS ENCRYPTION, FIREWALLS, AND SSL (SECURE SOCKET LAYERS) VIA <strong>SUPABASE</strong>.
            </p>
            <p>
              HOWEVER, NO SECURITY SYSTEM IS IMPENETRABLE. WE CANNOT GUARANTEE THE SECURITY OF OUR DATABASES, NOR CAN WE GUARANTEE THAT INFORMATION WON'T BE INTERCEPTED WHILE BEING TRANSMITTED OVER THE INTERNET. ANY INFORMATION YOU TRANSMIT, YOU DO AT YOUR OWN RISK.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-[900] text-charcoal mb-6">CHANGE OF INFORMATION AND CANCELLATION</h2>
            <p className="mb-6">
              YOU ARE RESPONSIBLE FOR MAINTAINING THE ACCURACY OF THE INFORMATION YOU SUBMIT. IF YOUR PERSONAL INFORMATION CHANGES, YOU MAY CORRECT OR AMEND IT BY MAKING THE CHANGE ON YOUR PROFILE PAGE.
            </p>
            <p>
              WE WILL RETAIN YOUR INFORMATION AS LONG AS YOUR ACCOUNT IS ACTIVE. EVEN AFTER TERMINATION, WE MAY RETAIN DATA FOR A PERIOD OF 180 DAYS TO RESOLVE DISPUTES, PREVENT FRAUD, OR COMPLY WITH LEGAL OBLIGATIONS.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-[900] text-charcoal mb-6">GRIEVANCE OFFICER</h2>
            <p className="mb-6">IF YOU WOULD LIKE TO COMPLAIN ABOUT HOW WE PROCESS YOUR INFORMATION, PLEASE CONTACT OUR GRIEVANCE OFFICER:</p>
            <div className="p-8 bg-surface rounded-3xl border-2 border-charcoal/5">
              <p className="text-2xl font-black text-charcoal mb-2">EMAIL: PLASTICTOPOINTS@GMAIL.COM</p>
              <p className="text-lg font-bold text-slate uppercase">LOCATED AT: JANAKPUR, NEPAL</p>
            </div>
          </section>

          <section className="pt-12 border-t-4 border-charcoal/5">
            <p className="text-sm font-bold text-charcoal/50">
              A <strong>PLASTICTOPOINTS</strong> INITIATIVE BY TEAM TERRASYNC — CLEAN NEPAL, SECURE DATA. ALL RIGHTS RESERVED © 2026.
            </p>
          </section>
        </div>

        {/* Action Button */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-20"
        >
          <button 
            onClick={() => window.history.back()}
            className="bg-charcoal text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-mint hover:text-charcoal transition-all shadow-xl"
          >
            Go Back
          </button>
        </motion.div>
      </div>
    </div>
  );
}