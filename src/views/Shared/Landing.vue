<template>
  <div>
    <main class="d-none d-lg-block d-md-block">
      <section>
        <div class="container-fluid">
          <div class="row p-5">
            <div class="col-lg-6 col-md-6">
              <div class="d-flex flex-column position-absolute top-10">
                <h2 class="text-main-red mb-1  w-100 font-weight-bold text-bold">Build your Net worth</h2>
                <p class="text-main-red ">
                  <span class="text_1">Through Fractional Real Estate Investment</span>
                  <span class="text_2">From anywhere across Africa</span>
                </p>
                <!-- <p class="text-main-red">{{ landingList[Math.abs(currentList) % landingList.length] }}</p> -->
                <div class="d-flex flex-row  ">
                  <main-button text="GET STARTED" size="md" class="mr-4 shadow-3" @click="goToLogin" />
                  <main-button type="outline" text="WATCH NOW &#160; &#160; &#x25B6;" size="md" class="" />
                </div>
              </div>
              <img style="width:95%;position: absolute;right:10%;top:-5%; z-index: -1" src="https://res.cloudinary.com/myyinvest/image/upload/v1614000932/mmyyinvest-2.0/svgs/incoming_p86skz.png" />
            </div>

            <div class="col-lg-6 col-md-6 mt-5">
              <img style="width: 90%; position: relative; z-index: -1" src="https://res.cloudinary.com/myyinvest/image/upload/v1614000931/mmyyinvest-2.0/svgs/map_ktif6c.png" />

              <span>
                <people class="position-absolute top-0 mt-2   d-lg-block d-md-none" flag-position="right" style="left: 40%;" size="xl-2" />
                <people class="position-absolute top-0 d-lg-none d-md-block mt-2 " flag-position="right" style="left: 40%;" size="xl" />
              </span>

              <span>
                <people class="position-absolute top-10   d-lg-block d-md-none" style="left: 0%;" size="xl-2" />
                <people class="position-absolute top-10 d-lg-none d-md-block  " style="left: 0%;" size="xl" />
              </span>

              <span>
                <people class="position-absolute top-30   d-lg-block d-md-none mt-2" flag-position="right" style="left: 40%;" size="xxl" />
                <people class="position-absolute top-30 d-lg-none d-md-block  mt-2" flag-position="right" style="left: 40%;" size="xl-1" />
              </span>

              <span>
                <people class="position-absolute top-50 d-lg-block d-md-none mt-n3 " style="left: 7%;" size="xl-2" />
                <people class="position-absolute top-50 d-lg-none d-md-block mt-n3" style="left: 0%;" size="xl" />
              </span>
            </div>
          </div>
        </div>
      </section>

      <section class="ml-5">
        <div class="container-fluid">
          <div class="d-flex flex-column">
            <!-- <img src="https://res.cloudinary.com/myyinvest/image/upload/v1614000931/mmyyinvest-2.0/svgs/light-circle_dzwdxm.svg" width="400" height="400" class="  position-relative d-md-none d-lg-block  mt-n5" style="z-index: -1" />
            <img src="https://res.cloudinary.com/myyinvest/image/upload/v1614000931/mmyyinvest-2.0/svgs/light-circle_dzwdxm.svg" width="300" height="300" class="d-md-block d-lg-none " style="margin-top: 100px" alt="" /> -->
            <div class="border-left-red d-flex flex-column  " style="margin-top: 50px">
              <span class="text-main-red ">INVESTMENTS</span>
              <span>Our Investment Options</span>
            </div>
          </div>
        </div>
      </section>

      <section style="margin-top: 50px;" class="ml-5">
        <div class="container-fluid">
          <div class="row ">
            <div class="col-lg-6 col-md-12">
              <span class="d-flex flex-column ">
                <!-- <h3>Co - Invest</h3> -->
                <h3>Income Plan</h3>
                <span class="header-underline" style="margin-left: 150px;"></span>
              </span>
              <!-- <p class="w-100 mt-3  font-weight-normal font-poppins" style="line-height:40px">
                Earn short-term returns when you invest in our vetted fractional real estate’s project. We carry out proper due diligence and carefully vet every real estate project with our governing
                body, we regulate the process to ensure risks are mitigated to the bear minimum and project is safe for investment.
              </p> -->
              <p class="w-100 mt-3  font-weight-normal font-poppins" style="line-height:40px">
                Earn short term returns within <span class="text-main-red">6 - 12months</span>, when you invest in a vetted Fractional Real Estate project. We carry out proper due diligence and
                carefully vet every Real Estate project provided by Reputable Property development companies, we regulate the process to ensure risks are mitigated to the bare minimum and projects are
                safe for investment.
              </p>

              <main-button @click="goToSingleListing('income-plan')" type="filled" text="Invest Now" size="md" class="mb-4" />
            </div>

            <div style="position: relative;" class="d-lg-block d-md-none col-lg-5 ">
              <img id="co_invest" src="https://res.cloudinary.com/myyinvest/image/upload/v1614001037/mmyyinvest-2.0/images/co-invest_jbjr29.svg" width="600" height="600" class=" mt-n5" />
            </div>
            <div style="position: relative;" class="d-lg-none d-md-block col-md-12 ">
              <img src="https://res.cloudinary.com/myyinvest/image/upload/v1614001037/mmyyinvest-2.0/images/co-invest_jbjr29.svg" width="700" height="700" class=" mt-n5" />
            </div>
          </div>
        </div>
      </section>

      <section style="margin-top: 250px; margin-left: -30px">
        <div class="container-fluid">
          <div class="row ">
            <div class="col-lg-5 col-md-12">
              <div style="position: relative;" class="  ">
                <img src="https://res.cloudinary.com/myyinvest/image/upload/v1614001034/mmyyinvest-2.0/images/co-own_deccup.svg" width="600" height="600" class=" mt-n5" />
              </div>
            </div>

            <div id="co_own" class="col-lg-6  col-md-10  ml-md-5 mt-md-4 mt-lg-0 ml-lg-5">
              <span class="d-flex flex-column text-align-right ">
                <!-- <h3>Co - Own</h3> -->
                <h3>Rental Plan</h3>
                <span class="header-underline ml-auto"></span>
              </span>
              <!-- <p id="co_own_text" class="w-100 mt-3 text-align-right co-own font-weight-normal font-poppins" style="line-height:40px">
                Earn short-term returns when you invest in our vetted fractional real estate’s project. We carry out proper due diligence and carefully vet every real estate project with our governing
                body, we regulate the process to ensure risks are mitigated to the bear minimum and project is safe for investment.
              </p> -->
              <p id="co_own_text" class="w-100 mt-3 text-align-right co-own font-weight-normal font-poppins" style="line-height:40px">
                Earn Rental Income at every <span class="text-main-red">4 months</span> interval for as long as <span class="text-main-red">10 - 15years</span>, when you Co-Own a property in this
                category. Properties available for Co-ownership are sought after in high Rental Yield areas. You can also choose to exit on Capital Appreciation through Peer - to - Peer transfer
                (Secondary Market).
              </p>

              <main-button @click="goToSingleListing('rental-plan')" class="float-right" type="filled" text="Invest Now" size="md" />
              <img
                id="co_own_circle"
                src="https://res.cloudinary.com/myyinvest/image/upload/v1614000931/mmyyinvest-2.0/svgs/light-circle_dzwdxm.svg"
                width="400"
                height="400"
                class=" position-relative d-md-none d-lg-block  "
                style="z-index: -1; margin-top: -100px;"
              />
              <img
                src="https://res.cloudinary.com/myyinvest/image/upload/v1614000931/mmyyinvest-2.0/svgs/light-circle_dzwdxm.svg"
                width="300"
                height="300"
                class="d-md-block d-lg-none "
                style="margin-top: -100px"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      <section style="margin-top: 150px;" class="ml-5">
        <div class="container-fluid">
          <div class="row ">
            <div class="col-lg-6  col-md-11  mr-5 d-lg-block d-md-none ">
              <span class="d-flex flex-column align-items-end  ">
                <!-- <h3>Smart Invest</h3> -->
                <h3>Secondary Market</h3>
                <span class="header-underline" style="margin-left: 150px;"></span>
              </span>
              <!-- <p id="smart_text" class="w-100 mt-3  text-align-right  font-weight-normal font-poppins" style="line-height:40px">
                Smart Invest is an Automated Investment Option that allows you to shape your finances the way you want and allow our technology handle the rest. You can start building your finances
                with a minimum of
                <span class="text-main-red">5000 Naira</span>
              </p> -->
              <p id="smart_text" class="w-100 mt-3  text-align-right  font-weight-normal font-poppins" style="line-height:40px">
                This is a marketplace where peer - to - peer transfer of ownership occurs, you can choose to exit your fractional ownership, by selling it off to another individual at the value
                (price) of the Capital Appreciation of your fractional property
              </p>

              <img
                src="https://res.cloudinary.com/myyinvest/image/upload/v1614000931/mmyyinvest-2.0/svgs/light-circle_dzwdxm.svg"
                width="400"
                height="400"
                class=" position-relative d-md-none d-lg-block  "
                style="z-index: -1; margin-top: -300px;margin-left: 200px"
              />

              <main-button type="filled" class="float-right" text="Coming Soon" size="md" disable />
            </div>

            <div class=" col-md-11 d-md-block d-lg-none   ">
              <span class="d-flex flex-column align-items-end  ">
                <h3>Smart Invest</h3>
                <span class="header-underline" style="margin-left: 150px;"></span>
              </span>
              <p class="w-100 mt-3  text-align-right  font-weight-normal font-poppins" style="line-height:40px">
                Smart Invest is an Automated Investment Option that allows you to shape your finances the way you want and allow our technology handle the rest. You can start building your finances
                with a minimum of
                <span class="text-main-red">5000 Naira</span>
              </p>
              <main-button type="filled" class="float-right mt-4" text="Learn More" size="md" />
            </div>

            <div style="position: relative; margin-top: -100px;" class="d-lg-block d-md-none col-lg-5  ">
              <img id="smart_invest" src="https://res.cloudinary.com/myyinvest/image/upload/v1614001034/mmyyinvest-2.0/images/smart-invest_yxzjgc.svg" width="600" height="600" class=" mt-n5" />
            </div>
            <div style="position: relative; margin-top: 80px" class="d-lg-none d-md-block col-md-12 ">
              <img src="https://res.cloudinary.com/myyinvest/image/upload/v1614001034/mmyyinvest-2.0/images/smart-invest_yxzjgc.svg" width="500" height="500" class=" mt-n5" />
            </div>
          </div>
        </div>
      </section>

      <section style="margin-top: 150px;" class="ml-5">
        <div class="border-left-red d-flex flex-column  " style="margin-top: -120px">
          <span class="text-main-red ">Benefits</span>
          <span>Why you should choose us</span>
        </div>
      </section>

      <section style="margin-top: 100px; position: relative" class="ml-5">
        <div class="container-fluid  ">
          <div class="row">
            <div class="col-lg-4 col-md-4" @mouseleave="removeClasses('access')">
              <div :class="benefitsArray.access">
                <div :class="benefitsArray.access[3]" @mouseover="appendClasses('access')">
                  <div class="d-flex flex-column">
                    <img style="width: 100%!important;" width="100" height="100" src="https://res.cloudinary.com/myyinvest/image/upload/v1614000930/mmyyinvest-2.0/svgs/benefits_1_fqwytu.svg" />
                    <p class="text-center mt-5 font-weight-bold">Access to Profitable Projects</p>
                    <p class="font-weight-light">By venturing into fractional Real Estate with us, your wealth can grow in ways your savings can’t dream of.</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-4" @mouseleave="removeClasses('returns')">
              <div :class="benefitsArray.returns">
                <div :class="benefitsArray.returns[3]" @mouseover="appendClasses('returns')">
                  <div class="d-flex flex-column align-items-start">
                    <img width="100" height="100" src="https://res.cloudinary.com/myyinvest/image/upload/v1614000928/mmyyinvest-2.0/svgs/benefit_2_s7lmrq.svg" />
                    <p class="text-center mt-5 font-weight-bold">Steady returns on investment</p>
                    <p class="font-weight-light">Investing through myyinvest guarantees secured returns and at a regular basis.</p>
                  </div>
                </div>
              </div>
              <img
                src="https://res.cloudinary.com/myyinvest/image/upload/v1614000928/mmyyinvest-2.0/svgs/lighte-red-circle_eqvn74.svg"
                width="300"
                height="300"
                class=" position-relative d-md-none d-lg-block  "
                style="z-index: -1; margin-top: -150px;margin-left: 150px"
              />
            </div>

            <div class="col-lg-4 col-md-4" @mouseleave="removeClasses('diversified')">
              <div :class="benefitsArray.diversified">
                <div :class="benefitsArray.diversified[3]" @mouseover="appendClasses('diversified')">
                  <div class="d-flex flex-column">
                    <img style="width: 100%!important;" width="100" height="100" src="https://res.cloudinary.com/myyinvest/image/upload/v1614000929/mmyyinvest-2.0/svgs/benefits_3_zder2i.svg" />
                    <p class="text-center mt-5 font-weight-bold">Diversified Portfolio</p>
                    <p class="font-weight-light">With myyinvest, you get access to exclusive fractional real estate properties across Africa which is monitored from your personalized dashboard.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          style="width: 100%!important;position:absolute;z-index: -1; top:20%!important;"
          src="https://res.cloudinary.com/myyinvest/image/upload/v1614000930/mmyyinvest-2.0/svgs/line-path_m9m288.svg"
        />
      </section>

      <section style="margin-top: 200px;" class="ml-5">
        <div class="border-left-red d-flex flex-column  " style="margin-top: -120px">
          <span class="text-main-red ">SAFETY AND SECURITY</span>
          <span>Why we are Reliable</span>
        </div>
      </section>

      <section style="margin-top: 100px; position: relative" class="ml-5">
        <div class="container-fluid  ">
          <div class="row">
            <div class="col-lg-4 col-md-4">
              <div class="card shadow-3" style="border-bottom: 5px solid red;  border-radius: 20px;">
                <div class="card-body">
                  <div class="d-flex flex-column align-items-middle">
                    <main-icon name="security-asset" size="retain" class="mx-auto" />
                    <p class="text-center mt-5 font-weight-bold">ASSET MANAGEMENT</p>
                    <p class="font-weight-light  text-center">
                      Assets are held in Trust by Quantum Zenith Trustees, a Trustee arm of Zenith Bank and an entity regulated by Securities and Exchange Commission, Nigeria (SEC). Assets and Legal
                      Documents are held by the Trustees.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-4 mt-5">
              <div class="card shadow-3" style="border-bottom: 5px solid red;  border-radius: 20px;">
                <div class="card-body">
                  <div class="d-flex flex-column align-items-middle">
                    <main-icon name="eye" size="retain" class="mx-auto" />
                    <p class="text-center mt-5 font-weight-bold">SECURE ENCRYPTION</p>
                    <p class="font-weight-light  text-center">
                      Assets are held in Trust by Quantum Zenith Trustees, a Trustee arm of Zenith Bank and an entity regulated by Securities and Exchange Commission, Nigeria (SEC). Assets and Legal
                      Documents are held by the Trustees.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-4">
              <div class="card shadow-3" style="border-bottom: 5px solid red;  border-radius: 20px;">
                <div class="card-body">
                  <div class="d-flex flex-column align-items-middle">
                    <main-icon name="shield" size="retain" class="mx-auto" />
                    <p class="text-center mt-5 font-weight-bold">BANK GRADE SECURITY</p>
                    <p class="font-weight-light  text-center">
                      Assets are held in Trust by Quantum Zenith Trustees, a Trustee arm of Zenith Bank and an entity regulated by Securities and Exchange Commission, Nigeria (SEC). Assets and Legal
                      Documents are held by the Trustees.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style="margin-top: 200px;" class="ml-5">
        <div class="border-left-red d-flex flex-column  " style="margin-top: -120px">
          <!-- <span class="text-main-red ">OUR PARTNERS</span>
          <span>Collaborators</span> -->
          <span class="text-main-red ">IN THE PRESS</span>
          <span>Where we have been</span>
        </div>
        <!-- <p class="font-weight-light mt-2">We vet, Manage and Secure our investment opportunities alongside with;</p> -->
      </section>

      <section class="ml-5">
        <div class="container-fluid">
          <carousel :autoplay="false" :nav="false" :items="1">
            <div class="d-flex flex-row align-items-center justify-content-center">
              <div class="mr-5 partner-img">
                <img width="200" height="200" class="mx-auto d-lg-none d-md-block" src="https://res.cloudinary.com/myyinvest/image/upload/v1621069164/landing/Lagos_Innovate_f0y83m.png" />
                <img width="300" height="200" class="mx-auto d-lg-block d-md-none" src="https://res.cloudinary.com/myyinvest/image/upload/v1621069164/landing/Lagos_Innovate_f0y83m.png" />
              </div>
              <div class="mr-5 partner-img partner-img--lg">
                <img width="200" height="200" class="mx-auto d-lg-none d-md-block" src="https://res.cloudinary.com/myyinvest/image/upload/v1621069165/landing/Fintech_Nigeria_glu7sm.png" />
                <img width="300" height="200" class="mx-auto d-lg-block d-md-none" src="https://res.cloudinary.com/myyinvest/image/upload/v1621069165/landing/Fintech_Nigeria_glu7sm.png" />
              </div>
              <div class="mr-5 partner-img">
                <img width="200" height="200" class="mx-auto d-lg-none d-md-block" src="https://res.cloudinary.com/myyinvest/image/upload/v1621069164/landing/Pertinence_h4kr10.jpg" />
                <img width="300" height="200" class="mx-auto d-lg-block d-md-none" src="https://res.cloudinary.com/myyinvest/image/upload/v1621069164/landing/Pertinence_h4kr10.jpg" />
              </div>
            </div>
            <div class="d-flex flex-row align-items-center justify-content-center">
              <div class="mr-5 partner-img">
                <img width="200" height="200" class="mx-auto d-lg-none d-md-block" src="https://res.cloudinary.com/myyinvest/image/upload/v1621069164/landing/Lagos_Innovate_f0y83m.png" />
                <img width="300" height="200" class="mx-auto d-lg-block d-md-none" src="https://res.cloudinary.com/myyinvest/image/upload/v1621069164/landing/Lagos_Innovate_f0y83m.png" />
              </div>
              <div class="mr-5 partner-img partner-img--lg">
                <img width="200" height="200" class="d-lg-none d-md-block" src="https://res.cloudinary.com/myyinvest/image/upload/v1621069165/landing/Africa-FinTech-Foundry-1_q2usmj.png" />
                <img width="300" height="200" class="d-lg-block d-md-none h-100" src="https://res.cloudinary.com/myyinvest/image/upload/v1621069165/landing/Africa-FinTech-Foundry-1_q2usmj.png" />
              </div>
              <div class="mr-5 partner-img">
                <img width="200" height="200" class="mx-auto d-lg-none d-md-block" src="https://res.cloudinary.com/myyinvest/image/upload/v1621069164/landing/NDES_eipp1c.png" />
                <img width="300" height="200" class="mx-auto d-lg-block d-md-none h-100" src="https://res.cloudinary.com/myyinvest/image/upload/v1621069164/landing/NDES_eipp1c.png" />
              </div>
            </div>
            <!-- <div class="d-flex flex-row align-items-center justify-content-center " v-for="i in 2" :key="i">
              <div class="mr-5 partner-img riby ">
                <img width="200" height="200" class="mx-auto d-lg-none d-md-block" src="https://res.cloudinary.com/myyinvest/image/upload/v1614001126/mmyyinvest-2.0/partners/riby_csqijz.svg" />
                <img width="300" height="200" class="mx-auto d-lg-block d-md-none" src="https://res.cloudinary.com/myyinvest/image/upload/v1614001126/mmyyinvest-2.0/partners/riby_csqijz.svg" />
              </div>
              <div class="mr-5 partner-img riby">
                <img width="200" height="200" class="mx-auto d-lg-none d-md-block" src="https://res.cloudinary.com/myyinvest/image/upload/v1614001126/mmyyinvest-2.0/partners/quantum_bxuwmd.svg" />
                <img width="300" height="200" class="mx-auto d-lg-block d-md-none" src="https://res.cloudinary.com/myyinvest/image/upload/v1614001126/mmyyinvest-2.0/partners/quantum_bxuwmd.svg" />
              </div>
              <div class="mr-5 partner-img riby">
                <img width="200" height="200" class="mx-auto d-lg-none d-md-block" src="https://res.cloudinary.com/myyinvest/image/upload/v1614001126/mmyyinvest-2.0/partners/leadway_rha16c.svg" />
                <img width="300" height="200" class="mx-auto d-lg-block d-md-none" src="https://res.cloudinary.com/myyinvest/image/upload/v1614001126/mmyyinvest-2.0/partners/leadway_rha16c.svg" />
              </div>
            </div> -->
          </carousel>
        </div>
      </section>

      <section style="margin-top: 200px;" class="ml-5">
        <div class="border-left-red d-flex flex-column  " style="margin-top: -120px">
          <span class="text-main-red ">TESTIMONIES</span>
          <span>What Our Clients Say</span>
        </div>
        <p class="font-weight-light mt-2">We cherish this kind words from our investors and we are glad to be part on this journey with them.</p>

        <div class="p-5 m-5 ">
          <carousel :autoplay="true" :nav="false" :centre="true" :items="1">
            <!-- <div class="testimonial d-flex" style="color: #7B7E80!important;" v-for="i in 2" :key="i">
              <div class="image" style="background-image: url('https://res.cloudinary.com/dwpu7jpku/image/upload/v1612182133/mojeed_Babatunde_xhnb61.jpg')"></div>
              <div class="comment px-4 py-3">
                <blockquote class="mb-0">
                  <p class="position-relative">
                    <sup class="quot font-weight-bold">“</sup> Myyinvest has helped me invest funds that i could have spent on various unimportant things. But here, i still have my money and
                    additional interests on returns. One of the smartest moves i’ve made so far.
                    <span class="text-danger"> Blessing Ogarahdukun</span>
                  </p>
                </blockquote>
              </div>
            </div> -->
            <div class="testimonial d-flex" style="color: #7B7E80!important;" v-for="(testimonial, index) in testimonials" :key="index">
              <div class="comment px-4 py-3 mx-auto">
                <blockquote class="mb-0 lnd-quote">
                  <p class="position-relative">
                    {{ testimonial.quote }}
                  </p>
                </blockquote>
                <span class="text-danger">{{ testimonial.person }}</span>
                <span class="d-block">{{ testimonial.position }}</span>
              </div>
            </div>
          </carousel>
        </div>
      </section>
    </main>

    <main class="d-lg-none d-md-none d-block">
      <section>
        <div class="container-fluid">
          <div class="row p-3">
            <div class="">
              <div class="d-flex flex-column position-relative w-100 " style="top:40%!important">
                <h3 class="text-main-red mb-1 w-100  font-weight-bold text-bold">Build your Net worth</h3>
                <p class="text-main-red ">
                  <span class="text_1">Through Fractional Real Estate Investment</span>
                  <span class="text_2">From anywhere across Africa</span>
                </p>

                <div class="d-flex flex-row">
                  <main-button @click="goToLogin" style="border-radius:30px!important; font-size:10px!important" text="GET STARTED" size="sm" class="mr-3  shadow-3" />
                  <main-button style="border-radius:30px!important; font-size:10px!important" type="outline" text="WATCH NOW &#160; &#160; &#x25B6;" size="sm" class="shadow-3" />
                </div>
              </div>
              <img style="width:100%;position: absolute;left:-20%;top:5%; z-index: -1;" src="https://res.cloudinary.com/myyinvest/image/upload/v1614000932/mmyyinvest-2.0/svgs/incoming_p86skz.png" />
            </div>

            <div class="col-12" style="margin-top:220px">
              <img style="width: 100%; position: relative; z-index: -1" src="https://res.cloudinary.com/myyinvest/image/upload/v1614000931/mmyyinvest-2.0/svgs/map_ktif6c.png" />

              <span>
                <people class="position-absolute top-0 mt-2  " flag-position="right" style="left: 0%;" size="xl-2" />
              </span>

              <span>
                <people class="position-absolute top-30  " flag-position="right" style="left: 70%;" size="lg-1" />
              </span>

              <span>
                <people class="position-absolute  mt-2" style="left:48%; top:40%;" size="lg-2" />
              </span>

              <span>
                <people class="position-absolute  " flag-position="right" style="left: 50%; top:74%" size="xl" />
              </span>
            </div>
          </div>
        </div>
      </section>

      <section class="" style="margin-top: 100px">
        <div class="container-fluid">
          <div class="d-flex flex-column">
            <!-- <img src="https://res.cloudinary.com/myyinvest/image/upload/v1614000931/mmyyinvest-2.0/svgs/light-circle_dzwdxm.svg" width="200" height="200" class="  position-relative d-md-none d-lg-block  mt-n5" style="z-index: -1" /> -->
            <!-- <img src="https://res.cloudinary.com/myyinvest/image/upload/v1614000931/mmyyinvest-2.0/svgs/light-circle_dzwdxm.svg" width="200" height="200" class="d-md-block d-lg-none " style="margin-top: 100px" alt="" /> -->
            <div class="border-left-red d-flex flex-column  ">
              <span class="text-main-red ">INVESTMENTS</span>
              <span>Our Investment Options</span>
            </div>
          </div>
        </div>
      </section>

      <section style="margin-top: 50px;">
        <div class="container-fluid">
          <div class="row ">
            <div class="col-12">
              <span class="d-flex flex-column ">
                <!-- <h5>Co - Invest</h5> -->
                <h5>Income Plan</h5>
                <span class="header-underline" style="margin-left: 100px;"></span>
              </span>
              <!-- <p class="w-100 mt-3  font-weight-light font-poppins" style="line-height:30px">
                Earn short-term returns when you invest in our vetted fractional real estate’s project. We carry out proper due diligence and carefully vet every real estate project with our governing
                body, we regulate the process to ensure risks are mitigated to the bear minimum and project is safe for investment.
              </p> -->
              <p class="w-100 mt-3  font-weight-light font-poppins" style="line-height:30px">
                Earn short term returns within <span class="text-main-red">6 - 12months</span>, when you invest in a vetted Fractional Real Estate project. We carry out proper due diligence and
                carefully vet every Real Estate project provided by Reputable Property development companies, we regulate the process to ensure risks are mitigated to the bare minimum and projects are
                safe for investment.
              </p>

              <main-button @click="goToSingleListing('income-plan')" type="filled" text="Invest Now" size="md" class="mt-4" />
            </div>

            <div class="col-12  mt-4">
              <img src="https://res.cloudinary.com/myyinvest/image/upload/v1614001037/mmyyinvest-2.0/images/co-invest_jbjr29.svg" width="300" height="300" />
            </div>
          </div>
        </div>
      </section>

      <section style="margin-top: 50px;">
        <div class="container-fluid">
          <div class="row ">
            <div class="col-12">
              <span class="d-flex flex-column text-align-right ">
                <!-- <h5>Co - Own</h5> -->
                <h5>Rental Plan</h5>
                <span class="header-underline ml-auto"></span>
              </span>
              <!-- <p class="w-100 mt-3 text-align-right co-own font-weight-light font-poppins" style="line-height:30px">
                Earn short-term returns when you invest in our vetted fractional real estate’s project. We carry out proper due diligence and carefully vet every real estate project with our governing
                body, we regulate the process to ensure risks are mitigated to the bear minimum and project is safe for investment.
              </p> -->
              <p class="w-100 mt-3 text-align-right co-own font-weight-light font-poppins" style="line-height:30px">
                Earn Rental Income at every <span class="text-main-red">4 months</span> interval for as long as <span class="text-main-red">10 - 15years</span>, when you Co-Own a property in this
                category. Properties available for Co-ownership are sought after in high Rental Yield areas. You can also choose to exit on Capital Appreciation through Peer - to - Peer transfer
                (Secondary Market).
              </p>

              <main-button @click="goToSingleListing('rental-plan')" class="float-right" type="filled" text="Invest Now" size="md" />
            </div>

            <div class="col-12">
              <div class="  ">
                <img src="https://res.cloudinary.com/myyinvest/image/upload/v1614001034/mmyyinvest-2.0/images/co-own_deccup.svg" width="300" height="300" class=" mt-5" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style="margin-top: 50px;">
        <div class="container-fluid">
          <div class="row ">
            <div class="col-12   d-lg-block d-md-none ">
              <span class="d-flex flex-column align-items-start  ">
                <!-- <h5>Smart Invest</h5> -->
                <h5>Secondary Market</h5>
                <span class="header-underline" style="margin-left: 150px;"></span>
              </span>
              <!-- <p id="smart_text" class="w-100 mt-3  text-align-left  font-weight-light font-poppins" style="line-height:30px">
                Smart Invest is an Automated Investment Option that allows you to shape your finances the way you want and allow our technology handle the rest. You can start building your finances
                with a minimum of
                <span class="text-main-red">5000 Naira</span>
              </p> -->
              <p id="smart_text" class="w-100 mt-3  text-align-left  font-weight-normal font-poppins" style="line-height:30px">
                This is a marketplace where peer - to - peer transfer of ownership occurs, you can choose to exit your fractional ownership, by selling it off to another individual at the value
                (price) of the Capital Appreciation of your fractional property
              </p>

              <main-button type="filled" class="float-left mt-2" text="Coming Soon" size="md" disable />
            </div>
            <div style="position: relative; margin-top: 80px" class=" col-md-12 ">
              <img src="https://res.cloudinary.com/myyinvest/image/upload/v1614001034/mmyyinvest-2.0/images/smart-invest_yxzjgc.svg" width="300" height="300" class=" mt-n5" />
            </div>
          </div>
        </div>
      </section>

      <section class="" style="margin-top: 100px">
        <div class="container-fluid">
          <div class="d-flex flex-column">
            <!-- <img src="https://res.cloudinary.com/myyinvest/image/upload/v1614000931/mmyyinvest-2.0/svgs/light-circle_dzwdxm.svg" width="200" height="200" class="  position-relative d-md-none d-lg-block  mt-n5" style="z-index: -1" /> -->
            <!-- <img src="https://res.cloudinary.com/myyinvest/image/upload/v1614000931/mmyyinvest-2.0/svgs/light-circle_dzwdxm.svg" width="200" height="200" class="d-md-block d-lg-none " style="margin-top: 100px" alt="" /> -->
            <div class="border-left-red d-flex flex-column  ">
              <span class="text-main-red ">Benefits</span>
              <span>Why you should choose us</span>
            </div>
          </div>
        </div>
      </section>

      <section style="margin-top: 100px;">
        <div class="container-fluid  ">
          <div class="row m-2">
            <div class="col-12" @mouseleave="removeClasses('access')">
              <div :class="benefitsArray.access">
                <div :class="benefitsArray.access[3]" @mouseover="appendClasses('access')">
                  <div class="d-flex flex-column  align-items-start">
                    <img width="100" height="100" src="https://res.cloudinary.com/myyinvest/image/upload/v1614000930/mmyyinvest-2.0/svgs/benefits_1_fqwytu.svg" />
                    <p class="text-left mt-5 font-weight-bold">Access to Profitable Projects</p>
                    <p class="font-weight-light">By venturing into fractional Real Estate with us, your wealth can grow in ways your savings can’t dream of.</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12" @mouseleave="removeClasses('returns')">
              <div :class="benefitsArray.returns">
                <div :class="benefitsArray.returns[3]" @mouseover="appendClasses('returns')">
                  <div class="d-flex flex-column align-items-start">
                    <img width="100" height="100" src="https://res.cloudinary.com/myyinvest/image/upload/v1614000928/mmyyinvest-2.0/svgs/benefit_2_s7lmrq.svg" />
                    <p class="text-center mt-5 font-weight-bold">Steady returns on investment</p>
                    <p class="font-weight-light">Investing through myyinvest guarantees secured returns and at a regular basis.</p>
                  </div>
                </div>
              </div>
              <img
                src="https://res.cloudinary.com/myyinvest/image/upload/v1614000928/mmyyinvest-2.0/svgs/lighte-red-circle_eqvn74.svg"
                width="150"
                height="150"
                class=" position-relative   "
                style="z-index: -1; margin-top: -100px;margin-left: 180px"
              />
            </div>

            <div class="col-12" @mouseleave="removeClasses('diversified')">
              <div :class="benefitsArray.diversified">
                <div :class="benefitsArray.diversified[3]" @mouseover="appendClasses('diversified')">
                  <div class="d-flex flex-column align-items-star">
                    <img width="100" height="100" src="https://res.cloudinary.com/myyinvest/image/upload/v1614000929/mmyyinvest-2.0/svgs/benefits_3_zder2i.svg" />
                    <p class="text-left mt-5 font-weight-bold">Diversified Portfolio</p>
                    <p class="font-weight-light">With myyinvest, you get access to exclusive fractional real estate properties across Africa which is monitored from your personalized dashboard.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="" style="margin-top: 100px">
        <div class="container-fluid">
          <div class="d-flex flex-column">
            <!-- <img src="https://res.cloudinary.com/myyinvest/image/upload/v1614000931/mmyyinvest-2.0/svgs/light-circle_dzwdxm.svg" width="200" height="200" class="  position-relative d-md-none d-lg-block  mt-n5" style="z-index: -1" /> -->
            <!-- <img src="https://res.cloudinary.com/myyinvest/image/upload/v1614000931/mmyyinvest-2.0/svgs/light-circle_dzwdxm.svg" width="200" height="200" class="d-md-block d-lg-none " style="margin-top: 100px" alt="" /> -->
            <div class="border-left-red d-flex flex-column  ">
              <span class="text-main-red ">SAFETY AND SECURITY</span>
              <span>Why we are Reliable</span>
            </div>
          </div>
        </div>
      </section>

      <section style="margin-top: 50px">
        <div class="container-fluid  ">
          <div class="row">
            <div class="col-12">
              <div class="card shadow-3" style="border-bottom: 5px solid red;  border-radius: 20px;">
                <div class="card-body">
                  <div class="d-flex flex-column align-items-middle">
                    <main-icon name="security-asset" size="retain" class="mx-auto" />
                    <p class="text-center mt-5 font-weight-bold">ASSET MANAGEMENT</p>
                    <p class="font-weight-light  text-center">
                      Assets are held in Trust by Quantum Zenith Trustees, a Trustee arm of Zenith Bank and an entity regulated by Securities and Exchange Commission, Nigeria (SEC). Assets and Legal
                      Documents are held by the Trustees.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 mt-5">
              <div class="card shadow-3" style="border-bottom: 5px solid red;  border-radius: 20px;">
                <div class="card-body">
                  <div class="d-flex flex-column align-items-middle">
                    <main-icon name="eye" size="retain" class="mx-auto" />
                    <p class="text-center mt-5 font-weight-bold">SECURE ENCRYPTION</p>
                    <p class="font-weight-light  text-center">
                      Assets are held in Trust by Quantum Zenith Trustees, a Trustee arm of Zenith Bank and an entity regulated by Securities and Exchange Commission, Nigeria (SEC). Assets and Legal
                      Documents are held by the Trustees.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 mt-5">
              <div class="card shadow-3" style="border-bottom: 5px solid red;  border-radius: 20px;">
                <div class="card-body">
                  <div class="d-flex flex-column align-items-middle">
                    <main-icon name="shield" size="retain" class="mx-auto" />
                    <p class="text-center mt-5 font-weight-bold">BANK GRADE SECURITY</p>
                    <p class="font-weight-light  text-center">
                      Assets are held in Trust by Quantum Zenith Trustees, a Trustee arm of Zenith Bank and an entity regulated by Securities and Exchange Commission, Nigeria (SEC). Assets and Legal
                      Documents are held by the Trustees.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="" style="margin-top: 100px">
        <div class="container-fluid">
          <div class="d-flex flex-column">
            <!-- <img src="https://res.cloudinary.com/myyinvest/image/upload/v1614000931/mmyyinvest-2.0/svgs/light-circle_dzwdxm.svg" width="200" height="200" class="  position-relative d-md-none d-lg-block  mt-n5" style="z-index: -1" /> -->
            <!-- <img src="https://res.cloudinary.com/myyinvest/image/upload/v1614000931/mmyyinvest-2.0/svgs/light-circle_dzwdxm.svg" width="200" height="200" class="d-md-block d-lg-none " style="margin-top: 100px" alt="" /> -->
            <div class="border-left-red d-flex flex-column  ">
              <!-- <span class="text-main-red ">OUR PARTNERS</span>
              <span>Collaborators</span> -->
              <span class="text-main-red ">IN THE PRESS</span>
              <span>Where we have been.</span>
            </div>
          </div>
          <!-- <p class="font-weight-light mt-2 w-100">We cherish this kind words from our investors and we are glad to be part on this journey with them.</p> -->
        </div>
      </section>

      <section class="ml-0">
        <div class="container-fluid">
          <carousel :autoplay="false" :nav="false" :items="1">
            <div class="partner-img">
              <img width="200" height="200" class="d-lg-none" src="https://res.cloudinary.com/myyinvest/image/upload/v1621069164/landing/Lagos_Innovate_f0y83m.png" />
            </div>
            <div class="partner-img">
              <img width="200" height="200" class="d-lg-none" src="https://res.cloudinary.com/myyinvest/image/upload/v1621069165/landing/Fintech_Nigeria_glu7sm.png" />
            </div>
            <div class="partner-img">
              <img width="200" height="200" class="d-lg-none" src="https://res.cloudinary.com/myyinvest/image/upload/v1621069164/landing/Pertinence_h4kr10.jpg" />
            </div>
            <div class="partner-img">
              <img width="200" height="200" class="d-lg-none" src="https://res.cloudinary.com/myyinvest/image/upload/v1621069165/landing/Africa-FinTech-Foundry-1_q2usmj.png" />
            </div>
            <div class="partner-img">
              <img width="200" height="200" class="d-lg-none" src="https://res.cloudinary.com/myyinvest/image/upload/v1621069164/landing/NDES_eipp1c.png" />
            </div>
            <!-- <div class="d-flex flex-row align-items-center partner-img riby justify-content-center ">
              <img width="200" height="200" class="mx-auto" src="https://res.cloudinary.com/myyinvest/image/upload/v1614001126/mmyyinvest-2.0/partners/riby_csqijz.svg" />
            </div>
            <div class="d-flex flex-row  partner-img riby align-items-center justify-content-center ">
              <img width="200" height="200" class="mx-auto" src="https://res.cloudinary.com/myyinvest/image/upload/v1614001126/mmyyinvest-2.0/partners/quantum_bxuwmd.svg" />
            </div>
            <div class="d-flex flex-row align-items-center partner-img riby justify-content-center ">
              <img width="200" height="200" class="mx-auto " src="https://res.cloudinary.com/myyinvest/image/upload/v1614001126/mmyyinvest-2.0/partners/leadway_rha16c.svg" />
            </div> -->
          </carousel>
        </div>
      </section>

      <section class="" style="margin-top: 100px">
        <div class="container-fluid">
          <div class="d-flex flex-column">
            <!-- <img src="https://res.cloudinary.com/myyinvest/image/upload/v1614000931/mmyyinvest-2.0/svgs/light-circle_dzwdxm.svg" width="200" height="200" class="  position-relative d-md-none d-lg-block  mt-n5" style="z-index: -1" /> -->
            <!-- <img src="https://res.cloudinary.com/myyinvest/image/upload/v1614000931/mmyyinvest-2.0/svgs/light-circle_dzwdxm.svg" width="200" height="200" class="d-md-block d-lg-none " style="margin-top: 100px" alt="" /> -->
            <div class="border-left-red d-flex flex-column  ">
              <span class="text-main-red ">TESTIMONIES</span>
              <span>What Our Clients Say</span>
            </div>
          </div>
          <p class="font-weight-light mt-2 w-100">We cherish this kind words from our investors and we are glad to be part on this journey with them.</p>
        </div>

        <div class=" m-3 ">
          <carousel :autoplay="true" :nav="false" :centre="true" :items="1">
            <!-- <div class="testimonial d-flex w-100" v-for="i in 3" :key="i" style="color: #7B7E80!important;">
              <div class="comment px-4 py-3">
                <blockquote class="mb-0">
                  <p class="position-relative">
                    <sup class="quot font-weight-bold">“</sup> Myyinvest has helped me invest funds that i could have spent on various unimportant things. But here, i still have my money and
                    additional interests on returns. One of the smartest moves i’ve made so far.
                    <span class="text-danger"> Blessing Ogarahdukun</span>
                  </p>
                </blockquote>
              </div>
            </div> -->
            <div class="testimonial d-flex" style="color: #7B7E80!important;" v-for="(testimonial, index) in testimonials" :key="index">
              <div class="comment px-4 py-3 mx-auto">
                <blockquote class="lnd-quote">
                  <p class="position-relative">
                    {{ testimonial.quote }}
                  </p>
                </blockquote>
                <span class="text-danger">{{ testimonial.person }}</span>
                <span class="d-block">{{ testimonial.position }}</span>
              </div>
            </div>
          </carousel>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import MainButton from "../../components/form/MainButton";
