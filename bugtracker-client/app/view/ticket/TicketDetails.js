Ext.define("Bugtracker.view.ticket.TicketDetails", {
    extend: "Ext.window.Window",
  
    xtype: "ticketdetails",
    floating: true,
    draggable: false,
    centered: true,
    width: '70%',
    y: 50,
    modal: true,
    requires: [
        'Ext.layout.container.Table'
    ],

    layout: {
        type: 'table',
        columns: 5,
        tdAttrs: { style: 'padding: 5px; vertical-align: top;' }
    },

    defaults: {
        xtype: 'panel',
        width: 200,
        autoHeight: false,
        bodyPadding: 5
    },

    listeners: {
        onRender: 'onRenderTicketDetails',
        beforeclose: 'beforecloseTicketDetails'
    },

    initComponent: function () {
        var me = this;
        this.items = [
            {
                title: 'Reporter',
                html: me.reporter
            },
            {
                title: 'Owner',
                html: me.owner
            },
            {
                title: 'Type',
                html: me.type
            },
            {
                title: 'Status',
                html: me.status
            },
            {
                title: 'Spent time',
                html: me.spentTime.toString()
            },
            {
                title: 'Description',
                html: me.description,
                collapsible: true,
                colspan: 5
            },
            // {
			// 	xtype : 'button',
			// 	text : 'Create Ticket',
			// 	margin: '0px 2px 5px 0px',
            //     handler : 'showNewTicketDialog',
            //     projId : me.projectId
			// },
            // {
            //     xtype: "button",
            //     text: "Show ticket history",
            //     margin: "0px 2px 5px 0px",
            //     handler: "showTicketHistoryDialog",
            //     colspan: 5
            // },
            // {
            //     title: 'Tickets',
            //     xtype: 'ticketslist',
            //     id: 'ticketslist-id',
            //     bind: {
            //         store: "{Tickets}"
            //     },
            //     listeners: {
            //         render: "loadTicketsStore"
            //     },
            //     width: '100%',
            //     collapsible: true,
            //     colspan: 5
            // },
        ];

        this.callParent();
    }
  });