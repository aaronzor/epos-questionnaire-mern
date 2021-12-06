export const columns = [
    {
        field: 'submittedAt',
        title: 'Date',
        cellStyle: { width: '50px' },
        type: 'date',
        dateSetting: { locale: 'en-GB' },
        defaultSort: 'desc',
        filterPlaceholder: 'Filter Date'
    },
    {
        field: 'Contacted?',
        title: 'Contacted?',
        emptyValue: () => 'No',
        cellStyle: { width: '150px' },
        filterPlaceholder: 'Filter Contacted'
    },
    {
        field: 'ContactName',
        title: 'Contact Name',
        cellStyle: { width: '150px' },
        filtering: false,
        filterPlaceholder: 'Filter Name'
    },
    {
        field: 'Company Name',
        title: 'Company Name',
        cellStyle: { width: '150px' },
        filtering: false,
        filterPlaceholder: 'Filter Company'
    },
    {
        field: 'Position in Company',
        title: 'Position in Company',
        cellStyle: { width: '150px' },
        emptyValue: () => <em>N/A</em>,
        filtering: false
    },

    {
        field: 'Email',
        title: 'Email',
        cellStyle: { width: '150px' },
        filtering: false,
        filterPlaceholder: 'Filter Email'
    },
    {
        field: 'ContactNumber',
        title: 'Phone',
        cellStyle: { width: '150px' },
        filtering: false,
        filterPlaceholder: 'Filter Phone'
    },
    {
        field: 'Trading',
        title: 'Currently Trading?',
        cellStyle: { width: '150px' },
        lookup: { true: 'Yes', false: 'No' },
        filterPlaceholder: 'Filter Trading'
    },
    {
        field: 'Phone Contact',
        title: 'Phone Contact?',
        cellStyle: { width: '150px' },
        lookup: { on: 'Yes' },
        emptyValue: () => 'No',
        filterPlaceholder: 'Filter Contact'
    },

    {
        field: 'Email Contact',
        title: 'Email Contact?',
        cellStyle: { width: '150px' },
        lookup: { on: 'Yes' },
        emptyValue: () => 'No',
        filterPlaceholder: 'Filter Contact'
    },
    {
        field: 'Full EPOS Setup',
        title: 'Full EPOS Setup',
        width: 150,
        filtering: false,
        hidden: true
    },
    {
        field: 'System & Applications',
        title: 'System & Applications',
        width: 150,
        hidden: true
    },
    {
        field: 'Software Only',
        title: 'Software Only',
        width: 150,
        hidden: true
    },
    {
        field: 'Unsure, Need Advice',
        title: 'Unsure, Need Advice',
        width: 150,
        hidden: true
    },
    { field: 'Retail', title: 'Retail', width: 150, hidden: true },
    { field: 'Hospitality', title: 'Hospitality', width: 150, hidden: true },
    { field: 'Other', title: 'Other', width: 150, hidden: true },
    {
        field: 'Other business info',
        title: 'Other Industry?',
        width: 150,
        hidden: true
    },
    {
        field: 'Cloud Software',
        title: 'Cloud Software',
        width: 150,
        hidden: true
    },
    { field: 'Card Readers', title: 'Card Readers', width: 150, hidden: true },
    {
        field: 'Online Ordering',
        title: 'Online Ordering',
        width: 150,
        hidden: true
    },
    { field: 'Other Needs', title: 'Other Needs?', width: 150, hidden: true },
    { field: '_id', title: 'ID', hide: false, width: 150, hidden: true }
];
