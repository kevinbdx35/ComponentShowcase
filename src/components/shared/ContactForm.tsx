import React from 'react';
import { DesignSystemTheme } from '../../types/theme';
import { FormData } from '../../types/shared';

interface ContactFormProps {
  theme: DesignSystemTheme;
  formData: FormData;
  onFormDataChange: (data: FormData) => void;
  onSubmit: (e: React.FormEvent) => void;
  categories: Array<{ label: string; value: string }>;
  budgetRanges: Array<{ label: string; value: string }>;
}

export const ContactForm: React.FC<ContactFormProps> = ({ 
  theme, 
  formData, 
  onFormDataChange, 
  onSubmit,
  categories,
  budgetRanges
}) => {
  const { 
    Card, 
    Heading, 
    Text, 
    Form, 
    FormField, 
    Input, 
    Select, 
    Textarea, 
    Checkbox, 
    RadioGroup, 
    Rating, 
    Button, 
    Grid, 
    Stack 
  } = theme;

  const handleInputChange = (field: keyof FormData) => (value: string | boolean | number) => {
    onFormDataChange({ ...formData, [field]: value });
  };

  return (
    <div style={{ marginBottom: '3rem' }}>
      <Card>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <Heading level={2}>Contact Our Team</Heading>
          <Text variant="subtitle">
            Ready to start your next project? Get in touch with our experts today.
          </Text>
        </div>
        
        <Form onSubmit={onSubmit}>
          <Grid columns={2}>
            <FormField label="Full Name" required>
              <Input
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleInputChange('name')}
                required
              />
            </FormField>
            
            <FormField label="Email Address" required>
              <Input
                type="email"
                placeholder="your.email@company.com"
                value={formData.email}
                onChange={handleInputChange('email')}
                required
              />
            </FormField>
          </Grid>
          
          <FormField label="Inquiry Type">
            <Select
              options={categories}
              value={formData.category}
              onChange={handleInputChange('category')}
            />
          </FormField>
          
          <FormField label="Project Details" required>
            <Textarea
              placeholder="Tell us about your project requirements, timeline, and goals..."
              value={formData.message}
              onChange={handleInputChange('message')}
              required
            />
          </FormField>
          
          <FormField label="Budget Range">
            <RadioGroup
              name="budget"
              options={budgetRanges}
              value={formData.rating.toString()}
              onChange={(value) => handleInputChange('rating')(parseInt(value))}
            />
          </FormField>
          
          <FormField label="Service Rating">
            <Rating
              value={formData.rating}
              max={5}
              onChange={handleInputChange('rating')}
            />
          </FormField>
          
          <FormField>
            <Checkbox
              label="I'd like to receive updates about TechCorp's latest innovations and insights"
              checked={formData.newsletter}
              onChange={handleInputChange('newsletter')}
            />
          </FormField>
          
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <Stack direction="row" spacing={2} style={{ justifyContent: 'center' }}>
              <Button variant="outline" type="button">
                Cancel
              </Button>
              <Button variant="primary" type="submit">
                Send Message
              </Button>
            </Stack>
          </div>
        </Form>
      </Card>
    </div>
  );
};