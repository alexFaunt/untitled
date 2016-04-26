import api from '../../api';

export default function ({ auth, body }, res) {
	// TODO - auth only.

	api(
		body,
		({ data, errors }) => errors ?
			res.status(500).send(errors) :
			res.status(200).send(JSON.stringify(data, null, 2)),
		({ message }) => res.status(500).send(message)
	);
}
