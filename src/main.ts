type A = {
  first: string;
  second: {
    third: string;
    fourth?: string;
    fifth: {
      sixth?: {
        tenth: {
          twelfth?: {
            thirteenth: {
              fifteenth: {
                sixteenth?: {
                  last: 'Достучались';
                };
              };
            };
            fourteenth: string;
          };
        };
        eleventh: string;
      };
      seventh: number;
      eight: string;
    };
  };
};

const a: A = {
  first: 'z',
  second: {
    third: 'f',
    fourth: 'a',
    fifth: {
      sixth: {
        tenth: {
          twelfth: {
            thirteenth: {
              fifteenth: {
                sixteenth: {
                  last: 'Достучались',
                },
              },
            },
            fourteenth: 's',
          },
        },
        eleventh: 'kk',
      },
      seventh: 8,
      eight: 'b',
    },
  },
};

const ласт = a.second.fifth.sixth?.tenth.twelfth?.thirteenth.fifteenth.sixteenth?.last;

if (ласт) {
  console.log(ласт.toUpperCase());
} else {
  console.log('undefined');
}
