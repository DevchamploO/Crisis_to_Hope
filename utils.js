const filter_words = [
	                        'I', 'me', 'myself', 'suicide', 'depression','down',
	                        'aching', 'anxiety', 'absolutely', 'adrift', 'afraid', 'all',
	                        'alone', 'always', 'bad', 'black and blue', 'burden', 'complete',
	                        'completely', 'constant', 'constantly','definitely', 'despair', 'entire',
	                        'ever', 'every', 'everyone', 'everything', 'full', 'helpless', 'hopeless',
	                        'hurting', 'I can\'t do this', 'I can\'t get this done', 'I can\'t feel better',
	                        'I can\'t get my work done', 'I can\'t get out of bed', 'I can\'t get things to be good',
	                        'I can\'t do things right', 'If I\'m gone', 'If I am gone', 'I\'m so tired',
	                        'I want to be alone', 'insecure', 'lost', 'lonely', 'must', 'never',
	                        'no one cares', 'nothing', 'sad', 'should', 'stressed', 'stuck',
	                        'stupid', 'tired', 'totally', 'unsure', 'untethered', 'upset',
	                        'useless', 'When I am gone', 'whole', 'worthless'
];

exports.get_filter_words = function() {
	return filter_words;
}
