let mas = [{
        cpu: 'intel',
        info: {
            cores: 2,
            сache: 3
        }
    },
    {
        cpu: 'intel',
        info: {
            cores: 4,
            сache: 4
        }
    },
    {
        cpu: 'amd',
        info: {
            cores: 1,
            сache: 1
        }
    },
    {
        cpu: 'intel',
        info: {
            cores: 3,
            сache: 2
        }
    },
    {
        cpu: 'amd',
        info: {
            cores: 4,
            сache: 2
        }
    }
];

mas.sort(function (a, b) {
    return a.info.cores - b.info.cores
})

console.log(mas);