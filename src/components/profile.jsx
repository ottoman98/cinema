import '../styles/profile.css';

function Profile() {
  return (
    <>
      <div class="container">
        <div class="profile">
          <div class="profile-header">
            <div class="profile-header-cover"></div>
            <div class="profile-header-content">
              <div class="profile-header-img">
                <img
                  src="https://i.pinimg.com/originals/e4/2a/57/e42a57ad5659ea5f5b977aa0a75871f3.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div class="profile-container">
            <div class="profile-sidebar">
              <div class="desktop-sticky-top">
                <h4>Osman "GigaChad" Barros</h4>
                <div class="font-weight-600 mb-3 text-muted mt-n2 user">
                  @johnsmith
                </div>
                <p>
                  Principal UXUI Design &amp; Brand Architecture for Studio.
                  Creator of SeanTheme. Bringing the world closer together.
                  Studied Computer Science and Psychology at Harvard University.
                </p>
                <div class="mb-1">
                  <i class="fa fa-map-marker-alt fa-fw text-muted"></i> New
                  York, NY
                </div>
                <div class="mb-3">
                  <i class="fa fa-link fa-fw text-muted"></i>
                  seantheme.com/studio
                </div>
                <a href="#" class="btn btn-outline-primary">
                  Editar perfil
                </a>

                <hr class="mt-4 mb-4" />
              </div>
              <h3>Tus Reseñas</h3>
              <a href="#" class="btn btn-outline-primary">
                Nueva reseña
              </a>
            </div>

            <div class="profile-content">
              <div class="row">
                <div class="col-xl-12">
                  <div class="tab-content p-0">
                    <div
                      class="tab-pane fade active show"
                      id="profile-followers"
                    >
                      <div class="list-group">
                        <div class="list-group-item d-flex align-items-center">
                          <img
                            className="list-image"
                            src="https://images8.alphacoders.com/695/695217.jpg"
                            alt=""
                          />
                          <div class="flex-fill pl-3 pr-3">
                            <div>
                              <a href="#" class="text-dark font-weight-600">
                                Drago Dragon
                              </a>
                            </div>
                            <div class="text-muted fs-13px">1902</div>
                          </div>
                          <a href="#" class="btn btn-outline-primary">
                            Editar
                          </a>
                          <a href="#" class="btn btn-outline-primary">
                            Borrar
                          </a>
                        </div>

                        <div class="list-group-item d-flex align-items-center">
                          <img
                            className="list-image"
                            src="https://images8.alphacoders.com/695/695217.jpg"
                            alt=""
                          />
                          <div class="flex-fill pl-3 pr-3">
                            <div>
                              <a href="#" class="text-dark font-weight-600">
                                Drago Dragon
                              </a>
                            </div>
                            <div class="text-muted fs-13px">1902</div>
                          </div>
                          <a href="#" class="btn btn-outline-primary">
                            Editar
                          </a>
                          <a href="#" class="btn btn-outline-primary">
                            Borrar
                          </a>
                        </div>

                        <div class="list-group-item d-flex align-items-center">
                          <img
                            className="list-image"
                            src="https://images8.alphacoders.com/695/695217.jpg"
                            alt=""
                          />
                          <div class="flex-fill pl-3 pr-3">
                            <div>
                              <a href="#" class="text-dark font-weight-600">
                                Drago Dragon
                              </a>
                            </div>
                            <div class="text-muted fs-13px">1902</div>
                          </div>
                          <a href="#" class="btn btn-outline-primary">
                            Editar
                          </a>
                          <a href="#" class="btn btn-outline-primary">
                            Borrar
                          </a>
                        </div>
                        <div class="list-group-item d-flex align-items-center">
                          <img
                            className="list-image"
                            src="https://images8.alphacoders.com/695/695217.jpg"
                            alt=""
                          />
                          <div class="flex-fill pl-3 pr-3">
                            <div>
                              <a href="#" class="text-dark font-weight-600">
                                Drago Dragon
                              </a>
                            </div>
                            <div class="text-muted fs-13px">1902</div>
                          </div>
                          <a href="#" class="btn btn-outline-primary">
                            Editar
                          </a>
                          <a href="#" class="btn btn-outline-primary">
                            Borrar
                          </a>
                        </div>
                        <div class="list-group-item d-flex align-items-center">
                          <img
                            className="list-image"
                            src="https://images8.alphacoders.com/695/695217.jpg"
                            alt=""
                          />
                          <div class="flex-fill pl-3 pr-3">
                            <div>
                              <a href="#" class="text-dark font-weight-600">
                                Drago Dragon
                              </a>
                            </div>
                            <div class="text-muted fs-13px">1902</div>
                          </div>
                          <a href="#" class="btn btn-outline-primary">
                            Editar
                          </a>
                          <a href="#" class="btn btn-outline-primary">
                            Borrar
                          </a>
                        </div>
                      </div>

                      <div class="text-center p-3">
                        <a href="#" class="text-dark text-decoration-none">
                          Show more <b class="caret"></b>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
