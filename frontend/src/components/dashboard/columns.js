export const columns = [
    {
        field: 'submittedAt',
        title: 'Date',
        width: 40,
        type: 'date',
        dateSetting: { locale: 'en-GB' },
        defaultSort: 'desc',
        filterPlaceholder: 'Filter Date'
    },
    {
        field: 'Contacted?',
        title: 'Contacted?',
        width: 30,
        filterPlaceholder: 'Filter Contacted'
    },
    {
        field: 'ContactName',
        title: 'Contact Name',
        width: 85,
        filterPlaceholder: 'Filter Name'
    },
    {
        field: 'Company Name',
        title: 'Company Name',
        width: 100,
        filterPlaceholder: 'Filter Company'
    },
    {
        field: 'Position in Company',
        title: 'Position in Company',
        width: 85,
        emptyValue: () => <em>N/A</em>,
        filtering: false
    },
    {
        field: 'Trading',
        title: 'Currently Trading?',
        width: 85,
        lookup: { true: 'Yes', false: 'No' },
        filterPlaceholder: 'Filter Trading'
    },
    {
        field: 'Email',
        title: 'Email',
        width: 85,
        filterPlaceholder: 'Filter Email'
    },
    {
        field: 'ContactNumber',
        title: 'Phone',
        width: 60,
        filterPlaceholder: 'Filter Phone'
    },
    {
        field: 'Phone Contact',
        title: 'Phone Contact?',
        width: 40,
        lookup: { on: 'Yes' },
        emptyValue: () => 'No',
        filterPlaceholder: 'Filter Contact'
    },
    {
        field: 'Email Contact',
        title: 'Email Contact?',
        width: 40,
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
