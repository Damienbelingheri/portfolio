<template>
  <div class="footer">
    <footer class="container py-5">
      <div class="page-content page-container">
        <div class="row container d-flex justify-content-center">
          <div class="template-demo">
            <button type="button" class="btn btn-social-icon btn-outline-twitter">
              <i class="fa fa-twitter"></i>
            </button>
            <button type="button" class="btn btn-social-icon btn-outline-github">
              <i class="fa fa-github"></i>
            </button>
            <button type="button" class="btn btn-social-icon btn-outline-linkedin">
              <i class="fa fa-linkedin"></i>
            </button>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style lang="css" scoped>
.stretch-card > .card {
  width: 100%;
  min-width: 100%;
}
body {
  background-color: #f9f9fa;
}
.footer {
  background-color: #34345238;
}
.flex {
  -webkit-box-flex: 1;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
}
@media (max-width: 991.98px) {
  .padding {
    padding: 1.5rem;
  }
}

@media (max-width: 767.98px) {
  .padding {
    padding: 1rem;
  }
}

.padding {
  padding: 3rem;
}

.card {
  box-shadow: none;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  -ms-box-shadow: none;
}

.card {
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid #3da5f;
  border-radius: 0px;
}

.card .card-body {
  padding: 1.25rem 1.75rem;
}

.card .card-title {
  color: #000000;
  margin-bottom: 0.625rem;
  text-transform: capitalize;
  font-size: 0.875rem;
  font-weight: 500;
}

.card .card-description {
  margin-bottom: 0.875rem;
  font-weight: 400;
  color: #76838f;
}

.btn.btn-social-icon {
  width: 50px;
  height: 50px;
  padding: 0;
}

.template-demo > .btn {
  margin-right: 0.5rem !important;
}

.template-demo {
  margin-top: 0.5rem !important;
}

.btn.btn-rounded {
  border-radius: 50px;
}

.btn-outline-twitter {
  border: 1px solid #2caae1;
  color: #2caae1;
}

.btn-outline-twitter:hover {
  background: #2caae1;
  color: #ffffff;
}

.btn-twitter {
  background: #2caae1;
  color: #ffffff;
}

.btn-twitter:hover,
.btn-twitter:focus {
  background: #1b8dbf;
  color: #ffffff;
}

.btn-outline-linkedin {
  border: 1px solid #0177b5;
  color: #0177b5;
}
.btn-outline-linkedin:hover {
  background: #0177b5;
  color: #ffffff;
}

.btn-linkedin {
  background: #0177b5;
  color: #ffffff;
}

.btn-linkedin:hover,
.btn-linkedin:focus {
  background: #015682;
  color: #ffffff;
}

.btn-outline-github {
  border: 1px solid #24292e;
  color: #24292e;
}

.btn-outline-github:hover {
  background: #24292e;
  color: #ffffff;
}

.btn-github {
  background: #24292e;
  color: #ffffff;
}

.btn-github:hover,
.btn-github:focus {
  background: #24292e;
  color: #ffffff;
}
</style>