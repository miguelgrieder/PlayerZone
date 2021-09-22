import { selectAllThreads, selectThread, insertThread, updateThread } from '../../db/ThreadController'

var defaultThreads = [
    {
        selectThread(Jogo)
    }
]

var threads = defaultThreads
if (localStorage && localStorage.getItem('threads')) {
    threads = JSON.parse(localStorage.getItem('threads'));
} else {
    threads = defaultThreads;
    localStorage.setItem('threads', JSON.stringify(defaultThreads));
}