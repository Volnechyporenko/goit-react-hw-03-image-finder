(this["webpackJsonphomework2-feedback"]=this["webpackJsonphomework2-feedback"]||[]).push([[0],{11:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__3Z3Um","ImageGalleryItem-image":"ImageGalleryItem_ImageGalleryItem-image__2ZI3J"}},12:function(e,t,a){e.exports={Overlay:"Modal_Overlay__3MvqD",Modal:"Modal_Modal__Xud1u"}},14:function(e,t,a){e.exports={container:"Loader_container__2bDP1"}},15:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__2QPNo"}},16:function(e,t,a){e.exports={Button:"Button_Button__2N9s8"}},22:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a(1),r=a.n(o),c=a(8),s=a.n(c),l=(a(22),a(3)),i=a(4),u=a(6),m=a(5),h=a(13),d=a.n(h),b=(a(44),a(14)),p=a.n(b),g=function(){return Object(n.jsx)("div",{className:p.a.container,children:Object(n.jsx)(d.a,{type:"Audio",color:"#D21F3C",height:40,width:140})})},j=a(11),f=a.n(j),_=function(e){var t=e.image,a=e.onImageClick,o=t.webformatURL,r=t.tags;return Object(n.jsx)("li",{className:f.a.ImageGalleryItem,onClick:function(){return a(t)},children:Object(n.jsx)("img",{src:o,alt:r,className:f.a["ImageGalleryItem-image"]})})},y=a(15),O=a.n(y),v=function(e){var t=e.images,a=e.onImageClick;return Object(n.jsx)("ul",{className:O.a.ImageGallery,children:t.map((function(e){return Object(n.jsx)(_,{image:e,onImageClick:a},e.id)}))})},S=a(7),x=a.n(S),I=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={search:""},e.handleChange=function(t){e.setState({search:t.target.value})},e.handleSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state.search)},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.state.search;return Object(n.jsx)("header",{className:x.a.Searchbar,children:Object(n.jsxs)("form",{className:x.a.SearchForm,onSubmit:this.handleSubmit,children:[Object(n.jsx)("button",{type:"submit",className:x.a["SearchForm-button"],children:Object(n.jsx)("span",{className:x.a["SearchForm-button-label"],children:"Search"})}),Object(n.jsx)("input",{className:x.a["SearchForm-input"],type:"text",autocomplete:"off",autofocus:!0,placeholder:"Search images and photos",onChange:this.handleChange,value:e})]})})}}]),a}(o.Component),k=a(16),w=a.n(k),C=function(e){var t=e.onClick;return Object(n.jsx)("button",{className:w.a.Button,onClick:t,children:"Load more"})},M=a(12),N=a.n(M),F=document.querySelector("#modal-root"),G=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).handleKeyDown=function(t){"Escape"===t.code&&e.props.onClose()},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){return Object(c.createPortal)(Object(n.jsx)("div",{className:N.a.Overlay,children:Object(n.jsx)("div",{className:N.a.Modal,children:this.props.children})}),F)}}]),a}(o.Component),A=a(9),D=a.n(A),B="https://pixabay.com/api/",L="key=19554713-985e885829a4f41904dd25c99",q=12,E="resolved",K="pending",U="notFound",J="error",P="idle",H=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={images:[],status:P,query:"",loading:!1,page:1,showModal:!1,modalImage:{}},e.closeModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e.onImageClick=function(t){e.setState({modalImage:t,showModal:!0})},e.onSubmit=function(t){t&&e.setState({query:t,images:[],page:1})},e.onLoadMore=function(){e.setState((function(e){return{page:e.page+1}}))},e}return Object(i.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a=this,n=this.state,o=n.query,r=n.page,c=n.images,s=K,l=E,i=U,u=J;t.query===o&&t.page===r||(this.setState({status:s}),fetch("".concat(B,"?").concat(L,"&q=").concat(o,"&image_type=photo&per_page=").concat(q,"&page=").concat(r)).then((function(e){return e.ok?e.json():Promise.reject(new Error("\u041d\u0435\u0442 \u043a\u0430\u0440\u0442\u0438\u043d\u043e\u043a"))})).then((function(e){return a.setState((function(t){return{images:t.images.concat(e.hits),status:e.totalHits>0?l:i}}))})).catch((function(e){return a.setState({status:u})}))),t.images.length&&c.length>t.images.length&&window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}},{key:"render",value:function(){var e=this.state,t=e.images,a=e.status,o=e.showModal,r=e.modalImage,c=K,s=E,l=U;return Object(n.jsxs)("div",{className:D.a.App,children:[Object(n.jsx)(I,{onSubmit:this.onSubmit}),(a===s||a===c)&&Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(v,{images:t,onImageClick:this.onImageClick}),a===c?Object(n.jsx)(g,{}):Object(n.jsx)(C,{onClick:this.onLoadMore})]}),a===l&&Object(n.jsx)("div",{children:"Images not found"}),o&&Object(n.jsxs)(G,{onClose:this.closeModal,children:[Object(n.jsx)("img",{className:D.a.modalImage,src:r.largeImageURL,alt:r.tags}),Object(n.jsx)("button",{className:D.a.closeButton,onClick:this.closeModal,children:"X"})]})]})}}]),a}(o.Component);s.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(H,{})}),document.getElementById("root"))},7:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__2WxIB",SearchForm:"Searchbar_SearchForm__1OrjC","SearchForm-button":"Searchbar_SearchForm-button___5Ap8","SearchForm-button-label":"Searchbar_SearchForm-button-label__1mv0G","SearchForm-input":"Searchbar_SearchForm-input__es_DG"}},9:function(e,t,a){e.exports={App:"App_App__xJkO3",modalImage:"App_modalImage__wo03K",closeButton:"App_closeButton__318iK"}}},[[45,1,2]]]);
//# sourceMappingURL=main.d68a317c.chunk.js.map