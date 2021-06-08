<template>
  <div>
    <main class=" faq-header mt-5" style="height: 100%!important;">
      <div class="row">
        <div class="col-md-6 mb-4">
          <h3 class="text-main-red" style="margin-top: 100px!important;">FREQUENTLY ASKED QUESTIONS</h3>
          <p>Here are answers to some of your most pressing questions and concerns</p>
        </div>
        <div class="col-md-6 f-h-img">
          <img width="350" height="350" src="@/assets/images/faq.svg" alt="" />
        </div>
      </div>
      <div class="input-box">
        <input type="text" class="form-control" placeholder="Search for a question..." />
      </div>
      <div class="row">
        <div class="col-md-12 faq-tabs">
          <div class="tabs">
            <input type="radio" id="tab1" name="tab-control" checked />
            <input type="radio" id="tab2" name="tab-control" />
            <input type="radio" id="tab3" name="tab-control" />
            <input type="radio" id="tab4" name="tab-control" />
            <ul>
              <li title="General">
                <label for="tab1" role="button"><i class="fa fa-list"></i><br /><span>GENERAL</span></label>
              </li>
              <li title="Delivery Contents">
                <label for="tab2" role="button"><i class="fa fa-money"></i><br /><span>INVESTMENTS</span></label>
              </li>
              <li title="Shipping">
                <label for="tab3" role="button"><i class="fa fa-credit-card-alt"></i><br /><span>PAYMENTS</span></label>
              </li>
              <li title="Returns">
                <label for="tab4" role="button"><i class="fa fa-shield"></i><br /><span>SAFETY AND SECURITY</span></label>
              </li>
            </ul>
            <div class="slider">
              <div class="indicator"></div>
            </div>

            <div class="content">
              <section>
                <div class="p-lg-5 container-fluid m-lg-5">
                  <div class="accordion " id="accordionExample">
                    <div class="card ">
                      <div class="card-header  " id="headingOne">
                        <h3 class="clearfix mb-0">
                          <a class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"
                            ><i class="fa fa-chevron-circle-down"></i>What is MYYINVEST?</a
                          >
                        </h3>
                      </div>
                      <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                        <div class="card-body">Myyinvest is a property technology platform that provides access to fractional Real Estate Investments in properties across Africa.</div>
                      </div>
                    </div>
                    <div class="card">
                      <div class="card-header" id="headingTwo">
                        <h3 class="mb-0">
                          <a class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"
                            ><i class="fa fa-chevron-circle-down"></i> What am i actually investing in?</a
                          >
                        </h3>
                      </div>
                      <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                        <div class="card-body">
                          You’re investing in a Real Estate Property, which is carefully analyzed and securely backed by the Trustees. Your Investments could range from Acqusitions to Construction to
                          Reconstruction of a Real Estate Property.
                        </div>
                      </div>
                    </div>
                    <div class="card">
                      <div class="card-header" id="headingThree">
                        <h3 class="mb-0">
                          <a class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree"
                            ><i class="fa fa-chevron-circle-down"></i> Who can invest through MYYINVEST?</a
                          >
                        </h3>
                      </div>
                      <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                        <div class="card-body">Any individual can invest through Myyinvest provided, the individual is above 18 and can prove it with a Valid Identification Card (ID).</div>
                      </div>
                    </div>
                    <div class="card">
                      <div class="card-header" id="headingFour">
                        <h3 class="mb-0">
                          <a class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour"
                            ><i class="fa fa-chevron-circle-down"></i> What is a Valid ID?</a
                          >
                        </h3>
                      </div>
                      <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#accordionExample">
                        <div class="card-body">National ID, International Passport, Driver’s License and Voter’s Card.</div>
                      </div>
                    </div>
                    <div class="card">
                      <div class="card-header" id="headingFive">
                        <h3 class="mb-0">
                          <a class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive"
                            ><i class="fa fa-chevron-circle-down"></i> I am not a Nigerian, can i still invest through MYYINVEST?</a
                          >
                        </h3>
                      </div>
                      <div id="collapseFive" class="collapse" aria-labelledby="headingFive" data-parent="#accordionExample">
                        <div class="card-body">Unfortunately, not. We are currently working on it.</div>
                      </div>
                    </div>
                    <div class="card">
                      <div class="card-header" id="headingSix">
                        <h3 class="mb-0">
                          <a class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix"
                            ><i class="fa fa-chevron-circle-down"></i> How do i set up my account?</a
                          >
                        </h3>
                      </div>
                      <div id="collapseSix" class="collapse" aria-labelledby="headingSix" data-parent="#accordionExample">
                        <div class="card-body">Click on sign up, provide all necessary information and follow the instructions.</div>
                      </div>
                    </div>
                    <div class="card">
                      <div class="card-header" id="headingSeven">
                        <h3 class="mb-0">
                          <a class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven"
                            ><i class="fa fa-chevron-circle-down"></i>
                            Are there any fees involved with setting up an account?
                          </a>
                        </h3>
                      </div>
                      <div id="collapseSeven" class="collapse" aria-labelledby="headingSeven" data-parent="#accordionExample">
                        <div class="card-body">Setting up a Myyinvest Account is absolutely FREE.</div>
                      </div>
                    </div>
                    <div class="card">
                      <div class="card-header" id="headingEight">
                        <h3 class="mb-0">
                          <a class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight"
                            ><i class="fa fa-chevron-circle-down"></i>
                            Facing login issues?
                          </a>
                        </h3>
                      </div>
                      <div id="collapseEight" class="collapse" aria-labelledby="headingEight" data-parent="#accordionExample">
                        <div class="card-body">
                          Check you are inputting the right login in details. If this error occurs again, kindly reset your password or send an email help@myyinvest.com or call any of our phone lines.
                        </div>
                      </div>
                    </div>
                    <div class="card">
                      <div class="card-header" id="headingNine">
                        <h3 class="mb-0">
                          <a class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine"
                            ><i class="fa fa-chevron-circle-down"></i>
                            What does token mean?
                          </a>
                        </h3>
                      </div>
                      <div id="collapseNine" class="collapse" aria-labelledby="headingNine" data-parent="#accordionExample">
                        <div class="card-body">A Token is a Fraction of a Particular Real Estate Property that gives you the Right to Benefit from what the Property Provides.</div>
                      </div>
                    </div>
                    <div class="card">
                      <div class="card-header" id="headingTen">
                        <h3 class="mb-0">
                          <a class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTen" aria-expanded="false" aria-controls="collapseTen"
                            ><i class="fa fa-chevron-circle-down"></i>
                            What are the benefits?
                          </a>
                        </h3>
                      </div>
                      <div id="collapseTen" class="collapse" aria-labelledby="headingTen" data-parent="#accordionExample">
                        <div class="card-body">The Benefits of Investing in a Real Estate Property could be Rental Income or Capital Appreciation or Both.</div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section>
                <div class="p-lg-5 container-fluid m-lg-5">
                  <div class="accordion" id="accordionExample">
                    <div class="card">
                      <div class="card-header" id="headingOne1">
                        <h3 class="clearfix mb-0">
                          <a class="btn btn-link" data-toggle="collapse" data-target="#collapseOne1" aria-expanded="true" aria-controls="collapseOne1"
                            ><i class="fa fa-chevron-circle-down"></i>How do i get notifications of latest investment options?</a
                          >
                        </h3>
                      </div>
                      <div id="collapseOne1" class="collapse show" aria-labelledby="headingOne1" data-parent="#accordionExample">
                        <div class="card-body">Investors get notified about latest investment options through their notification in the dashboard or by subscribing to our newsletter.</div>
                      </div>
                    </div>
                    <div class="card">
                      <div class="card-header" id="headingTwo1">
                        <h3 class="mb-0">
                          <a class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo1" aria-expanded="false" aria-controls="collapseTwo1"
                            ><i class="fa fa-chevron-circle-down"></i> How do you conduct due diligence on the real estate properties on your platform?</a
                          >
                        </h3>
                      </div>
                      <div id="collapseTwo1" class="collapse" aria-labelledby="headingTwo1" data-parent="#accordionExample">
                        <div class="card-body">
                          We partner with reputable Real Estate Developers on each Real Estate Asset; each Property is analyzed carefully by Real Estate Investment Analysts and a Contract is drafted
                          between Myyinvest and Real Estate Developers facilitated by our Trustees.
                        </div>
                      </div>
                    </div>
                    <div class="card">
                      <div class="card-header" id="headingThree1">
                        <h3 class="mb-0">
                          <a class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree1" aria-expanded="false" aria-controls="collapseThree1"
                            ><i class="fa fa-chevron-circle-down"></i> How do you pick the Real estate property?</a
                          >
                        </h3>
                      </div>
                      <div id="collapseThree1" class="collapse" aria-labelledby="headingThree1" data-parent="#accordionExample">
                        <div class="card-body">
                          We conduct extensive research and pick the desired Property in the best location. We focus on properties that yield maximum returns in the shortest amount of time.
                        </div>
                      </div>
                    </div>
                    <div class="card">
                      <div class="card-header" id="headingFour1">
                        <h3 class="mb-0">
                          <a class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFour1" aria-expanded="false" aria-controls="collapseFour1"
                            ><i class="fa fa-chevron-circle-down"></i> Can i invest in for my investment on installments?</a
                          >
                        </h3>
                      </div>
                      <div id="collapseFour1" class="collapse" aria-labelledby="headingFour1" data-parent="#accordionExample">
                        <div class="card-body">No, we do not accept installment payments at for now, it is a long-time investment.</div>
                      </div>
                    </div>

                    <div class="card">
                      <div class="card-header" id="headingFive1">
                        <h3 class="mb-0">
                          <a class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFive1" aria-expanded="false" aria-controls="collapseFive1"
                            ><i class="fa fa-chevron-circle-down"></i> What happens to my account and investment,if i die?</a
                          >
                        </h3>
                      </div>
                      <div id="collapseFive1" class="collapse" aria-labelledby="headingFive1" data-parent="#accordionExample">
                        <div class="card-body">We will contact your next of kin.</div>
                      </div>
                    </div>

                    <div class="card">
                      <div class="card-header" id="headingSix1">
                        <h3 class="mb-0">
                          <a class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseSix1" aria-expanded="false" aria-controls="collapseSix1"
                            ><i class="fa fa-chevron-circle-down"></i>Who do i contact when i am experiencing any challenge with my investment?</a
                          >
                        </h3>
                      </div>
                      <div id="collapseSix1" class="collapse" aria-labelledby="headingSix1" data-parent="#accordionExample">
                        <div class="card-body">You can send us an email at admin@myyinvest.com</div>
                      </div>
                    </div>

                    <div class="card">
                      <div class="card-header" id="headingSeven1">
                        <h3 class="mb-0">
                          <a class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseSeven1" aria-expanded="false" aria-controls="collapseSeven1"
                            ><i class="fa fa-chevron-circle-down"></i>
                            How do i know the Real Estate property to invest in?
                          </a>
                        </h3>
                      </div>
                      <div id="collapseSeven1" class="collapse" aria-labelledby="headingSeven1" data-parent="#accordionExample">
                        <div class="card-body">
                          This is decision is solely based on you and your disposable amount for investment. We conduct due diligence on all of our projects, so they are viable and profitable.
                        </div>
                      </div>
                    </div>

                    <div class="card">
                      <div class="card-header" id="headingEight1">
                        <h3 class="mb-0">
                          <a class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseEight1" aria-expanded="false" aria-controls="collapseEight1"
                            ><i class="fa fa-chevron-circle-down"></i>
                            What happens after i have acquired a fraction of an asset?
                          </a>
                        </h3>
                      </div>
                      <div id="collapseEight1" class="collapse" aria-labelledby="headingEight1" data-parent="#accordionExample">
                        <div class="card-body">The Property details will appear on your personalized dashboard under MyyPortfolio, where you can follow up on the performance of the asset.</div>
                      </div>
                    </div>

                    <div class="card">
                      <div class="card-header" id="headingNine">
                        <h3 class="mb-0">
                          <a class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine"
                            ><i class="fa fa-chevron-circle-down"></i>
                            How long is the investment term?
                          </a>
                        </h3>
                      </div>
                      <div id="collapseNine" class="collapse" aria-labelledby="headingNine" data-parent="#accordionExample">
                        <div class="card-body">This varies based on the Property agreement with the Real Estate Developer, so it varies based on Property.</div>
                      </div>
                    </div>

                    <div class="card">
                      <div class="card-header" id="headingTen1">
                        <h3 class="mb-0">
                          <a class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTen1" aria-expanded="false" aria-controls="collapseTen1"
                            ><i class="fa fa-chevron-circle-down"></i>
                            How do i get my returns and initial investment after duration?
                          </a>
                        </h3>
                      </div>
                      <div id="collapseTen1" class="collapse" aria-labelledby="headingTen1" data-parent="#accordionExample">
                        <div class="card-body">At the end of the investment cycle, your initial investment and returns are paid into the bank account you indicated on the platform.</div>
                      </div>
                    </div>

                    <div class="card">
                      <div class="card-header" id="headingTen11">
                        <h3 class="mb-0">
                          <a class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTen11" aria-expanded="false" aria-controls="collapseTen11"
                            ><i class="fa fa-chevron-circle-down"></i>
                            How do i get my returns and initial investment after duration?
                          </a>
                        </h3>
                      </div>
                      <div id="collapseTen11" class="collapse" aria-labelledby="headingTen11" data-parent="#accordionExample">
                        <div class="card-body">At the end of the investment cycle, your initial investment and returns are paid into the bank account you indicated on the platform.</div>
                      </div>
                    </div>

                    <div class="card">
                      <div class="card-header" id="headingTen12">
                        <h3 class="mb-0">
                          <a class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTen12" aria-expanded="false" aria-controls="collapseTen12"
                            ><i class="fa fa-chevron-circle-down"></i>
                            What is the minimum and maximum amount i can invest?
                          </a>
                        </h3>
                      </div>
                      <div id="collapseTen12" class="collapse" aria-labelledby="headingTen12" data-parent="#accordionExample">
                        <div class="card-body">This varies based on the Property agreement with the Real Estate Developer, so it varies based on Property.</div>
                      </div>
                    </div>

                    <div class="card">
                      <div class="card-header" id="headingTen13">
                        <h3 class="mb-0">
                          <a class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTen13" aria-expanded="false" aria-controls="collapseTen13"
                            ><i class="fa fa-chevron-circle-down"></i>
                            Is there a limit to the number of Real Estate asset i can invest in?
                          </a>
                        </h3>
                      </div>
                      <div id="collapseTen13" class="collapse" aria-labelledby="headingTen13" data-parent="#accordionExample">
                        <div class="card-body">NO, there is no limit to the number of Real estate assets you can invest in. The decision of the limit is solely based on you.</div>
                      </div>
                    </div>

                    <div class="card">
                      <div class="card-header" id="headingTen14">
                        <h3 class="mb-0">
                          <a class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTen14" aria-expanded="false" aria-controls="collapseTen14"
                            ><i class="fa fa-chevron-circle-down"></i>
                            How do i monitor my investment?
                          </a>
                        </h3>
                      </div>
                      <div id="collapseTen14" class="collapse" aria-labelledby="headingTen14" data-parent="#accordionExample">
                        <div class="card-body">
                          You can get a personalized dashboard that were you can follow through with all happenings in your investment. Also, an investment advisor is assigned to you, to help if you
                          are facing any challenges.
                        </div>
                      </div>
                    </div>

                    <div class="card">
                      <div class="card-header" id="headingTen15">
                        <h3 class="mb-0">
                          <a class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTen15" aria-expanded="false" aria-controls="collapseTen15"
                            ><i class="fa fa-chevron-circle-down"></i>
                            How do i receive my Return on investment?
                          </a>
                        </h3>
                      </div>
                      <div id="collapseTen15" class="collapse" aria-labelledby="headingTen15" data-parent="#accordionExample">
                        <div class="card-body">
                          At the end of the investment term, we send your initial investment and returns to funding the bank account details you have provided. Kindly ensure your bank details are
                          corrected and updated.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section>
                <div class="p-lg-5 container-fluid m-lg-5">
                  <div class="accordion" id="accordionExample">
                    <div class="card">
                      <div class="card-header" id="headingOne11">
                        <h3 class="clearfix mb-0">
                          <a class="btn btn-link" data-toggle="collapse" data-target="#collapseOne11" aria-expanded="true" aria-controls="collapseOne11"
                            ><i class="fa fa-chevron-circle-down"></i>How do i make payments for the tokens i want to acquire?</a
                          >
                        </h3>
                      </div>
                      <div id="collapseOne11" class="collapse show" aria-labelledby="headingOne11" data-parent="#accordionExample">
                        <div class="card-body">You can make payment using your debit card. Debit cards like Visa, Verve and Master card are fully supported by the system.</div>
                      </div>
                    </div>
                    <div class="card">
                      <div class="card-header" id="headingTwo11">
                        <h3 class="mb-0">
                          <a class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo11" aria-expanded="false" aria-controls="collapseTwo11"
                            ><i class="fa fa-chevron-circle-down"></i> Your system is rejecting my card</a
                          >
                        </h3>
                      </div>
                      <div id="collapseTwo11" class="collapse" aria-labelledby="headingTwo11" data-parent="#accordionExample">
                        <div class="card-body">
                          If your card is rejected, it is usually from your bank, and not our platform. Kindly try it again, if this happens to you again, please make sure your card information is
                          correct and try to submit it at least three times. If the problem continues, you will have to contact your bank.
                        </div>
                      </div>
                    </div>
                    <div class="card">
                      <div class="card-header" id="headingThree11">
                        <h3 class="mb-0">
                          <a class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree11" aria-expanded="false" aria-controls="collapseThree11"
                            ><i class="fa fa-chevron-circle-down"></i> How do you pick the Real estate property?</a
                          >
                        </h3>
                      </div>
                      <div id="collapseThree11" class="collapse" aria-labelledby="headingThree11" data-parent="#accordionExample">
                        <div class="card-body">
                          We conduct extensive research and pick the desired Property in the best location. We focus on properties that yield maximum returns in the shortest amount of time.
                        </div>
                      </div>
                    </div>
                    <div class="card">
                      <div class="card-header" id="headingFour11">
                        <h3 class="mb-0">
                          <a class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFour11" aria-expanded="false" aria-controls="collapseFour11"
                            ><i class="fa fa-chevron-circle-down"></i> Can i invest in for my investment on installments?</a
                          >
                        </h3>
                      </div>
                      <div id="collapseFour11" class="collapse" aria-labelledby="headingFour11" data-parent="#accordionExample">
                        <div class="card-body">No, we do not accept installment payments at for now, it is a long-time investment.</div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section>
                <div class="p-lg-5 container-fluid m-lg-5">
                  <div class="accordion" id="accordionExample">
                    <div class="card">
                      <div class="card-header" id="headingOne112">
                        <h3 class="clearfix mb-0">
                          <a class="btn btn-link" data-toggle="collapse" data-target="#collapseOne112" aria-expanded="true" aria-controls="collapseOne112"
                            ><i class="fa fa-chevron-circle-down"></i>How safe is my money?</a
                          >
                        </h3>
                      </div>
                      <div id="collapseOne112" class="collapse show" aria-labelledby="headingOne112" data-parent="#accordionExample">
                        <div class="card-body">The money is kept in a Trust account held and managed by a Trustee.</div>
                      </div>
                    </div>
                    <div class="card">
                      <div class="card-header" id="headingTwo112">
                        <h3 class="mb-0">
                          <a class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo112" aria-expanded="false" aria-controls="collapseTwo112"
                            ><i class="fa fa-chevron-circle-down"></i> Are my card details saved on MYYINVEST platform?</a
                          >
                        </h3>
                      </div>
                      <div id="collapseTwo112" class="collapse" aria-labelledby="headingTwo112" data-parent="#accordionExample">
                        <div class="card-body">
                          No, your Card Details aren’t saved on the Platform. We make use of Paystack for all our Payment Operations on this Platform. You will be redirected to our payment processor
                          when making payment so we do not save any of your card details on our platform as we work with a PCIDSS-compliant payment processor to handle all our customers’ card details.
                          The PCIDSS is a standard guide, globally, that all reputable payment processors must adhere to.
                        </div>
                      </div>
                    </div>

                    <div class="card">
                      <div class="card-header" id="headingFour112">
                        <h3 class="mb-0">
                          <a class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFour112" aria-expanded="false" aria-controls="collapseFour112"
                            ><i class="fa fa-chevron-circle-down"></i> What is your data protection?</a
                          >
                        </h3>
                      </div>
                      <div id="collapseFour112" class="collapse" aria-labelledby="headingFour112" data-parent="#accordionExample">
                        <div class="card-body">
                          Myyinvest ensures that your data is safe and secure, and will not share your personal information with any third party at any given time. Our site is also secured and our
                          technical team carries out periodic audits to ensure our codes remain intact.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {};
</script>

<style>
/*  *{*/
/*background-color: red!important;*/
/* }*/
</style>
