Ext.define("Bugtracker.view.project.admin.ProjectsTab", {
  extend: "Ext.panel.Panel",
  xtype: "adminprojectstab",

  requires: ["Ext.button.Button", "Ext.Viewport", "Ext.data.Model", "Urls"],

  controller: "project.admin.projectstabcontroller",

  listeners: {
    render: "onRender"
  },

  items: [
    {
      layout: {
        type: "hbox",
        pack: "start",
        align: "stretch"
      },

      margin: "0px 0px 5px 0px",

      items: [
        {
          xtype: "button",
          text: "Create Project",
          margin: "0px 2px 5px 0px",
          handler: "showNewProjectDialog"
        },
        {
          xtype: "button",
          text: "Delete selected",
          margin: "0px 2px 5px 0px",
          handler: "deleteProject"
        },
        {
          xtype: "button",
          text: "Update selected",
          margin: "0px 2px 5px 0px",
          handler: "showUpdateProjectDialog"
        },
        {
          xtype: "button",
          text: "Assign user",
          margin: "0px 2px 5px 0px",
          handler: "showAssignUserDialog"
        },
        {
          xtype: "button",
          text: "Show assigned users",
          margin: "0px 2px 5px 0px",
          handler: "showAssignedUsersDialog"
        },
        {
          xtype: "button",
          text: "Show history",
          margin: "0px 2px 5px 0px",
          handler: "showProjectHistoryDialog"
        }
      ]
    },
    {
      xtype: "adminprojectslist",
      reference: "projectslist-ref",
      bind: {
        store: "{Projects}"
      }
    }
  ]
});
