import{_ as a,o,c as i,z as e,a as n,t as s}from"./chunks/framework.8e8e72cd.js";const v=JSON.parse('{"title":"Scan and Image Preparation (ScanTailor)","description":"","frontmatter":{"title":"Scan and Image Preparation (ScanTailor)"},"headers":[],"relativePath":"guide/user-guide/scan-preparation.md","filePath":"guide/user-guide/scan-preparation.md","lastUpdated":1684435135000}'),r={name:"guide/user-guide/scan-preparation.md"},l={id:"frontmatter-title",tabindex:"-1"},h=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-label":'Permalink to "{{ $frontmatter.title }}"'},"​",-1),c=e("p",null,"When it comes to early modern prints, the available material exists often solely in the form of facsimilia. Although they generally exhibit a good if not very good quality, their overall condition makes them rather unsuited for a direct export in OCR4all. This is the case when the image file contains, aside the mere text, pictures of the book cover or printing surface. Were those images to be binarized during the workflow, black lines will often occur which are due to contrast differences in the original image and will impair both the OCR and the segmentation. Scan rotation and the display of two book pages on the same scan are other, frequent problems.",-1),d=e("p",null,"However, these complications can be easily avoided through the appropriate preparation of the image files. Therefore, scans destined to be processed with OCR4all should ideally only feature the content of each single page meant for the recognition process. At the time, the ideal scan should also contain enough blank page space so as not to impede further steps, such as segmentation. Thus, only the page content deemed irrelevant to the recognition process should be removed while taking care to leave as much of the original scanned page as possible (concretely, this means page margins shouldn’t be entirely removed).",-1),p=e("p",null,"Theoretically, most image editors are suitable (GIMP, Adobe Photoshop, etc.). If you have a PDF available it's also possible to cut and rotate the pages with Adobe Acrobat DC (Batch Processing). However, we advise the user to employ ScanTailor which sustains a considerable data quantity and processes images quickly, efficiently and in a standardized manner. Detailed instructions can be found here.",-1),u=e("p",null,"This step is completely optional and not part of the OCR4all workflow, which is why no support will be provided here. Each user has to decide for himself whether additional preprocessing of this kind would be profitable for his work or even necessary.",-1);function m(t,f,g,b,y,w){return o(),i("div",null,[e("h1",l,[n(s(t.$frontmatter.title)+" ",1),h]),c,d,p,u])}const k=a(r,[["render",m]]);export{v as __pageData,k as default};
