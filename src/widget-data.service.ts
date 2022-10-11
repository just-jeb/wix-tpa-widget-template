export const fetchData: () => Promise<DataItem[]> = async () => {
    // This is where you fetch the data from remote (if any exists)
    return new Promise((resolve) => setTimeout(
        // A simulated remote response (delayed by 2 seconds)
        () => resolve([
            {
                id: '1',
                content: "I am a WSR list Item",
                hint: "Called ListItemSelect",
                dateCreated: "21 Sep 1988",
                pageId: 'website-channel-page',
            },
            {
                id: '2',
                content: "I am brought from remote",
                hint: 'A simulated one of course',
                dateCreated: "16 May 2016",
                pageId: 'business-info-lazy',
            },
            {
                id: '3',
                content: "I am clickable",
                hint: "The CTAs are clickable too",
                dateCreated: "11 Dec 2019",
                pageId: 'home'
            },
        ]),
        2000
    ));
}