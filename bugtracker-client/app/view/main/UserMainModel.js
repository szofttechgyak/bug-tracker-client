/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('Bugtracker.view.main.UserMainModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.usermainmodel',

    stores: {
        Tickets: {
          type: "tickets"
        },
        Projects: {
          type: "projects"
        },
        TicketHistory: {
          type: "tickethistory"
        },
        ProjectHistory: {
          type: "projecthistory"
        },
        TicketLifecycle: {
          type: "ticketlifecycle"
        },
        AssignableUsers: {
          type: 'assignableusers'
        },
        AssignedUsers : {
          type: "assignedusers"
        },
        Comments: {
          type: "comments"
        }
      },

    data: {
        name: 'Bugtracker'
    }

    //TODO - add data, formulas and/or methods to support your view
});
