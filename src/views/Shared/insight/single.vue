<template>
  <div>
    <div class="container " style="height: 100%!important;">
      <div class="post blog-post ">
        <div class="post-single">
          <div class="post-thumbnail"><img src="@/assets/images/g.jpg" alt="..." class="img-fluid" /></div>
          <div class="post-details">
            <div class="user_details">
              <div class="float-left">
                <a href="#">Views: 12</a>
                <!-- <a href="#">Gadget</a> -->
              </div>
              <div class="float-right">
                <div class="media">
                  <div class="media-body">
                    <h5>Valentine Bush</h5>
                    <p>12 Dec, 2017 11:21 am</p>
                  </div>
                  <div class="d-flex">
                    <img src="https://via.placeholder.com/40" class="img-fluid" alt="" />
                  </div>
                </div>
              </div>
            </div>

            <h3>Diversity in Engineering: The Effect on Questions</h3>

            <div class="post-body">
              <p class="lead">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
              </p>

              <h3>Lorem Ipsum Dolor</h3>
              <p>
                div Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda temporibus iusto voluptates deleniti similique rerum ducimus sint ex odio saepe. Sapiente quae pariatur ratione
                quis perspiciatis deleniti accusantium
              </p>
              <blockquote class="blockquote">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                  ullamco laboris nisi ut aliquip.
                </p>
                <footer class="blockquote-footer">
                  Someone famous in
                  <cite title="Source Title">Source Title</cite>
                </footer>
              </blockquote>
              <p>
                quasi nam. Libero dicta eum recusandae, commodi, ad, autem at ea iusto numquam veritatis, officiis. Accusantium optio minus, voluptatem? Quia reprehenderit, veniam quibusdam provident,
                fugit iusto ullam voluptas neque soluta adipisci ad.
              </p>

              <div class="post-tags container">
                <a href="#" class="tag">
                  #Business
                </a>
                <a href="#" class="tag">
                  #Tricks
                </a>
                <a href="#" class="tag">
                  #Financial
                </a>
                <a href="#" class="tag">
                  #Economy
                </a>
              </div>
            </div>

            <div class="posts-nav d-flex justify-content-between align-items-stretch flex-column flex-md-row">
              <a href="#" class="prev-post text-left d-flex align-items-center">
                <div class="icon prev"><i class="fa fa-angle-left"></i></div>
                <div class="text">
                  <strong class="text-primary">Previous Post </strong>
                  <h6>I Bought a Wedding Dress.</h6>
                </div>
              </a>
              <a href="#" class="next-post text-right d-flex align-items-center justify-content-end">
                <div class="text">
                  <strong class="text-primary">Next Post </strong>
                  <h6>I Bought a Wedding Dress.</h6>
                </div>
                <div class="icon next"><i class="fa fa-angle-right"> </i></div>
              </a>
            </div>

            <div class="post-comments">
              <header>
                <h3>Post Comments<span class="no-of-comments">(3)</span></h3>
              </header>

              <div class="comment-items-wrap">
                <ul class="comment-items">
                  <li class="comment-item clearfix" id="comment-2">
                    <div class="image">
                      <div style="background-image: url(images/f.jpg);">
                        <img src="images/f.jpg" width="300" height="296" alt="admin" class="avatar avatar-300 wp-user-avatar wp-user-avatar-300 alignnone photo" />
                      </div>
                    </div>
                    <div class="area">
                      <div class="content">
                        Since its inception in 2013, Unit London has strived to provide a unique and experimental platform for the world’s most distinctive emerging talent, showcasing their work to a
                        culturally curious audience across the globe.
                      </div>
                      <div class="bottom">
                        <h5>- admin</h5>
                      </div>
                    </div>
                  </li>
                  <!-- .children -->
                  <!-- #comment-## -->
                </ul>
              </div>
            </div>

            <div class="add-comment">
              <header>
                <h3 class="h6">Leave a reply</h3>
              </header>
              <form action="#" class="commenting-form">
                <div class="row">
                  <div class="form-group col-md-6">
                    <input type="text" name="username" id="username" placeholder="Name" class="form-control" />
                  </div>
                  <div class="form-group col-md-6">
                    <input type="email" name="username" id="useremail" placeholder="Email Address (will not be published)" class="form-control" />
                  </div>
                  <div class="form-group col-md-12">
                    <textarea name="usercomment" id="usercomment" placeholder="Type your comment" class="form-control"></textarea>
                  </div>
                  <div class="form-group col-md-12">
                    <main-button text="Submit Content" type="filled" class="col-md-12 mt-3" />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MainButton from "../../../components/form/MainButton";
export default {
  components: { MainButton }
};
</script>

<style></style>
