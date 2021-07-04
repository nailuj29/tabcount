var count = 0;

const updateTabs = async () => {
	count = (await browser.tabs.query({ currentWindow: true })).length


	browser.browserAction.setBadgeText({
		text: count.toString()
	})
}

browser.tabs.onCreated.addListener(updateTabs)

browser.tabs.onAttached.addListener(updateTabs)

browser.tabs.onRemoved.addListener(updateTabs)

browser.tabs.onDetached.addListener(updateTabs);

updateTabs()
