(this.webpackJsonpclient = this.webpackJsonpclient || []).push([
  [0],
  {
    107: function (e, a, t) {
      e.exports = t(124);
    },
    113: function (e, a, t) {},
    124: function (e, a, t) {
      "use strict";
      t.r(a);
      var n,
        r,
        o,
        l,
        c,
        s = t(0),
        i = t.n(s),
        u = t(39),
        m = t.n(u),
        d = (t(112), t(113), t(29)),
        b = t(51),
        p = t(12),
        g = t(143),
        v = t(75),
        k = t(142),
        E = t(145),
        f = t(138),
        h = t(139),
        w = t(93),
        O = t(94),
        j = t(81),
        y = t.n(j),
        S = new ((function () {
          function e() {
            Object(w.a)(this, e);
          }
          return (
            Object(O.a)(e, [
              {
                key: "getProfile",
                value: function () {
                  return y()(this.getToken());
                },
              },
              {
                key: "loggedIn",
                value: function () {
                  var e = this.getToken();
                  return !!e && !this.isTokenExpired(e);
                },
              },
              {
                key: "isTokenExpired",
                value: function (e) {
                  try {
                    return y()(e).exp < Date.now() / 1e3;
                  } catch (a) {
                    return !1;
                  }
                },
              },
              {
                key: "getToken",
                value: function () {
                  return localStorage.getItem("id_token");
                },
              },
              {
                key: "login",
                value: function (e) {
                  localStorage.setItem("id_token", e),
                    window.location.assign("/");
                },
              },
              {
                key: "logout",
                value: function () {
                  localStorage.removeItem("id_token"),
                    window.location.assign("/");
                },
              },
            ]),
            e
          );
        })())(),
        x = t(101),
        I = t(20),
        C = t.n(I),
        B = t(32),
        N = t(15),
        T = t(133),
        F = t(134),
        L = t(141),
        _ = t(97),
        $ = t(135),
        q = t(136),
        P = t(150),
        D = t(151),
        U = (t(90), t(52)),
        Y = t(144),
        G = Object(Y.a)(
          n ||
            (n = Object(U.a)([
              "\n  query getMe {\n    me {\n      _id\n      username\n      email\n      savedBooks {\n        bookId\n        authors\n        description\n        image\n        link\n        title\n      }\n    }\n  }\n",
            ]))
        ),
        J = Object(Y.a)(
          r ||
            (r = Object(U.a)([
              "\n  mutation signUp($username: String!, $email: String!, $password: String!) {\n    signUp(username: $username, email: $email, password: $password) {\n      token\n      user {\n        _id\n        email\n        username\n      }\n    }\n  }\n",
            ]))
        ),
        z = Object(Y.a)(
          o ||
            (o = Object(U.a)([
              "\n  mutation login($email: String!, $password: String!) {\n    login(email: $email, password: $password) {\n      token\n      user {\n        _id\n        username\n        email\n        savedBooks {\n          authors\n          description\n          bookId\n          image\n          link\n          title\n        }\n      }\n    }\n  }\n",
            ]))
        ),
        K = Object(Y.a)(
          l ||
            (l = Object(U.a)([
              "\n  mutation saveBook($bookToSave: BookToSave!) {\n    saveBook(book: $bookToSave) {\n      _id\n      username\n      email\n      savedBooks {\n        authors\n        description\n        bookId\n        image\n        link\n        title\n      }\n    }\n  }\n",
            ]))
        ),
        V = Object(Y.a)(
          c ||
            (c = Object(U.a)([
              "\n  mutation deleteBook($bookId: String!) {\n    deleteBook(bookId: $bookId) {\n      _id\n      username\n      email\n      savedBooks {\n        authors\n        description\n        bookId\n        image\n        link\n        title\n      }\n    }\n  }\n",
            ]))
        ),
        A = function (e) {
          var a = localStorage.getItem("saved_books")
            ? JSON.parse(localStorage.getItem("saved_books"))
            : null;
          if (!a) return !1;
          var t =
            null === a || void 0 === a
              ? void 0
              : a.filter(function (a) {
                  return a !== e;
                });
          return localStorage.setItem("saved_books", JSON.stringify(t)), !0;
        },
        M = function () {
          var e = Object(s.useState)([]),
            a = Object(N.a)(e, 2),
            t = a[0],
            n = a[1],
            r = Object(s.useState)(""),
            o = Object(N.a)(r, 2),
            l = o[0],
            c = o[1],
            u = Object(s.useState)(
              localStorage.getItem("saved_books")
                ? JSON.parse(localStorage.getItem("saved_books"))
                : []
            ),
            m = Object(N.a)(u, 2),
            d = m[0],
            b = m[1],
            p = Object(D.a)(K),
            g = Object(N.a)(p, 2),
            v = g[0],
            k = g[1].data;
          Object(s.useEffect)(
            function () {
              if (k)
                return function () {
                  var e;
                  (e = d).length
                    ? localStorage.setItem("saved_books", JSON.stringify(e))
                    : localStorage.removeItem("saved_books");
                };
            },
            [k]
          );
          var E = (function () {
              var e = Object(B.a)(
                C.a.mark(function e(a) {
                  var t, r, o, s;
                  return C.a.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if ((a.preventDefault(), l)) {
                              e.next = 3;
                              break;
                            }
                            return e.abrupt("return", !1);
                          case 3:
                            return (
                              (e.prev = 3),
                              (e.next = 6),
                              fetch(
                                "https://www.googleapis.com/books/v1/volumes?q=".concat(
                                  l
                                )
                              )
                            );
                          case 6:
                            if ((t = e.sent).ok) {
                              e.next = 9;
                              break;
                            }
                            throw new Error("something went wrong!");
                          case 9:
                            return (e.next = 11), t.json();
                          case 11:
                            (r = e.sent),
                              (o = r.items),
                              (s = o.map(function (e) {
                                var a;
                                return {
                                  bookId: e.id,
                                  authors: e.volumeInfo.authors || [
                                    "No author to display",
                                  ],
                                  title: e.volumeInfo.title,
                                  description: e.volumeInfo.description,
                                  image:
                                    (null === (a = e.volumeInfo.imageLinks) ||
                                    void 0 === a
                                      ? void 0
                                      : a.thumbnail) || "",
                                };
                              })),
                              n(s),
                              c(""),
                              (e.next = 21);
                            break;
                          case 18:
                            (e.prev = 18),
                              (e.t0 = e.catch(3)),
                              console.error(e.t0);
                          case 21:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[3, 18]]
                  );
                })
              );
              return function (a) {
                return e.apply(this, arguments);
              };
            })(),
            f = (function () {
              var e = Object(B.a)(
                C.a.mark(function e(a) {
                  var n, r;
                  return C.a.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (
                              (console.log("bookId", a),
                              (n = t.find(function (e) {
                                return e.bookId === a;
                              })),
                              S.loggedIn() ? S.getToken() : null)
                            ) {
                              e.next = 5;
                              break;
                            }
                            return e.abrupt("return", !1);
                          case 5:
                            return (
                              (e.prev = 5),
                              (e.next = 8),
                              v({ variables: { bookToSave: n } })
                            );
                          case 8:
                            (r = e.sent),
                              r.data,
                              b([].concat(Object(x.a)(d), [n.bookId])),
                              (e.next = 16);
                            break;
                          case 13:
                            (e.prev = 13),
                              (e.t0 = e.catch(5)),
                              console.error(e.t0);
                          case 16:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[5, 13]]
                  );
                })
              );
              return function (a) {
                return e.apply(this, arguments);
              };
            })();
          return i.a.createElement(
            i.a.Fragment,
            null,
            i.a.createElement(
              T.a,
              { className: "text-light bg-dark" },
              i.a.createElement(
                F.a,
                null,
                i.a.createElement(
                  "p",
                  { className: "display-4 text-center" },
                  "Search for Books!"
                ),
                i.a.createElement(
                  L.a,
                  { onSubmit: E },
                  i.a.createElement(
                    L.a.Row,
                    null,
                    i.a.createElement(
                      _.a,
                      { xs: 12, md: 8 },
                      i.a.createElement(L.a.Control, {
                        name: "searchInput",
                        value: l,
                        onChange: function (e) {
                          return c(e.target.value);
                        },
                        type: "text",
                        size: "lg",
                        placeholder: "Book's name",
                      })
                    ),
                    i.a.createElement(
                      _.a,
                      { xs: 12, md: 4 },
                      i.a.createElement(
                        $.a,
                        { type: "submit", variant: "success", size: "lg" },
                        "Submit Search"
                      )
                    )
                  )
                )
              )
            ),
            i.a.createElement(
              F.a,
              null,
              i.a.createElement(
                "h2",
                null,
                t.length
                  ? "Viewing ".concat(t.length, " results:")
                  : "Search for a book to begin"
              ),
              i.a.createElement(
                q.a,
                null,
                t.map(function (e) {
                  return i.a.createElement(
                    P.a,
                    { key: e.bookId, className: "cardBody", border: "dark" },
                    e.image
                      ? i.a.createElement(P.a.Img, {
                          src: e.image,
                          alt: "The cover for ".concat(e.title),
                          variant: "top",
                        })
                      : null,
                    i.a.createElement(
                      P.a.Body,
                      null,
                      i.a.createElement(P.a.Title, null, e.title),
                      i.a.createElement(
                        "p",
                        { className: "small" },
                        "Authors: ",
                        e.authors
                      ),
                      i.a.createElement(P.a.Text, null, e.description),
                      S.loggedIn() &&
                        i.a.createElement(
                          $.a,
                          {
                            disabled:
                              null === d || void 0 === d
                                ? void 0
                                : d.some(function (a) {
                                    return a === e.bookId;
                                  }),
                            className: (
                              null === d || void 0 === d
                                ? void 0
                                : d.some(function (a) {
                                    return a === e.bookId;
                                  })
                            )
                              ? "btn-block btn-success"
                              : "btn-block btn-info",
                            onClick: function () {
                              return f(e.bookId);
                            },
                          },
                          (
                            null === d || void 0 === d
                              ? void 0
                              : d.some(function (a) {
                                  return a === e.bookId;
                                })
                          )
                            ? "\u2764\ufe0f Saved to favourite!"
                            : "\u2795 Add this Book to favourite!"
                        )
                    )
                  );
                })
              )
            )
          );
        },
        H = t(148),
        R = function () {
          var e = Object(s.useState)({}),
            a = Object(N.a)(e, 2),
            t = (a[0], a[1], Object(H.a)(G)),
            n = t.data,
            r = t.loading,
            o = Object(D.a)(V),
            l = Object(N.a)(o, 2),
            c = l[0],
            u =
              (l[1].data,
              (function () {
                var e = Object(B.a)(
                  C.a.mark(function e(a) {
                    var t;
                    return C.a.wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.prev = 0),
                                (e.next = 3),
                                c({ variables: { bookId: a } })
                              );
                            case 3:
                              (t = e.sent), t.data, A(a), (e.next = 12);
                              break;
                            case 9:
                              (e.prev = 9),
                                (e.t0 = e.catch(0)),
                                console.error(e.t0);
                            case 12:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[0, 9]]
                    );
                  })
                );
                return function (a) {
                  return e.apply(this, arguments);
                };
              })());
          return r
            ? i.a.createElement(
                "div",
                { class: "spinner-border", role: "status" },
                i.a.createElement("span", { class: "sr-only" }, "Loading...")
              )
            : i.a.createElement(
                i.a.Fragment,
                null,
                i.a.createElement(
                  T.a,
                  { fluid: !0, className: "text-light bg-dark" },
                  i.a.createElement(
                    F.a,
                    null,
                    i.a.createElement(
                      "button",
                      { className: "btn-lg disabled  px-4 py-2 w-100" },
                      "Your favourite Books",
                      " ",
                      i.a.createElement(
                        "span",
                        { className: "badge badge-danger display-2" },
                        n.me.savedBooks.length
                      )
                    )
                  )
                ),
                i.a.createElement(
                  F.a,
                  null,
                  i.a.createElement(
                    q.a,
                    { className: "bg-info p-3 " },
                    n.me.savedBooks.map(function (e) {
                      return i.a.createElement(
                        P.a,
                        {
                          key: e.bookId,
                          border: "dark",
                          className: "view overlay zoom cardBody",
                        },
                        e.image
                          ? i.a.createElement(P.a.Img, {
                              src: e.image,
                              alt: "The cover for ".concat(e.title),
                              variant: "top",
                            })
                          : null,
                        i.a.createElement(
                          P.a.Body,
                          null,
                          i.a.createElement(P.a.Title, null, e.title),
                          i.a.createElement(
                            "p",
                            { className: "small" },
                            "Authors: ",
                            e.authors
                          ),
                          i.a.createElement(P.a.Text, null, e.description),
                          i.a.createElement(
                            $.a,
                            {
                              className: "btn-block btn-danger",
                              onClick: function () {
                                return u(e.bookId);
                              },
                            },
                            "\ud83d\uddd1\ufe0f Delete this Book!"
                          )
                        )
                      );
                    })
                  )
                )
              );
        },
        W = t(147),
        Q = t(146),
        X = t(140),
        Z = t(149),
        ee = t(48),
        ae = t(137),
        te = function () {
          var e = Object(s.useState)({ username: "", email: "", password: "" }),
            a = Object(N.a)(e, 2),
            t = a[0],
            n = a[1],
            r = Object(s.useState)(!1),
            o = Object(N.a)(r, 1)[0],
            l = Object(s.useState)(!1),
            c = Object(N.a)(l, 2),
            u = c[0],
            m = c[1],
            b = Object(D.a)(J),
            p = Object(N.a)(b, 2),
            g = p[0],
            v = p[1].data;
          Object(s.useEffect)(
            function () {
              v && S.login(v.signUp.token);
            },
            [v]
          );
          var k = function (e) {
              var a = e.target,
                r = a.name,
                o = a.value;
              n(Object(d.a)(Object(d.a)({}, t), {}, Object(ee.a)({}, r, o)));
            },
            E = (function () {
              var e = Object(B.a)(
                C.a.mark(function e(a) {
                  var r;
                  return C.a.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              a.preventDefault(),
                              !1 === a.currentTarget.checkValidity() &&
                                (a.preventDefault(), a.stopPropagation()),
                              (e.prev = 3),
                              (e.next = 6),
                              g({ variables: Object(d.a)({}, t) })
                            );
                          case 6:
                            (r = e.sent), r.data, (e.next = 14);
                            break;
                          case 10:
                            (e.prev = 10),
                              (e.t0 = e.catch(3)),
                              console.error(e.t0),
                              m(!0);
                          case 14:
                            n({ username: "", email: "", password: "" });
                          case 15:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[3, 10]]
                  );
                })
              );
              return function (a) {
                return e.apply(this, arguments);
              };
            })();
          return i.a.createElement(
            i.a.Fragment,
            null,
            i.a.createElement(
              L.a,
              { noValidate: !0, validated: o, onSubmit: E },
              i.a.createElement(
                ae.a,
                {
                  dismissible: !0,
                  onClose: function () {
                    return m(!1);
                  },
                  show: u,
                  variant: "danger",
                },
                "Something went wrong with your signup!"
              ),
              i.a.createElement(
                L.a.Group,
                null,
                i.a.createElement(
                  L.a.Label,
                  { htmlFor: "username" },
                  "Username"
                ),
                i.a.createElement(L.a.Control, {
                  type: "text",
                  placeholder: "Your username",
                  name: "username",
                  onChange: k,
                  value: t.username,
                  required: !0,
                }),
                i.a.createElement(
                  L.a.Control.Feedback,
                  { type: "invalid" },
                  "Username is required!"
                )
              ),
              i.a.createElement(
                L.a.Group,
                null,
                i.a.createElement(L.a.Label, { htmlFor: "email" }, "Email"),
                i.a.createElement(L.a.Control, {
                  type: "email",
                  placeholder: "Your email address",
                  name: "email",
                  onChange: k,
                  value: t.email,
                  required: !0,
                }),
                i.a.createElement(
                  L.a.Control.Feedback,
                  { type: "invalid" },
                  "Email is required!"
                )
              ),
              i.a.createElement(
                L.a.Group,
                null,
                i.a.createElement(
                  L.a.Label,
                  { htmlFor: "password" },
                  "Password"
                ),
                i.a.createElement(L.a.Control, {
                  type: "password",
                  placeholder: "Your password",
                  name: "password",
                  onChange: k,
                  value: t.password,
                  required: !0,
                }),
                i.a.createElement(
                  L.a.Control.Feedback,
                  { type: "invalid" },
                  "Password is required!"
                )
              ),
              i.a.createElement(
                $.a,
                {
                  disabled: !(t.username && t.email && t.password),
                  type: "submit",
                  variant: "success",
                },
                "Submit"
              )
            )
          );
        },
        ne = function () {
          var e = Object(s.useState)({ email: "", password: "" }),
            a = Object(N.a)(e, 2),
            t = a[0],
            n = a[1],
            r = Object(s.useState)(!1),
            o = Object(N.a)(r, 1)[0],
            l = Object(s.useState)(!1),
            c = Object(N.a)(l, 2),
            u = c[0],
            m = c[1],
            b = function (e) {
              var a = e.target,
                r = a.name,
                o = a.value;
              n(Object(d.a)(Object(d.a)({}, t), {}, Object(ee.a)({}, r, o)));
            },
            p = (function () {
              var e = Object(B.a)(
                C.a.mark(function e(a) {
                  var r, o, l, c;
                  return C.a.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              a.preventDefault(),
                              !1 === a.currentTarget.checkValidity() &&
                                (a.preventDefault(), a.stopPropagation()),
                              (e.prev = 3),
                              (e.next = 6),
                              z(t)
                            );
                          case 6:
                            if ((r = e.sent).ok) {
                              e.next = 9;
                              break;
                            }
                            throw new Error("something went wrong!");
                          case 9:
                            return (e.next = 11), r.json();
                          case 11:
                            (o = e.sent),
                              (l = o.token),
                              (c = o.user),
                              console.log(c),
                              S.login(l),
                              (e.next = 22);
                            break;
                          case 18:
                            (e.prev = 18),
                              (e.t0 = e.catch(3)),
                              console.error(e.t0),
                              m(!0);
                          case 22:
                            n({ username: "", email: "", password: "" });
                          case 23:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[3, 18]]
                  );
                })
              );
              return function (a) {
                return e.apply(this, arguments);
              };
            })();
          return i.a.createElement(
            i.a.Fragment,
            null,
            i.a.createElement(
              L.a,
              { noValidate: !0, validated: o, onSubmit: p },
              i.a.createElement(
                ae.a,
                {
                  dismissible: !0,
                  onClose: function () {
                    return m(!1);
                  },
                  show: u,
                  variant: "danger",
                },
                "Something went wrong with your login credentials!"
              ),
              i.a.createElement(
                L.a.Group,
                null,
                i.a.createElement(L.a.Label, { htmlFor: "email" }, "Email"),
                i.a.createElement(L.a.Control, {
                  type: "text",
                  placeholder: "Your email",
                  name: "email",
                  onChange: b,
                  value: t.email,
                  required: !0,
                }),
                i.a.createElement(
                  L.a.Control.Feedback,
                  { type: "invalid" },
                  "Email is required!"
                )
              ),
              i.a.createElement(
                L.a.Group,
                null,
                i.a.createElement(
                  L.a.Label,
                  { htmlFor: "password" },
                  "Password"
                ),
                i.a.createElement(L.a.Control, {
                  type: "password",
                  placeholder: "Your password",
                  name: "password",
                  onChange: b,
                  value: t.password,
                  required: !0,
                }),
                i.a.createElement(
                  L.a.Control.Feedback,
                  { type: "invalid" },
                  "Password is required!"
                )
              ),
              i.a.createElement(
                $.a,
                {
                  disabled: !(t.email && t.password),
                  type: "submit",
                  variant: "success",
                },
                "Submit"
              )
            )
          );
        },
        re = t(74),
        oe = t(84),
        le = function () {
          var e = Object(s.useState)(!1),
            a = Object(N.a)(e, 2),
            t = a[0],
            n = a[1];
          return i.a.createElement(
            i.a.Fragment,
            null,
            i.a.createElement(
              W.a,
              { bg: "dark", variant: "dark", expand: "lg" },
              i.a.createElement(
                F.a,
                { fluid: !0 },
                i.a.createElement(
                  W.a.Brand,
                  { as: b.b, to: "/" },
                  i.a.createElement(
                    "p",
                    { className: "flex flex-wrap " },
                    " ",
                    i.a.createElement(oe.a, {
                      icon: re.a,
                      className: "text-primary ",
                    }),
                    " ",
                    i.a.createElement(
                      "span",
                      { className: "text-warning " },
                      " Google Books Search"
                    )
                  )
                ),
                i.a.createElement(W.a.Toggle, { "aria-controls": "navbar" }),
                i.a.createElement(
                  W.a.Collapse,
                  { id: "navbar" },
                  i.a.createElement(
                    Q.a,
                    { className: "ml-auto" },
                    i.a.createElement(
                      Q.a.Link,
                      { as: b.b, to: "/" },
                      "Search For Books"
                    ),
                    S.loggedIn()
                      ? i.a.createElement(
                          i.a.Fragment,
                          null,
                          i.a.createElement(
                            Q.a.Link,
                            { as: b.b, to: "/saved" },
                            "See Your Books"
                          ),
                          i.a.createElement(
                            Q.a.Link,
                            { onClick: S.logout },
                            "Logout"
                          )
                        )
                      : i.a.createElement(
                          Q.a.Link,
                          {
                            onClick: function () {
                              return n(!0);
                            },
                          },
                          "Login/Sign Up"
                        )
                  )
                )
              )
            ),
            i.a.createElement(
              X.a,
              {
                size: "lg",
                show: t,
                onHide: function () {
                  return n(!1);
                },
                "aria-labelledby": "signup-modal",
              },
              i.a.createElement(
                Z.a.Container,
                { defaultActiveKey: "login" },
                i.a.createElement(
                  X.a.Header,
                  { closeButton: !0 },
                  i.a.createElement(
                    X.a.Title,
                    { id: "signup-modal" },
                    i.a.createElement(
                      Q.a,
                      { variant: "pills" },
                      i.a.createElement(
                        Q.a.Item,
                        null,
                        i.a.createElement(
                          Q.a.Link,
                          { eventKey: "login" },
                          "Login"
                        )
                      ),
                      i.a.createElement(
                        Q.a.Item,
                        null,
                        i.a.createElement(
                          Q.a.Link,
                          { eventKey: "signup" },
                          "Sign Up"
                        )
                      )
                    )
                  )
                ),
                i.a.createElement(
                  X.a.Body,
                  null,
                  i.a.createElement(
                    Z.a.Content,
                    null,
                    i.a.createElement(
                      Z.a.Pane,
                      { eventKey: "login" },
                      i.a.createElement(ne, {
                        handleModalClose: function () {
                          return n(!1);
                        },
                      })
                    ),
                    i.a.createElement(
                      Z.a.Pane,
                      { eventKey: "signup" },
                      i.a.createElement(te, {
                        handleModalClose: function () {
                          return n(!1);
                        },
                      })
                    )
                  )
                )
              )
            ),
            S.loggedIn()
              ? i.a.createElement(
                  "h4",
                  { className: "px-3 bg-dark text-center" },
                  i.a.createElement(oe.a, {
                    icon: re.b,
                    className: "text-danger ml-4",
                  }),
                  " ",
                  i.a.createElement(
                    "span",
                    { className: "text-white " },
                    S.getProfile().data.username
                  ),
                  " "
                )
              : ""
          );
        };
      var ce = function () {
        var e = new g.a({ uri: "/graphql" }),
          a = new v.a(function (e, a) {
            return (
              e.setContext(function (e) {
                var a = e.headers,
                  t = void 0 === a ? {} : a;
                return {
                  headers: Object(d.a)(
                    Object(d.a)({}, t),
                    {},
                    { authorization: S.loggedIn() ? S.getToken() : null }
                  ),
                };
              }),
              a(e)
            );
          }),
          t = new k.a({ cache: new E.a(), link: Object(f.a)(a, e) });
        return i.a.createElement(
          h.a,
          { client: t },
          i.a.createElement(
            b.a,
            null,
            i.a.createElement(
              i.a.Fragment,
              null,
              i.a.createElement(le, null),
              i.a.createElement(
                p.c,
                null,
                i.a.createElement(p.a, { exact: !0, path: "/", component: M }),
                i.a.createElement(p.a, {
                  exact: !0,
                  path: "/saved",
                  component: R,
                }),
                i.a.createElement(p.a, {
                  render: function () {
                    return i.a.createElement(
                      "h1",
                      { className: "display-2" },
                      "Wrong page!"
                    );
                  },
                })
              )
            )
          )
        );
      };
      m.a.render(i.a.createElement(ce, null), document.getElementById("root"));
    },
    90: function (e, a, t) {},
  },
  [[107, 1, 2]],
]);
//# sourceMappingURL=main.df3040aa.chunk.js.map
