import http from 'k6/http';
import { sleep, check } from 'k6';

export default function () {
  // Request page containing a form
  let res = http.get('https://quickpizza.grafana.com/admin');

  // Now, submit form setting/overriding some fields of the form
  res = res.submitForm({
    formSelector: 'form',
    fields: { username: 'test', password: 'test2' },
  });

  console.log(res.body);

  sleep(3);
}