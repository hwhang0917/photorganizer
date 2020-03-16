import Uppy from "@uppy/core";
import Dashboard from "@uppy/dashboard";
import GoogleDrive from "@uppy/google-drive";

const uppy = Uppy({
  debug: true,
  autoProceed: false,
  restrictions: {
    maxFileSize: 1000000,
    maxNumberOfFiles: 3,
    minNumberOfFiles: 1,
    allowedFileTypes: ["image/*"]
  }
})
  .use(Dashboard, {
    trigger: "#UppyModalOpenerBtn",
    inline: false,
    target: ".DashboardContainer",
    replaceTargetContent: true,
    showProgressDetails: true,
    note: "Images only, 2–3 files, up to 1 MB",
    height: 500,
    width: 500,
    metaFields: [
      {
        id: "location",
        name: "location",
        placeholder: "Location where the photo was taken"
      }
    ],
    browserBackButtonClose: true
  })
  .use(GoogleDrive, {
    target: Dashboard,
    companionUrl: "https://companion.uppy.io"
  });
