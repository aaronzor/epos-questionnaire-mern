export const columns = [
    {
        field: 'submittedAt',
        title: 'Date',
        //cellStyle: { width: '50px' },
        type: 'date',
        dateSetting: { locale: 'en-GB' },
        defaultSort: 'desc',
        filterPlaceholder: 'Filter Date'
    },
    {
        field: 'contacted',
        title: 'Contacted',
        emptyValue: () => 'No',
        //cellStyle: { width: '150px' },
        lookup: { true: 'Yes', false: 'No' },
        filterPlaceholder: 'Filter Contacted',
        filtering: false
    },
    {
        field: 'contactName',
        title: 'Name',
        //cellStyle: { width: '150px' },
        filtering: false,
        filterPlaceholder: 'Filter Name'
    },
    {
        field: 'companyName',
        title: 'Company',
        //cellStyle: { width: '150px' },
        filtering: false,
        filterPlaceholder: 'Filter Company'
    },
    {
        field: 'positionInCompany',
        title: 'Position',
        //cellStyle: { width: '150px' },
        emptyValue: () => <em>N/A</em>,
        filtering: false
    },

    {
        field: 'email',
        title: 'Email',
        //cellStyle: { width: '150px' },
        filtering: false,
        filterPlaceholder: 'Filter Email'
    },
    {
        field: 'contactNumber',
        title: 'Phone',
        //cellStyle: { width: '150px' },
        filtering: false,
        filterPlaceholder: 'Filter Phone'
    },
    {
        field: 'trading',
        title: 'Trading',
        //cellStyle: { width: '150px' },
        lookup: { true: 'Yes', false: 'No' },
        filterPlaceholder: 'Filter Trading',
        filtering: false
    },
    {
        field: 'phoneContact',
        title: 'Phone Contact?',
        //cellStyle: { width: '150px' },
        lookup: { on: 'Yes' },
        emptyValue: () => 'No',
        filterPlaceholder: 'Filter Contact',
        filtering: false,
        hidden: true
    },

    {
        field: 'emailContact',
        title: 'Email Contact?',
        //cellStyle: { width: '150px' },
        lookup: { on: 'Yes' },
        emptyValue: () => 'No',
        filterPlaceholder: 'Filter Contact',
        filtering: false,
        hidden: true
    },
    {
        field: 'meeting',
        title: 'Consultation',
        //cellStyle: { width: '150px' },
        lookup: { on: 'Yes' },
        emptyValue: () => 'No',
        filterPlaceholder: 'Filter Consultation',
        filtering: false,
        hidden: true
    },
    {
        field: 'updateEpos',
        title: 'Update Existing EPOS',
        width: 150,
        filtering: false,
        hidden: true
    },
    {
        field: 'newToEpos',
        title: 'New to EPOS',
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
        field: 'cloudReporting',
        title: 'Cloud Reporing',
        width: 150,
        hidden: true
    },
    { field: 'stockControl', title: 'Stock Control', width: 150, hidden: true },
    {
        field: 'tableOrdering',
        title: 'Table Ordering',
        width: 150,
        hidden: true
    },
    {
        field: 'onlineOrdering',
        title: 'Online Ordering',
        width: 150,
        hidden: true
    },
    { field: 'otherNeeds', title: 'Other Needs?', width: 150, hidden: true },
    { field: '_id', title: 'ID', hide: false, width: 150, hidden: true }
];
