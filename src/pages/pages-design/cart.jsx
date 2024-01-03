/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Link from "node_modules/next/link";
import Row from "node_modules/react-bootstrap/esm/Row";
import React from "react";
import { Container, Col } from "react-bootstrap";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

export default function Cart() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [collectshow, setcollect] = useState(false);
  const collectClose = () => setcollect(false);
  const collectShow = () => setcollect(true);

  const [contitionsshow, setcontitions] = useState(false);
  const contitionsClose = () => setcontitions(false);
  const contitionsShow = () => setcontitions(true);

  return (
    <>
      <div className="main-wrapper">
        <div className="page-top-bar">
          <Container fluid>
            <div className="top-bar-inner">
              <div className="top-bar-left">
                <Link href="#" className="text-link">
                  <img src="/assets/images/arrow-left.svg" alt="back" />
                </Link>
              </div>
              <div className="top-bar-center">
                <h2>Cart</h2>
              </div>
            </div>
          </Container>
        </div>
        <div className="main-wrapper-content">
          <div className="cart-middle">
            <div className="cart-middle-inner">
              <div className="cart-prod-list">
                <ul>
                  <li>
                    <div className="cart-prod-detail">
                      <button className="btn cart-close-btn">
                        <img src="/assets/images/cart-close.svg" alt="" />
                      </button>
                      <div className="cart-prod-info">
                        <div className="prod-info-left">
                          <img src="/assets/images/prod-1.svg" alt="" />
                        </div>
                        <div className="prod-info-right">
                          <h2>Blackout Roller Blinds</h2>
                          <ul>
                            <li>
                              Item Code : <span>XRB4503C</span>
                            </li>
                            <li>
                              Dimensions :{" "}
                              <span>
                                90<span class="px-1">x</span>130 CM ( W &amp; H
                                ){" "}
                              </span>{" "}
                            </li>
                            <li>
                              Brand : <span>York weave</span>
                            </li>
                            <li>
                              Control Type : <span>Manual</span>
                            </li>
                          </ul>
                          <div className="prod-more-detail">
                            <p>More Detail...</p>
                          </div>
                          <div className="prod-options">
                            <a href="#" className="prod-edit-options">
                              Edit options
                            </a>
                            <span className="prod-save">Save for later</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="cart-price-total">
                      <div className="cart-prod-price">
                        <span>USD</span>
                        <span>319.00</span>
                      </div>
                      <div className="cart-prod-quantitycount">
                        <div className="quantitycount-input">
                          <button type="button" class="btn btn-light">
                            -
                          </button>
                          <input type="text" class="form-control" value="2" />
                          <button type="button" class="btn btn-light">
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="cart-order-notes">
                <div className="order-notes-input">
                  <FloatingLabel
                    controlId="floatingTextarea"
                    label="Order Notes"
                  >
                    <Form.Control
                      as="textarea"
                      placeholder="Leave a comment here"
                    />
                  </FloatingLabel>
                </div>
                <div className="cart-delivery-optionbox">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                    />
                    <label class="form-check-label" for="flexRadioDefault1">
                      Delivery / Delivery with Installation
                    </label>
                    <div className="cart-delivery-notes">
                      <span onClick={handleShow}>
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          stroke-width="0"
                          viewBox="0 0 16 16"
                          role="button"
                          height="18"
                          width="18"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M8.568 1.031A6.8 6.8 0 0 1 12.76 3.05a7.06 7.06 0 0 1 .46 9.39 6.85 6.85 0 0 1-8.58 1.74 7 7 0 0 1-3.12-3.5 7.12 7.12 0 0 1-.23-4.71 7 7 0 0 1 2.77-3.79 6.8 6.8 0 0 1 4.508-1.149zM9.04 13.88a5.89 5.89 0 0 0 3.41-2.07 6.07 6.07 0 0 0-.4-8.06 5.82 5.82 0 0 0-7.43-.74 6.06 6.06 0 0 0 .5 10.29 5.81 5.81 0 0 0 3.92.58zM7.375 6h1.25V5h-1.25v1zm1.25 1v4h-1.25V7h1.25z"
                          ></path>
                        </svg>
                      </span>
                    </div>
                    <div className="form-check-bg"></div>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault2"
                      checked
                    />
                    <label class="form-check-label" for="flexRadioDefault2">
                      Click & Collect
                    </label>
                    <div className="cart-delivery-notes">
                      <span onClick={collectShow}>
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          stroke-width="0"
                          viewBox="0 0 16 16"
                          role="button"
                          height="18"
                          width="18"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M8.568 1.031A6.8 6.8 0 0 1 12.76 3.05a7.06 7.06 0 0 1 .46 9.39 6.85 6.85 0 0 1-8.58 1.74 7 7 0 0 1-3.12-3.5 7.12 7.12 0 0 1-.23-4.71 7 7 0 0 1 2.77-3.79 6.8 6.8 0 0 1 4.508-1.149zM9.04 13.88a5.89 5.89 0 0 0 3.41-2.07 6.07 6.07 0 0 0-.4-8.06 5.82 5.82 0 0 0-7.43-.74 6.06 6.06 0 0 0 .5 10.29 5.81 5.81 0 0 0 3.92.58zM7.375 6h1.25V5h-1.25v1zm1.25 1v4h-1.25V7h1.25z"
                          ></path>
                        </svg>
                      </span>
                    </div>
                    <div className="form-check-bg"></div>
                  </div>
                </div>
              </div>
              <div className="cart-summary">
                <div className="cart-summary-title">
                  <h2>Cart Summary</h2>
                </div>
                <div className="cart-summary-detail">
                  <ul>
                    <li>
                      <div class="row">
                        <div class="labeltext col-7">
                          <h6> Order total</h6>
                        </div>
                        <div class="itemamount col-5">
                          <span class="currency_code">USD </span>
                          <span class="currency_value">1808.00</span>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="row">
                        <div class="labeltext col-7">
                          <h6> Discounts</h6>
                        </div>
                        <div class="itemamount discount col-5">
                          - &nbsp;<span class="currency_code">USD </span>
                          <span class="currency_value">375.00</span>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="row">
                        <div class="labeltext col-7">
                          <h6> Subtotal</h6>
                        </div>
                        <div class="itemamount col-5">
                          <span class="currency_code">USD </span>
                          <span class="currency_value">1433.00</span>
                        </div>
                      </div>
                    </li>
                  </ul>
                  <div className="cart-summary-total">
                    <div class="row">
                      <div class="labeltext col-sm-7">
                        <h6>Total (Inclusive of VAT)</h6>
                      </div>
                      <div class="itemamount col-sm-5">
                        <span class="currency_code">USD </span>
                        <span class="currency_value">1433.00</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cart-promo-code">
                <div className="cart-promo-heading">
                  <h3> Coupon Code or Gift Card</h3>
                </div>
                <div class="input-group cart-promo-group">
                  <input
                    name="promoCode"
                    placeholder="Coupon Code or Gift Card"
                    class="promo_code form-control"
                    value=""
                  />
                  <button
                    type="button"
                    class="input-group-text btn btn-primary"
                  >
                    Apply
                  </button>
                </div>
              </div>
              <div className="cart-checkout-btn">
                <button class="btn btn-primary" type="submit">
                  <span class="Checkout_with_Login">Check Out </span>
                </button>
              </div>
              <div className="cart-term-condition">
                <p>
                  By continuing to Checkout, you agree to Sedar’s Terms of Use
                  and Privacy Policy.{" "}
                  <span onClick={contitionsShow}>
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 16 16"
                      role="button"
                      height="18"
                      width="18"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M8.568 1.031A6.8 6.8 0 0 1 12.76 3.05a7.06 7.06 0 0 1 .46 9.39 6.85 6.85 0 0 1-8.58 1.74 7 7 0 0 1-3.12-3.5 7.12 7.12 0 0 1-.23-4.71 7 7 0 0 1 2.77-3.79 6.8 6.8 0 0 1 4.508-1.149zM9.04 13.88a5.89 5.89 0 0 0 3.41-2.07 6.07 6.07 0 0 0-.4-8.06 5.82 5.82 0 0 0-7.43-.74 6.06 6.06 0 0 0 .5 10.29 5.81 5.81 0 0 0 3.92.58zM7.375 6h1.25V5h-1.25v1zm1.25 1v4h-1.25V7h1.25z"
                      ></path>
                    </svg>
                  </span>
                </p>

                <div class="paymenttext">
                  <p>100% Secure Payment </p>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* modal - 1*/}
      <Modal
        show={show}
        onHide={handleClose}
        centered
        className="cart-notes-popup"
      >
        <Modal.Header closeButton>
          <Modal.Title>Delivery & Installation Policy</Modal.Title>
        </Modal.Header>
        <Modal.Body></Modal.Body>
      </Modal>

      {/* modal - 2*/}

      <Modal
        show={collectshow}
        onHide={collectClose}
        centered
        className="cart-notes-popup"
      >
        <Modal.Header closeButton>
          <Modal.Title>Collection Location</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="alerttext">
            <p>
              Please select the nearest showroom location where you can collect
              your shipment.
            </p>
          </div>
        </Modal.Body>
      </Modal>

      {/* modal - 3*/}

      <Modal
        show={contitionsshow}
        onHide={contitionsClose}
        centered
        className="cart-notes-popup"
      >
        <Modal.Header closeButton>
          <Modal.Title>Terms And Contitions</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <section class="TermsAndContitions">
            <div class="cartPage_term_condition">
              <div class="col-md-12 col-sm-12 col-xs-12">
                <p>
                  THROUGHOUT THIS WEBSITE, THE TERMS “US”, “WE” AND/OR “OUR”
                  SHALL REFER TO SEDAR, SEDAR GLOBAL, ITS AFFILIATES AND
                  SUBSIDIARIES.
                </p>

                <p>
                  <strong>Return Policy</strong>
                </p>

                <p>
                  We’d like you to be happy with everything you purchase from
                  us. As all of our blinds and shades are custom made, we cannot
                  offer a refund or exchange (remake) unless a product is
                  defective, as per our sole determination.
                </p>

                <ul>
                  <li>
                    <strong>Conditions for returns</strong>
                  </li>
                  <li>Defect in material or workmanship (by our employees)</li>
                  <li>Something doesn’t work properly</li>
                  <li>
                    Product in wrong size due to an error made at our production
                    facility
                  </li>
                  <li>
                    Return request must be made within 2 days of the delivery
                    date and items must be unused and in their original
                    packaging.
                  </li>
                  <li>Product is not repairable</li>
                  <li>
                    Items can only be returned to a store. Items can be returned
                    to a store for a refund. If the store carries the item you
                    can purchase it after returning the original
                  </li>
                </ul>

                <ul>
                  <li>
                    <strong>Conditions for rejecting returns</strong>
                  </li>
                  <li>Cut meter fabrics</li>
                  <li>
                    Products that have been used, modified or altered, washed,
                    assembled or installed, unless they are defective.
                  </li>
                  <li>
                    Products damaged by misuse or showing signs of wear, even if
                    they are still under warranty
                  </li>
                  <li>
                    Products that have already been assembled, unless our team
                    determines that there is a manufacturing defect. We reserve
                    the right to check for defects and will repair or replace
                    the defective products at our discretion.
                  </li>
                </ul>

                <p>
                  If you return an item that you received defective, damaged or
                  incorrect, you’ll be refunded the full delivery cost, once
                  your return is processed.
                </p>

                <p>
                  Pickup Process: Once the complaint is approved, the product
                  pickup process will start.
                </p>

                <ol>
                  <li>
                    Within UAE: The Product(s) will be picked up by our delivery
                    team for UAE customers
                  </li>
                </ol>

                <ul>
                  <li>
                    There will be no pickup charges if Return claim has been
                    raised within 2 days(48 hours)
                  </li>
                  <li>
                    Pickup request if cancelled for any reason can be
                    rescheduled once on request without any additional charges,
                    however, if second pick up request is cancelled, claim
                    ticket will be closed, unless Sedar deem otherwise at their
                    own discretion.
                  </li>
                </ul>

                <p>
                  b. Outside UAE: This will be handled on a case by case basis
                  and in agreement with us.
                </p>

                <p>
                  <strong>Refund</strong>
                </p>

                <p>
                  When you buy from us we want you to be happy with your
                  purchase. So if you need to get it refunded, we want to make
                  it as easy as possible.{" "}
                </p>

                <p>
                  We will refund the delivery charge in full if the product
                  received is faulty / damaged and you return all products of
                  your order at the same time. If you choose to keep some of the
                  products, we will retain the balance of the delivery charge
                  that applies to the products you keep.
                </p>

                <p>
                  Once we have received your product, we will refund your money
                  in the same way you initially paid for it. If payment was made
                  credit or debit card, the refunded amount will be returned
                  into the same card account. The refund process normally takes
                  between 3-5 working days to show in your account.
                </p>

                <p>
                  If you purchased at an offer price, your refund will be based
                  on that promotional price. If you are returning items that
                  were purchased on a promotion, such as ‘Buy one get one half
                  price’ or ‘3 for 2’, then the promotion will no longer apply
                  and your refund value will be adjusted accordingly.
                </p>

                <p>
                  Where you use a coupon when paying for your order, the coupon
                  will be considered used where you are returning only some of
                  the goods to which the coupon applies. You will only be able
                  to redeem the coupon or we will issue a new coupon against a
                  future purchase if you are returning all the goods to which
                  the coupon applies.
                </p>

                <p>
                  If you have any questions concerning receiving a refund please
                  call our customer service team on 800 73327
                </p>

                <p>
                  <strong>Exchange</strong>
                </p>

                <p>Your satisfaction is very important to us.</p>

                <p>
                  In case of an incident where a replacement product may be
                  required again, please contact the customer services team who
                  will arrange this in line with the Terms &amp; Conditions for
                  replacement and/or faulty products.
                </p>

                <p>
                  <strong>My Space My Art Competition</strong>&nbsp;
                </p>

                <p>
                  Only purchases from Sedar done in the last 6 months permit
                  entry to the draw.&nbsp;
                </p>
                <p>
                  Participant's Instagram profile must be a public profile for
                  eligibility enter the draw.&nbsp;
                </p>
                <p>
                  Participants must use hashtag #MySpaceMyArt when sharing the
                  story/post/video.&nbsp;
                </p>
                <p>
                  Participants are eligible to one draw only per competition
                  &amp; purchase order.&nbsp;
                </p>
                <p>
                  Participants must tag Sedar using @sedarglobal when sharing
                  the story/post/video.&nbsp;
                </p>
                <p>
                  By tagging Sedar, you give Sedar the consent to repost your
                  story/post/video.&nbsp;
                </p>
                <p>
                  Proof of purchase is required once participant is selected as
                  a winner.&nbsp;
                </p>
                <p>
                  Tagged images/videos are required to clearly show Sedar
                  products.&nbsp;
                </p>
                <p>
                  Sedar has the right to refuse submissions at any time.&nbsp;
                </p>
                <p>
                  Winners are responsible for providing accurate information to
                  claim the prize.&nbsp;
                </p>
                <p>
                  Competition is restricted to residents in KSA, UAE, Bahrain,
                  Qatar &amp; Oman.&nbsp;
                </p>
                <p>
                  Winners must accept &amp; claim the prize within 30 days from
                  announcement date.&nbsp;
                </p>
                <p>
                  Participants must screenshot the story/keep in archive for
                  future reference.&nbsp;
                </p>
                <p>
                  Participants must have the post/video active on their page
                  throughout the competition period to be eligible to win.
                  &nbsp;
                </p>

                <p>
                  &nbsp; Practicpants account must be their real &amp; active
                  account , accounts created only for the purpose this
                  competition will not be considered &nbsp;&nbsp; &nbsp;
                </p>

                <p>
                  <strong>Privacy Policy</strong>
                </p>

                <p>Your privacy is critically important to us.</p>

                <p>
                  It is our policy to respect your privacy regarding any and all
                  information we may collect while operating our website. This
                  Privacy Policy applies to sedarglobal.com (hereinafter, "us",
                  "we", or "sedarglobal.com"). We respect your privacy and are
                  committed to protecting personally identifiable information
                  you may provide us through our Website. We have adopted this
                  privacy policy ("<strong>Privacy Policy</strong>") to explain
                  what information may be collected on our Website, how we use
                  this information, and under what circumstances we may disclose
                  the information to third parties. This Privacy Policy applies
                  only to information we collect through our Website and does
                  not apply to our collection of information from other sources.
                </p>

                <p>
                  This Privacy Policy, together with the Terms and conditions
                  posted on our Website, set forth the general rules and
                  policies governing your use of our Website. Depending on your
                  activities when visiting our Website, you may be required to
                  agree to additional terms and conditions.
                </p>

                <p>
                  <strong>Website Visitors</strong>
                </p>

                <p>
                  Like most website operators, we collect
                  non-personally-identifying information of the sort that web
                  browsers and servers typically make available, such as, but
                  not limited to, the browser type, language preference,
                  referring site, and the date and time of each visitor request.
                  Our purpose in collecting non-personally identifying
                  information is to better understand how our visitors use our
                  website. From time to time, we may release
                  non-personally-identifying information in the aggregate, e.g.,
                  by publishing a report on trends in the usage of our website.
                </p>

                <p>
                  We also collect potentially personally-identifying information
                  like Internet Protocol (IP) addresses for logged in users and
                  for users leaving comments on http://sedarglobal.com blog
                  posts. We only disclose logged in user and commenter IP
                  addresses under the same circumstances that it uses and
                  discloses personally-identifying information as described
                  below.
                </p>

                <p>
                  <strong>
                    Gathering of Personally-Identifying Information
                  </strong>
                </p>

                <p>
                  Certain visitors to our website choose to interact with us in
                  ways that require us to gather personally-identifying
                  information. The amount and type of information that we gather
                  depends on the nature of the interaction. For example, we ask
                  visitors who sign up for a blog at http://sedarglobal.com to
                  provide a username and email address.
                </p>

                <p>
                  <strong>Security</strong>
                </p>

                <p>
                  The security of your Personal Information is important to us,
                  but remember that no method of transmission over the Internet,
                  or method of electronic storage is 100% secure. While we
                  strive to use commercially acceptable means to protect your
                  Personal Information, we cannot guarantee its absolute
                  security.
                </p>

                <p>
                  <strong>Advertisements</strong>
                </p>

                <p>
                  Ads appearing on our website may be delivered to users by
                  advertising partners, who may set cookies. These cookies allow
                  the ad server to recognize your computer each time they send
                  you an online advertisement to compile information about you
                  or others who use your computer. This information allows ad
                  networks to, among other things, deliver targeted
                  advertisements that they believe will be of most interest to
                  you. This Privacy Policy covers the use of cookies by us and
                  does not cover the use of cookies by any advertisers.
                </p>

                <p>
                  <strong>Links To External Sites</strong>
                </p>

                <p>
                  Our Service may contain links to external sites that are not
                  operated by us nor do we take any responsibility for their
                  content, privacy or security. You enter these third party
                  websites at your own risk. If you click on a third party link,
                  you will be directed to that third party's site. We strongly
                  advise you to review the Privacy Policy and terms and
                  conditions of every site you visit.
                </p>

                <p>
                  We have no control over, and assume no responsibility for the
                  content, privacy policies or practices of any third party
                  sites, products or services which you enter, whether directly
                  or indirectly, while browsing our website.
                </p>

                <p>
                  You hereby confirm that we are not liable for any harm or
                  damages related to the purchase or use of goods, services,
                  resources, content, or any other transactions made in
                  connection with any third-party websites. Complaints, claims,
                  concerns, or questions regarding third-party products should
                  be directed to the third-party.
                </p>

                <p>
                  <strong>Google AdWords</strong>
                </p>

                <p>
                  Sedarglobal.com uses remarketing services to advertise on
                  third party websites (including Google) to previous visitors
                  to our site. It could mean that we advertise to previous
                  visitors who haven't completed a task on our site. For
                  example, using the contact form to make an enquiry. This could
                  be in the form of an advertisement on the Google search
                  results page or a site in the Google Display Network.
                  Third-party vendors, including Google, use cookies to serve
                  ads based on someone's past visits. Any data collected as a
                  result of this exercise, will be used in accordance with our
                  privacy policy and Google's privacy policy.
                </p>

                <p>
                  <strong>Aggregated Statistics</strong>
                </p>

                <p>
                  We may collect statistics about the behavior of visitors to
                  our website. We may display this information publicly or
                  provide it to others. However, we do not disclose your
                  personally-identifying information.
                </p>

                <p>
                  <strong>Affiliate Disclosure</strong>
                </p>

                <p>
                  Our website uses affiliate links and in certain circumstances
                  earns a commission from some links. However, this does not
                  affect your purchases or the price you pay for such purchases.
                </p>

                <p>
                  <strong>Cookies</strong>
                </p>

                <p>
                  To enrich and perfect your online experience, we use "Cookies"
                  and similar technologies and services provided by others to
                  display personalized content, appropriate advertisin
                </p>
              </div>
            </div>
          </section>
        </Modal.Body>
      </Modal>
    </>
  );
}