import People from "../../components/Shared/people";
import carousel from "vue-owl-carousel2";
import MainIcon from "../../components/Shared/mainIcon";
import testimonials from "@/components/data/testimonials.js";

export default {
  name: "Landing",
  components: { MainIcon, People, MainButton, carousel },
  data() {
    return {
      isModalVisible: false,
      benefitsArray: {
        diversified: [],
        show: true,
        access: [],
        returns: []
      },
      landingList: ["Through Fractional Real Estate Investment", "From anywhere across Africa"],
      currentList: 0,
      testimonials: []
    };
  },
  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
    appendClasses(benefitType) {
      if (this.benefitsArray[benefitType].length > 1) {
        return;
      }
      this.benefitsArray[benefitType].push(["card ", "shadow-3 ", "mb-4 mb-lg-0 mb-md-0", "custom-card", "card-body"]);
    },
    removeClasses(benefitType) {
      this.benefitsArray[benefitType] = [];
    },
    goToLogin() {
      this.$router.push({ name: "login" });
    },
    goToSingleListing(slug) {
      this.$router.push({ name: "single-listing", params: { slug } });
    }
  },
  created() {
    this.testimonials = testimonials;
  },
  mounted() {
    setInterval(() => {
      this.currentList = this.currentList + 1;
    }, 3000);
  }
};
</script>

