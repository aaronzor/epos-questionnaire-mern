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
        field: 'contacted',
        title: 'Contacted?',
        emptyValue: () => 'No',
        cellStyle: { width: '150px' },
        lookup: { true: 'Yes', false: 'No' },
        filterPlaceholder: 'Filter Contacted'
    },
    {
        field: 'contactName',
        title: 'Contact Name',
        cellStyle: { width: '150px' },
        filtering: false,
        filterPlaceholder: 'Filter Name'
    },
    {
        field: 'companyName',
        title: 'Company Name',
        cellStyle: { width: '150px' },
        filtering: false,
        filterPlaceholder: 'Filter Company'
    },
    {
        field: 'positionInCompany',
        title: 'Position in Company',
        cellStyle: { width: '150px' },
        emptyValue: () => <em>N/A</em>,
        filtering: false
    },

    {
        field: 'email',
        title: 'Email',
        cellStyle: { width: '150px' },
        filtering: false,
        filterPlaceholder: 'Filter Email'
    },
    {
        field: 'contactNumber',
        title: 'Phone',
        cellStyle: { width: '150px' },
        filtering: false,
        filterPlaceholder: 'Filter Phone'
    },
    {
        field: 'trading',
        title: 'Currently Trading?',
        cellStyle: { width: '150px' },
        lookup: { true: 'Yes', false: 'No' },
        filterPlaceholder: 'Filter Trading'
    },
    {
        field: 'phoneContact',
        title: 'Phone Contact?',
        cellStyle: { width: '150px' },
        lookup: { on: 'Yes' },
        emptyValue: () => 'No',
        filterPlaceholder: 'Filter Contact'
    },

    {
        field: 'emailContact',
        title: 'Email Contact?',
        cellStyle: { width: '150px' },
        lookup: { on: 'Yes' },
        emptyValue: () => 'No',
        filterPlaceholder: 'Filter Contact'
    },
    {
        field: 'fullEposSetup',
        title: 'Full EPOS Setup',
        width: 150,
        filtering: false,
        hidden: true
    },
    {
        field: 'systemApplications',
        title: 'System & Applications',
        width: 150,
        hidden: true
    },
    {
        field: 'softwareOnly',
        title: 'Software Only',
        width: 150,
        hidden: true
    },
    {
        field: 'unsureNeedAdvice',
        title: 'Unsure, Need Advice',
        width: 150,
        hidden: true
    },
    { field: 'retail', title: 'Retail', width: 150, hidden: true },
    { field: 'hospitality', title: 'Hospitality', width: 150, hidden: true },
    { field: 'otherIndustry', title: 'Other', width: 150, hidden: true },
    {
        field: 'otherIndustryInfo',
        title: 'Other Industry?',
        width: 150,
        hidden: true
    },
    {
        field: 'cloudSoftware',
        title: 'Cloud Software',
        width: 150,
        hidden: true
    },
    { field: 'cardReaders', title: 'Card Readers', width: 150, hidden: true },
    {
        field: 'onlineOrdering',
        title: 'Online Ordering',
        width: 150,
        hidden: true
    },
    { field: 'otherNeeds', title: 'Other Needs?', width: 150, hidden: true },
    { field: '_id', title: 'ID', hide: false, width: 150, hidden: true }
];
