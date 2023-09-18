
window.addEventListener('load', add_iframe_and_dest);

const dests = {
    'facility_names': ['中村記念美術館', '金沢能楽美術館', '金箔工芸館', '２１世紀美術館（展覧会ゾーン）', '２１世紀美術館（交流ゾーン）', 'いしかわ生活工芸ミュージアム', '国立工芸館'],
    'business_hours': ['10:00 - 16:30', '10:00 - 18:00', '09:30 - 17:00', '10:00 - 18:00（金・土は20:00まで）', '09:00 - 22:00', '09:00 - 17:00', '09:30 - 17:30'],
    'last_admission_times': ['16:00', '17:30', '16:30', '', '', '16:45', '17:00'],
    'iframes': [
        '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3204.8064723024777!2d136.65798397533098!3d36.558778972316944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5ff833879dfbd437%3A0xae072341cedb9b90!2z6YeR5rKi5biC56uL5Lit5p2R6KiY5b-1576O6KGT6aSo!5e0!3m2!1sja!2sjp!4v1695005098654!5m2!1sja!2sjp" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
        '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3204.6897364331444!2d136.65550577533116!3d36.56159327231602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5ff833811d0d2e81%3A0x3b21865f6aa2603e!2z6YeR5rKi6IO95qW9576O6KGT6aSo!5e0!3m2!1sja!2sjp!4v1695005878142!5m2!1sja!2sjp" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
        '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3204.1878413519044!2d136.6632410753318!3d36.57369097231254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5ff8337335bf6b9b%3A0x30eea5034ceeaa25!2z6YeR5rKi5biC56uL5a6J5rGf6YeR566U5bel6Iq46aSo!5e0!3m2!1sja!2sjp!4v1695005920194!5m2!1sja!2sjp" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
        '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3204.719685398355!2d136.6559501753311!3d36.56087127231636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5ff83380db53b801%3A0x512a01db8b6568c1!2z6YeR5rKiMjHkuJbntIDnvo7ooZPppKg!5e0!3m2!1sja!2sjp!4v1695005957669!5m2!1sja!2sjp" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
        '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3204.719685398355!2d136.6559501753311!3d36.56087127231636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5ff83380db53b801%3A0x512a01db8b6568c1!2z6YeR5rKiMjHkuJbntIDnvo7ooZPppKg!5e0!3m2!1sja!2sjp!4v1695005957669!5m2!1sja!2sjp" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
        '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3204.708800957953!2d136.66140697533115!3d36.561133672316224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5ff8337c4196e471%3A0x3e1251b53e802aa!2z55-z5bed55yM56uL5Lyd57Wx55Sj5qWt5bel6Iq46aSo!5e0!3m2!1sja!2sjp!4v1695006021382!5m2!1sja!2sjp" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
        '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3204.795642319987!2d136.65912897533093!3d36.55904007231689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5ff8339d12c824db%3A0x48adbd92fcae1e14!2z5Zu956uL5bel6Iq46aSo!5e0!3m2!1sja!2sjp!4v1695006061101!5m2!1sja!2sjp" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
    ]
}


function choice_dest(facility_id) {
    let number_of_facility = dests['facility_names'].length;

    const random_num = Math.floor(Math.random() * number_of_facility);
    const choiced_facilityName_and_iframe = {
        'facility': dests['facility_names'][random_num],
        'iframe': dests['iframes'][random_num]
    };

    return choiced_facilityName_and_iframe;
}

function add_iframe_and_dest(params) {
    // iframeをこのページのdivタグのmapクラスの中に追加する

    const dest_and_iframe = choice_dest(params['facility_id']);

    // 1. iframeを追加する
    const map = document.querySelector('.map');
    map.innerHTML = dest_and_iframe['iframe'];

    // 2. 次の目的地を表示する
    const next_dest = document.querySelector('.next_dest');
    next_dest.innerHTML = dest_and_iframe['facility'];

    // 3. 次の目的地の情報を表示する
    // const next_dest_info = document.querySelector('.next_dest_info');
    // next_dest_info.innerHTML = '営業時間：' + dests['business_hours'][random_num] + '<br>' + '最終入館：' + dests['last_admission_times'][random_num];
}