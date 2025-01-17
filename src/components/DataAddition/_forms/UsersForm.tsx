import { Button, Form, Input, notification, Select } from 'antd'
import { useRoles } from '../../../contexts/roles/hooks'
import { UserValidationRule } from '../../../schemas/user.schema'
import { DirectusUser } from '@directus/sdk'
import { createUser } from '../../../services/createUser'

const UsersForm = () => {
  const { rolesData, isLoading } = useRoles()
  const options = rolesData?.map((role) => ({
    value: role.id,
    label: role.name
  }))

  const [api, contextHolder] = notification.useNotification()

  const openSuccessToast = () => {
    api.success({
      message: 'Add User Success',
      placement: 'bottomRight'
    })
  }

  const openFailedToast = () => {
    api.error({
      message: 'Add User Error',
      description: 'Error adding user, please try again later.',
      placement: 'bottomRight'
    })
  }

  const onFinish = async (data: DirectusUser) => {
    try {
      const submit = await createUser(data)

      if (submit) {
        openSuccessToast()
      }
    } catch (error) {
      openFailedToast()
      throw new Error(error as string)
    }
  }

  return (
    <Form layout="vertical" onFinish={onFinish}>
      {contextHolder}
      <div className="w-full md:w-[75%] lg:w-[70%]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5">
          <Form.Item<DirectusUser>
            label="First Name"
            name="first_name"
            rules={[UserValidationRule]}
            required
          >
            <Input />
          </Form.Item>
          <Form.Item<DirectusUser> label="Last Name" name="last_name" rules={[UserValidationRule]}>
            <Input />
          </Form.Item>
          <Form.Item<DirectusUser> label="Email" name="email" rules={[UserValidationRule]} required>
            <Input type="email" />
          </Form.Item>
          <Form.Item<DirectusUser>
            label="Password"
            name="password"
            rules={[UserValidationRule]}
            required
          >
            <Input type="password" />
          </Form.Item>
          <Form.Item<DirectusUser> label="Role" name="role" rules={[UserValidationRule]} required>
            <Select placeholder="Select a role" options={options} loading={isLoading} />
          </Form.Item>
        </div>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Add User
          </Button>
        </Form.Item>
      </div>
    </Form>
  )
}

export default UsersForm
