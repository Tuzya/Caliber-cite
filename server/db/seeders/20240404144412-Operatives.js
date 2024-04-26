/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Classes', [
      {
        label: 'Штурмовик',
        img: '', // Путь к изображению можно оставить пустым
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        label: 'Поддержка',
        img: '',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        label: 'Медик',
        img: '',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        label: 'Снайпер',
        img: '',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
    await queryInterface.bulkInsert('Operatives', [
      // Штурмовики
      {
        nickname: 'Рекрут', name: '', description: '', squad: '', img: '', icon: '/_next/static/media/recruit.d34281a8.svg', class_id: 1, country: '', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        nickname: 'Волк', name: '', description: '', squad: '', img: '', icon: '/_next/static/media/vympel.66c65973.svg', class_id: 1, country: '', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        nickname: 'Перун', name: '', description: '', squad: '', img: '', icon: '/_next/static/media/alpha.df1b760d.svg', class_id: 1, country: '', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        nickname: 'Ворон', name: '', description: '', squad: '', img: '', icon: '/_next/static/media/sso.4544535f.svg', class_id: 1, country: '', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        nickname: 'Плут', name: '', description: '', squad: '', img: '', icon: '/_next/static/media/22spn.b8b3944e.svg', class_id: 1, country: '', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        nickname: 'Кошмар', name: '', description: '', squad: '', img: '', icon: '/_next/static/media/grom.f1406b62.svg', class_id: 1, country: '', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        nickname: 'Рейн', name: '', description: '', squad: '', img: '', icon: '/_next/static/media/ksk.72f371e5.svg', class_id: 1, country: '', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        nickname: 'Корсар', name: '', description: '', squad: '', img: '', icon: '/_next/static/media/seal.79ddf245.svg', class_id: 1, country: '', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        nickname: 'Стерлинг', name: '', description: '', squad: '', img: '', icon: '/_next/static/media/tfb.f0107ddc.svg', class_id: 1, country: '', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        nickname: 'Авангард', name: '', description: '', squad: '', img: '', icon: '/_next/static/media/raid.64bf8058.svg', class_id: 1, country: '', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        nickname: 'Афела', name: '', description: '', squad: '', img: '', icon: '/_next/static/media/nesher.7b43e5fd.svg', class_id: 1, country: '', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        nickname: 'Фаро', name: '', description: '', squad: '', img: '', icon: '/_next/static/media/ezapac.303417c3.svg', class_id: 1, country: '', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        nickname: 'Мустанг', name: '', description: '', squad: '', img: '', icon: '/_next/static/media/arystan.f32b7806.svg', class_id: 1, country: '', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        nickname: 'Лазутчик', name: '', description: '', squad: '', img: '', icon: '/_next/static/media/sso_rb.fa8cbb70.svg', class_id: 1, country: '', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        nickname: 'Старкад', name: '', description: '', squad: '', img: '', icon: '/_next/static/media/amf.d3916b99.svg', class_id: 1, country: '', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        nickname: 'Шаовэй', name: '', description: '', squad: '', img: '', icon: '/_next/static/media/jiaolong.c015fcca.svg', class_id: 1, country: '', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        nickname: 'Слай', name: '', description: '', squad: '', img: '', icon: '/_next/static/media/cst.94242c41.svg', class_id: 1, country: '', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        nickname: 'Мартелу', name: '', description: '', squad: '', img: '', icon: '/_next/static/media/bope.e0c6c61a.svg', class_id: 1, country: '', createdAt: new Date(), updatedAt: new Date(),
      },

      // Поддержки
      {
        nickname: 'Рекрут', name: '', description: '', squad: '', img: '', icon: '/_next/static/media/recruit.d34281a8.svg', class_id: 2, country: '', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        nickname: 'Алмаз', name: '', description: '', squad: '', img: '', icon: '/_next/static/media/vympel.66c65973.svg', class_id: 2, country: '', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        nickname: 'Сварог', name: '', description: '', squad: '', img: '', icon: '/_next/static/media/alpha.df1b760d.svg', class_id: 2, country: '', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        nickname: 'Спутник', name: '', description: '', squad: '', img: '', icon: '/_next/static/media/sso.4544535f.svg', class_id: 2, country: '', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        nickname: 'Кит', name: '', description: '', squad: '', img: '', icon: '/_next/static/media/22spn.b8b3944e.svg', class_id: 2, country: '', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        nickname: 'Пророк', name: '', description: '', squad: '', img: '', icon: '/_next/static/media/grom.f1406b62.svg', class_id: 2, country: '', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        nickname: 'Штерн', name: '', description: '', squad: '', img: '', icon: '/_next/static/media/ksk.72f371e5.svg', class_id: 2, country: '', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        nickname: 'Бурбон', name: '', description: '', squad: '', img: '', icon: '/_next/static/media/seal.79ddf245.svg', class_id: 2, country: '', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        nickname: 'Бишоп', name: '', description: '', squad: '', img: '', icon: '/_next/static/media/tfb.f0107ddc.svg', class_id: 2, country: '', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        nickname: 'Бастион', name: '', description: '', squad: '', img: '', icon: '/_next/static/media/raid.64bf8058.svg', class_id: 2, country: '', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        nickname: 'Хагана', name: '', description: '', squad: '', img: '', icon: '/_next/static/media/nesher.7b43e5fd.svg', class_id: 2, country: '', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        nickname: 'Матадор', name: '', description: '', squad: '', img: '', icon: '/_next/static/media/ezapac.303417c3.svg', class_id: 2, country: '', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        nickname: 'Тибет', name: '', description: '', squad: '', img: '', icon: '/_next/static/media/arystan.f32b7806.svg', class_id: 2, country: '', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        nickname: 'Зубр', name: '', description: '', squad: '', img: '', icon: '/_next/static/media/sso_rb.fa8cbb70.svg', class_id: 2, country: '', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        nickname: 'Один', name: '', description: '', squad: '', img: '', icon: '/_next/static/media/amf.d3916b99.svg', class_id: 2, country: '', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        nickname: 'Инчжоу', name: '', description: '', squad: '', img: '', icon: '/_next/static/media/jiaolong.c015fcca.svg', class_id: 2, country: '', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        nickname: 'Фортресс', name: '', description: '', squad: '', img: '', icon: '/_next/static/media/cst.94242c41.svg', class_id: 2, country: '', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        nickname: 'Баррейра', name: '', description: '', squad: '', img: '', icon: '/_next/static/media/bope.e0c6c61a.svg', class_id: 2, country: '', createdAt: new Date(), updatedAt: new Date(),
      },

      // Медики
      {
        nickname: 'Рекрут', name: '', description: '', squad: '', img: '', icon: '/_next/static/media/recruit.d34281a8.svg', class_id: 3, country: '', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        nickname: 'Дед', name: '', description: '', squad: '', img: '', icon: '/_next/static/media/vympel.66c65973.svg', class_id: 3, country: '', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        nickname: 'Травник', name: '', description: '', squad: '', img: '', icon: '/_next/static/media/alpha.df1b760d.svg', class_id: 3, country: '', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        nickname: 'Бард', name: '', description: '', squad: '', img: '', icon: '/_next/static/media/sso.4544535f.svg', class_id: 3, country: '', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        nickname: 'Каравай', name: '', description: '', squad: '', img: '', icon: '/_next/static/media/22spn.b8b3944e.svg', class_id: 3, country: '', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        nickname: 'Микола', name: '', description: '', squad: '', img: '', icon: '/_next/static/media/grom.f1406b62.svg', class_id: 3, country: '', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        nickname: 'Шатц', name: '', description: '', squad: '', img: '', icon: '/_next/static/media/ksk.72f371e5.svg', class_id: 3, country: '', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        nickname: 'Монк', name: '', description: '', squad: '', img: '', icon: '/_next/static/media/seal.79ddf245.svg', class_id: 3, country: '', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        nickname: 'Ватсон', name: '', description: '', squad: '', img: '', icon: '/_next/static/media/tfb.f0107ddc.svg', class_id: 3, country: '', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        nickname: 'Велюр', name: '', description: '', squad: '', img: '', icon: '/_next/static/media/raid.64bf8058.svg', class_id: 3, country: '', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        nickname: 'Шаршерет', name: '', description: '', squad: '', img: '', icon: '/_next/static/media/nesher.7b43e5fd.svg', class_id: 3, country: '', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        nickname: 'Мигель', name: '', description: '', squad: '', img: '', icon: '/_next/static/media/ezapac.303417c3.svg', class_id: 3, country: '', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        nickname: 'Багги', name: '', description: '', squad: '', img: '', icon: '/_next/static/media/arystan.f32b7806.svg', class_id: 3, country: '', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        nickname: 'Каваль', name: '', description: '', squad: '', img: '', icon: '/_next/static/media/sso_rb.fa8cbb70.svg', class_id: 3, country: '', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        nickname: 'Фрейр', name: '', description: '', squad: '', img: '', icon: '/_next/static/media/amf.d3916b99.svg', class_id: 3, country: '', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        nickname: 'Яован', name: '', description: '', squad: '', img: '', icon: '/_next/static/media/jiaolong.c015fcca.svg', class_id: 3, country: '', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        nickname: 'Боунс', name: '', description: '', squad: '', img: '', icon: '/_next/static/media/cst.94242c41.svg', class_id: 3, country: '', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        nickname: 'Асаи', name: '', description: '', squad: '', img: '', icon: '/_next/static/media/bope.e0c6c61a.svg', class_id: 3, country: '', createdAt: new Date(), updatedAt: new Date(),
      },

      // Снайперы
      {
        nickname: 'Рекрут', name: '', description: '', squad: '', img: '', icon: '/_next/static/media/recruit.d34281a8.svg', class_id: 4, country: '', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        nickname: 'Стрелок', name: '', description: '', squad: '', img: '', icon: '/_next/static/media/vympel.66c65973.svg', class_id: 4, country: '', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        nickname: 'Сокол', name: '', description: '', squad: '', img: '', icon: '/_next/static/media/alpha.df1b760d.svg', class_id: 4, country: '', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        nickname: 'Комар', name: '', description: '', squad: '', img: '', icon: '/_next/static/media/sso.4544535f.svg', class_id: 4, country: '', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        nickname: 'Тень', name: '', description: '', squad: '', img: '', icon: '/_next/static/media/22spn.b8b3944e.svg', class_id: 4, country: '', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        nickname: 'Стилет', name: '', description: '', squad: '', img: '', icon: '/_next/static/media/grom.f1406b62.svg', class_id: 4, country: '', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        nickname: 'Курт', name: '', description: '', squad: '', img: '', icon: '/_next/static/media/ksk.72f371e5.svg', class_id: 4, country: '', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        nickname: 'Скаут', name: '', description: '', squad: '', img: '', icon: '/_next/static/media/seal.79ddf245.svg', class_id: 4, country: '', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        nickname: 'Арчер', name: '', description: '', squad: '', img: '', icon: '/_next/static/media/tfb.f0107ddc.svg', class_id: 4, country: '', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        nickname: 'Вагабонд', name: '', description: '', squad: '', img: '', icon: '/_next/static/media/raid.64bf8058.svg', class_id: 4, country: '', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        nickname: 'Эйма', name: '', description: '', squad: '', img: '', icon: '/_next/static/media/nesher.7b43e5fd.svg', class_id: 4, country: '', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        nickname: 'Диабло', name: '', description: '', squad: '', img: '', icon: '/_next/static/media/ezapac.303417c3.svg', class_id: 4, country: '', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        nickname: 'Султан', name: '', description: '', squad: '', img: '', icon: '/_next/static/media/arystan.f32b7806.svg', class_id: 4, country: '', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        nickname: 'Бусел', name: '', description: '', squad: '', img: '', icon: '/_next/static/media/sso_rb.fa8cbb70.svg', class_id: 4, country: '', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        nickname: 'Видар', name: '', description: '', squad: '', img: '', icon: '/_next/static/media/amf.d3916b99.svg', class_id: 4, country: '', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        nickname: 'Цанлун', name: '', description: '', squad: '', img: '', icon: '/_next/static/media/jiaolong.c015fcca.svg', class_id: 4, country: '', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        nickname: 'Аваланш', name: '', description: '', squad: '', img: '', icon: '/_next/static/media/cst.94242c41.svg', class_id: 4, country: '', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        nickname: 'Касадор', name: '', description: '', squad: '', img: '', icon: '/_next/static/media/bope.e0c6c61a.svg', class_id: 4, country: '', createdAt: new Date(), updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Classes', null, {});
  },
};