<style scoped lang="scss">
// * {
// background-color: red!important;
// }
.partner-img {
  flex: 1;
  display: flex;
  align-items: center;
  height: 18.5em;

  @media screen and (min-width: 1920px) {
    height: 23.5em;
  }

  @media screen and (min-width: 640px) and (max-width: 1240px) {
    height: 15em;
  }

  &--lg {
    flex: 1.25;
  }

  > img {
    width: 100%;
    height: auto;
  }
}

@media only screen and (min-width: 640px) and (max-width: 1240px) {
  #co_invest {
    width: 400px !important;
  }

  #co_own_text {
    width: 70% !important;
    margin-left: 30% !important;
  }
  #co_own_circle {
    margin-top: -200px !important;
  }

  #smart_invest {
    width: 400px !important;
  }
}

p {
  font-size: 17px !important;
}

/*** Content ***/

.custom-card {
  border-color: white !important;
  border-radius: 20px !important;
  &:hover {
    transition: all 500ms ease;
    border: none !important;
  }
}

/*#slider ul:hover {*/
/*  -moz-animation-play-state: paused;*/
/*  -webkit-animation-play-state: paused;*/
/*}*/

#demo {
  overflow: hidden;
}
.text_1 {
  animation: text1;
}
.text_2 {
  animation: text2;
}
.text_1,
.text_2 {
  overflow: hidden;
  white-space: nowrap;
  display: inline-block;
  position: relative;
  animation-duration: 20s;
  animation-timing-function: steps(25, end);
  animation-iteration-count: infinite;

  @include breakpoint(tablet-landscape-down) {
    font-size: 0.9em;
  }
}
.text_1::after,
.text_2::after {
  content: "|";
  position: absolute;
  right: 0;
  animation: caret infinite;
  animation-duration: 1s;
  animation-timing-function: steps(1, end);
}
@keyframes text2 {
  0%,
  50%,
  100% {
    width: 0;
  }
  60%,
  90% {
    // width: 23.4em;
    width: 15.125em;
  }
}
@keyframes text1 {
  0%,
  50%,
  100% {
    width: 0;
  }
  10%,
  40% {
    width: 21.75em;
  }
}
@keyframes caret {
  0%,
  100% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
}

.lnd-quote {
  display: flex;
  quotes: "“" "”" "‘" "’";
  margin-bottom: 1em !important;

  &::before {
    content: open-quote;
  }

  &::after {
    content: close-quote;
  }

  &::before,
  &::after {
    // border: 1px solid green;
    color: color(main-red);
    font-size: 2em !important;
  }

  > p {
    // border: 1px solid green;
    padding: 0.75em 0.5em;
  }
}
</style>
