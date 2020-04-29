// import Uppy from "@uppy/core";
// import Dashboard from "@uppy/dashboard";
// import GoogleDrive from "@uppy/google-drive";
// import AwsS3 from "@uppy/aws-s3";
// import routes from "../../routes";

// const uppy = Uppy({
//   id: "uppyUpload",
//   debug: true,
//   autoProceed: false,
//   restrictions: {
//     maxFileSize: 31457280,
//     maxNumberOfFiles: 20,
//     minNumberOfFiles: null,
//     allowedFileTypes: ["image/*", ".jpg", ".jpeg", ".png", ".gif"],
//   },
//   logger: Uppy.debugLogger,
// })
//   .use(Dashboard, {
//     inline: true,
//     target: ".DashboardContainer",
//     closeModalOnClickOutside: true,
//     replaceTargetContent: false,
//     showLinkToFileUploadResult: false,
//     showProgressDetails: true,
//     note: "Images only, 1–3 files, up to 3 MB",
//     height: 500,
//     width: 500,
//     metaFields: [
//       {
//         id: "location",
//         name: "location",
//         placeholder: "Location where the photo was taken",
//       },
//     ],
//     browserBackButtonClose: true,
//   })
//   .use(GoogleDrive, {
//     target: Dashboard,
//     companionUrl: "https://companion.uppy.io",
//   })
//   .use(AwsS3, {
//     fields: [],
//     getUploadParameters(file) {
//       return fetch(`/dashboard/${routes.imageUpload}`, {
//         method: "POST",
//         headers: {
//           "content-type": "application/x-www-form-urlencoded",
//         },
//         body: JSON.stringify({
//           filename: file.name,
//           contentType: file.type,
//         }),
//       })
//         .then((response) => {
//           return response.json();
//         })
//         .then((data) => {
//           console.log(">>>", data);
//           return {
//             method: data.method,
//             url: data.url,
//             fields: data.fields,
//             headers: {
//               "Content-Type": file.type,
//             },
//           };
//         });
//     },
//   });
// uppy.on("complete", (result) => {
//   if (result.successful) {
//     console.log(
//       "Upload complete! We’ve uploaded these files:",
//       result.successful
//     );
//   } else {
//     console.log("Upload error: ", result.failed);
//   }
// });
