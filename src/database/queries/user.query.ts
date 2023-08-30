import { BadRequestException } from '@nestjs/common';
import { Model, PipelineStage, Types } from 'mongoose';
import { UserDocument, modelName } from '../schema/user.schema';
import { GenericQueryService } from './_generic.query';

export default class UserQueryService extends GenericQueryService<UserDocument> {
  constructor(model: Model<UserDocument>) {
    super(model, modelName);
  }

  protectInfo = (fields: string[] = []): PipelineStage.Unset => ({
    $unset: ['purchasedLivestreams', 'purchasedCourses', 'stream', ...fields],
  });

  async createEntity(data: any): Promise<UserDocument> {
    if ('walletAddress' in data) {
      const { walletAddress } = data;
      if (await this.checkValidity({ walletAddress }))
        throw new BadRequestException(`${this.modelName} already exists`);
    }

    return super.createEntity(data);
  }
}
