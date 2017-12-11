Ext.define("CommentEntry", {
  extend: "Ext.data.Model",
  fields: [
    {
      name: "owner",
      type: "auto",
      mapping: "owner.userName"
    },
    {
      name: "description",
      type: "auto"
    }
  ]
});