import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
export default class PostsUserRoute extends Route {
    @service store;
    model(params) {
        const { id } = params;
        return (this.store.query('post', { userId: id }))
    }

    setupController(controller, model) {
        super.setupController(controller, model);
         controller.set('posts', model);
    }
}
