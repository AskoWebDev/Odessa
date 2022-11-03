import React from 'react';
import Cont from './Photos.module.scss';

function Photo() {
	return(
		<div className={Cont.container}>
			<h1>Фото старой Одессы</h1>
			<img src="../../static/images/phoca_thumb_l_StarayaOdessa (050).jpg" />
			<img src="../../static/images/phoca_thumb_l_StarayaOdessa (051).jpg" />
			<img src="../../static/images/phoca_thumb_l_StarayaOdessa (052).jpg" />
			<img src="../../static/images/phoca_thumb_l_StarayaOdessa (054).jpg" />
			<img src="../../static/images/phoca_thumb_l_StarayaOdessa (056).jpg" />
			<img src="../../static/images/phoca_thumb_l_StarayaOdessa (057).jpg" />
			<img src="../../static/images/phoca_thumb_l_StarayaOdessa (058).jpg" />
			<img src="../../static/images/phoca_thumb_l_StarayaOdessa (069).jpg" />
			<img src="../../static/images/phoca_thumb_l_StarayaOdessa (076).jpg" />
			<img src="../../static/images/phoca_thumb_l_StarayaOdessa (083).jpg" />
		</div>
	)
}

export default Photo;